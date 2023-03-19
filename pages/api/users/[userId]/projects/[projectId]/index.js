import handler from 'lib/handler';
import { hasTokenMiddleware } from 'middleware/checkUser';
import User from "models/user";
import dbConnect from "lib/dbConnect";


// Path: pages/api/[userId]/projects/[projectId]/index.js
// Returns Project Operations { get , update , delete} for a user

export default handler
    .use(hasTokenMiddleware)
    .get(async (req, res) => {
        try {
            await dbConnect();

            const { userId, projectId } = req.query;

            const user = await User.findById(userId);

            if (!user) {
                return res.status(404).json({ message: 'User not found!' })
            }

            if (!user.projects || user.projects.length === 0) {
                return res.status(404).json({ message: 'User has no projects!' })
            }
            if (!projectId)
                return res.status(404).json({ message: 'Project Id required!' })


            const project = user.projects.find(p => p._id.toString() === projectId);
            if (!project) {
                return res.status(404).json({ message: 'Project not found!' })
            }
            return res.status(200).json({ message: 'Project fetched Successfully!!', project: project })
        }
        catch (err) {
            console.log(err);
            return res.status(500).json({ message: err.message || "Something went wrong !", })
        }


    })
    .put(async (req, res) => {
        // Update projects
        try {
            await dbConnect();

            const { userId } = req.query;
            const { project } = req.body;

            const user = await User.findById(userId);

            if (!user) {
                return res.status(404).json({ message: 'User not found!' })
            }


            if (project._id) {
                const currentProject = user.projects.find(p => p._id.toString() === project._id);
                // if (currentProject._id.toString() !== project._id)
                //     return res.status(400).json({ message: 'Project id is invalid!' })

                if (!currentProject)
                    return res.status(404).json({ message: 'Project not found!' })


                user.projects.forEach((item, index) => {
                    if (item._id.toString() === project._id) {
                        user.projects[index] = project;
                    }
                });
                await user.save();
            }
            else
                return res.status(400).json({ message: 'Project id is required!' })


            return res.status(200).json({ message: 'Projects updated Successfully!', project })
        }
        catch (err) {
            console.log(err);
            return res.status(500).json({ message: err.message || "Something went wrong !", })
        }
    })
    .delete(async (req, res) => {
        try {
            await dbConnect();

            const { userId } = req.query;
            const { project } = req.body;

            const user = await User.findById(userId);

            if (!user)
                return res.status(404).json({ message: 'User not found!' })



            if (!project._id)
                return res.status(400).json({ message: 'Project id is required!' })


            const currentProjectIndex = user.projects.findIndex(p => p._id.toString() === project._id);

            if (currentProjectIndex === -1)
                return res.status(404).json({ message: 'Project not found!' })


            user.projects.splice(currentProjectIndex, 1);
            await user.save();

            return res.status(200).json({ message: 'Projects removed Successfully!', projects: user.projects })

        }
        catch (err) {
            console.log(err)
            return res.status(500).json({ message: err.message || "Something went wrong !", })
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
