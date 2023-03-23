import handler from 'lib/handler';
import { hasTokenMiddleware } from 'middleware/checkUser';
import User from "models/user";
import dbConnect from "lib/dbConnect";


// Path: pages/api/[userId]/works/add.js
// Returns Add work for a user

export default handler
    .use(hasTokenMiddleware)
    .post(async (req, res) => {
        // Add new works
        try {
            await dbConnect();

            const { userId } = req.query;
            const { work } = req.body;

            const { valid, message } = isWorkValid(work);

            if (valid === false) {
                return res.status(400).json({ message })
            }

            const user = await User.findById(userId);

            if (!user) {
                return res.status(404).json({ message: 'User not found!' })
            }

            // if (!user.works.every(p => p.id !== work.id))
            //     return res.status(202).json({ message: 'work already exists!' })

            user.works.push(work);
            await user.save();

            return res.status(200).json({ message: 'works added Successfully!', works: user.works });
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: err.message || "Something went wrong !" })

        }
    })




function isWorkValid(work) {


    if (!work.title || work.title.length === 0) {
        return { valid: false, message: "Title is required" };
    }
    if (!work.description || work.description.length === 0) {
        return { valid: false, message: "Description is required" };
    }
    if (!work.link || work.link.length === 0) {
        return { valid: false, message: "Link is required" };
    }
    if (!work.link.title || work.link.title.length === 0) {
        return { valid: false, message: "Link title is required" };
    }
    if (!work.link.url || work.link.url.length === 0) {
        return { valid: false, message: "Link url is required" };
    }
    if (!work.image || work.image.length === 0) {
        return { valid: false, message: "Image is required" };
    }
    if (!work.github || work.github.length === 0) {
        return { valid: false, message: "Github is required" };
    }
    if (!work.tags || work.tags.length === 0) {
        return { valid: false, message: "Tags are required" };
    }


    return { valid: true, message: "work is valid" };
}
