import handler from 'lib/handler';
import { isAdminMiddleware } from 'middleware/checkUser';
import User from "models/user";
import dbConnect from "lib/dbConnect";



export default handler
    .use(isAdminMiddleware)
    .get(async (req, res) => {
        await dbConnect();

        const { userId, projectId } = req.query;

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found!' })
        }

        if (!user.projects || user.projects.length === 0) {
            return res.status(404).json({ message: 'User has no projects!' })
        }
        if (projectId) {
            const project = user.projects.find(p => p._id.toString() === projectId);
            if (!project) {
                return res.status(404).json({ message: 'Project not found!' })
            }
            return res.status(404).json({ message: 'Project fetched Successfully!!', project: project })
        }
        return res.status(200).json({ message: 'Projects fetched Successfully!', projects: user.projects })

    })
    .post(async (req, res) => {
        // Update new projects
        await dbConnect();

        const { userId, project } = req.body;

        const { valid, message } = isProjectValid(project);

        if (valid === false) {
            return res.status(400).json({ message })
        }

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found!' })
        }
        project.id = project.title.split(" ").join("_") + "_" + Math.floor(Math.random() * 1000000);

        if (!user.projects.every(p => p.id !== project.id))
            return res.status(400).json({ message: 'Project already exists!' })

        user.projects.push(project);
        await user.save();

        return res.status(200).json({ message: 'Projects added Successfully!', projects: user.projects });

    })
    .put(async (req, res) => {
        // Update projects
        await dbConnect();

        const { userId, project } = req.body;

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found!' })
        }


        if (project._id) {
            const currentProject = user.projects.find(p => p._id.toString() === project._id);
            if (!currentProject) {
                return res.status(404).json({ message: 'Project not found!' })
            }

            user.projects.forEach((item, index) => {
                if (item._id.toString() === project._id) {
                    user.projects[index] = project;
                }
            });
            await user.save();
        }
        else
            return res.status(400).json({ message: 'Project id is required!' })


        return res.status(200).json({ message: 'Projects fetched Successfully!', project })
    }).delete(async (req, res) => {
        await dbConnect();
        try {
            await dbConnect();

            const { userId, project } = req.body;

            const user = await User.findById(userId);

            if (!user) {
                return res.status(404).json({ message: 'User not found!' })
            }


            if (project._id) {
                const currentProjectId = user.projects.findIndex(p => p._id.toString() === project._id);

                if (currentProjectId !== -1) {
                    user.projects.splice(currentProjectId, 1);
                    await user.save();

                    return res.status(404).json({ message: 'Project not found!' })
                }


            }
            else
                return res.status(400).json({ message: 'Project id is required!' })


            return res.status(200).json({ message: 'Projects removed Successfully!', })

        }
        catch (err) {
            console.log(err)
        }
    })



function isProjectValid(project) {


    if (!project.title || project.title.length === 0) {
        return { valid: false, message: "Title is required" };
    }
    if (!project.description || project.description.length === 0) {
        return { valid: false, message: "Description is required" };
    }
    if (!project.link || project.link.length === 0) {
        return { valid: false, message: "Link is required" };
    }
    if (!project.link.title || project.link.title.length === 0) {
        return { valid: false, message: "Link title is required" };
    }
    if (!project.link.url || project.link.url.length === 0) {
        return { valid: false, message: "Link url is required" };
    }
    if (!project.image || project.image.length === 0) {
        return { valid: false, message: "Image is required" };
    }
    if (!project.github || project.github.length === 0) {
        return { valid: false, message: "Github is required" };
    }
    if (!project.tags || project.tags.length === 0) {
        return { valid: false, message: "Tags are required" };
    }


    return { valid: true, message: "Project is valid" };
}
