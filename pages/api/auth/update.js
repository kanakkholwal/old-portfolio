import dbConnect from "lib/dbConnect";
import User from "models/user";


export default async function handler(req, res) {
    await dbConnect();

    const { user } = req.body;

    if (req.method === "PUT") {


        try {

            const user = await User.findbyId(user.id);

            if (!user) {
                return res.status(401).json({
                    message: 'Email is not registered',
                })
            }

           

        } catch (error) {
            return res.status(401).json({
                message: 'Authentication failed',
            })
        }
    } else {
        res.status(424).json({ message: "Invalid method!" });
    }
}

