import handler from 'lib/handler';
import { hasTokenMiddleware } from 'middleware/checkUser';
import User from "models/user";
import dbConnect from "lib/dbConnect";



// Path: pages/api/[userId]/works/get.js
// Returns all works for a user

export default handler
    .use(hasTokenMiddleware)
    .get(async (req, res) => {
        try {
            await dbConnect();


            const { userId } = req.query;

            const user = await User.findById(userId);

            if (!user) {
                return res.status(404).json({ message: 'User not found!' })
            }

            if (!user.works || user.works.length === 0) {
                return res.status(404).json({ message: 'User has no works!' })
            }


            return res.status(200).json({ message: 'works fetched Successfully!', works: user.works })
        }
        catch (err) {
            console.log(err);
            return res.status(200).json({ message: err.message || "Something went wrong !", })

        }
    })


