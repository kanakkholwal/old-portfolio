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



