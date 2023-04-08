import { hasTokenMiddleware } from 'middleware/checkUser';
import User from "models/user";
import dbConnect from "lib/dbConnect";
import handler from 'lib/handler';
import nextConnect from "next-connect";


// Path: pages/api/[userId]/projects/add.js
// Returns Add project for a user



export default nextConnect(handler).use(hasTokenMiddleware)
    .post(async (req, res) => {
        // Add new projects
        try {
            await dbConnect();

            const { userId } = req.query;
            const { project } = req.body;

            const { valid, message } = isProjectValid(project);

            if (valid === false) {
                return res.status(400).json({ message })
            }

            const user = await User.findById(userId);

            if (!user) {
                return res.status(404).json({ message: 'User not found!' })
            }

            // if (!user.projects.every(p => p.id !== project.id))
            //     return res.status(202).json({ message: 'Project already exists!' })

            user.projects.push(project);
            await user.save();

            return res.status(200).json({ message: 'Projects added Successfully!', projects: user.projects });
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: err.message || "Something went wrong !" })

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
