import handler from 'lib/handler';
import { hasTokenMiddleware } from 'middleware/checkUser';
import User from "models/user";
import dbConnect from "lib/dbConnect";


// Path: pages/api/[userId]/works/[workId]/index.js
// Returns work Operations { get , update , delete} for a user

export default handler
    .use(hasTokenMiddleware)
    .post(async (req, res) => {
        try {
            await dbConnect();

            const { userId, workId } = req.query;

            const user = await User.findById(userId);

            if (!user) {
                return res.status(404).json({ message: 'User not found!' })
            }

            if (!user.works || user.works.length === 0) {
                return res.status(404).json({ message: 'User has no works!' })
            }
            if (!workId)
                return res.status(404).json({ message: 'work Id required!' })


            const work = user.works.find(p => p._id.toString() === workId);
            if (!work) {
                return res.status(404).json({ message: 'work not found!' })
            }
            return res.status(200).json({ message: 'work fetched Successfully!!', work: work })
        }
        catch (err) {
            console.log(err);
            return res.status(500).json({ message: err.message || "Something went wrong !", })
        }


    })
    .put(async (req, res) => {
        // Update works
        try {
            await dbConnect();

            const { userId } = req.query;
            const { work } = req.body;

            const user = await User.findById(userId);

            if (!user) {
                return res.status(404).json({ message: 'User not found!' })
            }


            if (work._id) {
                const currentWork = user.works.find(p => p._id.toString() === work._id);
                // if (currentWork._id.toString() !== work._id)
                //     return res.status(400).json({ message: 'work id is invalid!' })

                if (!currentWork)
                    return res.status(404).json({ message: 'work not found!' })


                user.works.forEach((item, index) => {
                    if (item._id.toString() === work._id) {
                        user.works[index] = work;
                    }
                });
                await user.save();
            }
            else
                return res.status(400).json({ message: 'work id is required!' })


            return res.status(200).json({ message: 'works updated Successfully!', work })
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
            const { work } = req.body;

            const user = await User.findById(userId);

            if (!user)
                return res.status(404).json({ message: 'User not found!' })



            if (!work._id)
                return res.status(400).json({ message: 'work id is required!' })


            const currentworkIndex = user.works.findIndex(p => p._id.toString() === work._id);

            if (currentworkIndex === -1)
                return res.status(404).json({ message: 'work not found!' })


            user.works.splice(currentworkIndex, 1);
            await user.save();

            return res.status(200).json({ message: 'works removed Successfully!', works: user.works })

        }
        catch (err) {
            console.log(err)
            return res.status(500).json({ message: err.message || "Something went wrong !", })
        }
    })


