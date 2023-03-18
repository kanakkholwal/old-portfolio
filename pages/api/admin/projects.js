import handler from 'lib/handler';
import { isAdminMiddleware } from 'middleware/checkUser';
import User from "models/user";



export default handler
    .use(isAdminMiddleware)
    .get(async (req, res) => {
        const { userId } = req.body;

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found!' })
        }
        if (!user.projects) {
            return res.status(404).json({ message: 'User has no projects!' })
        }
        if (user.projects.length === 0) {
            return res.status(404).json({ message: 'User has no projects!' })
        }
        return res.status(200).json({ message: 'Projects fetched Successfully!', projects: user.projects })

    })
    .post(async (req, res) => {
        // Update new projects

        const { userId, project } = req.body;

        const { valid, message } = isProjectValid(project);
        if (valid === false) {
            return res.status(400).json({ message })
        }

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found!' })
        }
        if (!user.projects.every(p => p._id !== project._id))
            return res.status(400).json({ message: 'Project already exists!' })

        user.projects = { project, ...user.projects };

        await user.save();

        return res.status(200).json({ message: 'Projects added Successfully!', projects: user.projects });

    })
    .put(async (req, res) => {
        // Update projects
        const { userId, project } = req.body;

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found!' })
        }
        user.projects = project;
        await user.save();
        return res.status(200).json({ message: 'Projects fetched Successfully!', projects: user.projects })
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
