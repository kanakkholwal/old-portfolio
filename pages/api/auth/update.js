import dbConnect from "lib/dbConnect";
import User from "models/user";


export default async function handler(req, res) {
    await dbConnect();

    const { user } = req.body;

    if (req.method === "PUT") {


        if (!user.id)
            return res.status(401).json({
                message: 'User Id is required',
            })
        try {
            const currentUser = await User.findById(user.id);

            if (!currentUser) {
                return res.status(401).json({
                    message: 'User not found',
                })
            }
            currentUser.profileURl = user.profileURl;
            currentUser.name = user.name;
            currentUser.save();

            return res.json({
                message: 'User updated successfully ',
                user: user
            })



        } catch (error) {
            return res.status(401).json({
                message: error.message || " Something went wrong",
            })
        }
    } else {
        res.status(424).json({ message: "Invalid method!" });
    }
}

