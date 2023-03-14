import dbConnect from "lib/dbConnect";
import User from "models/user";
import jwt from "jsonwebtoken";


export default async function handler(req, res) {
    await dbConnect();

    const { email, password } = req.body;

    if (req.method === "POST") {


        try {

            const user = await User.findOne({ email });

            if (!user) {
                return res.status(401).json({
                    message: 'Email is not registered',
                })
            }

            // if (bcrypt.compareSync(password, user.password)) {
            const token = jwt.sign(
                {
                    email: user.email,
                    userId: user._id,
                }
            );

            return res.status(200).json({
                token,
                _id: user._id,
                message: "Login success"
            });


        } catch (error) {
            return res.status(401).json({
                message: 'Authentication failed',
            })
        }
    } else {
        res.status(424).json({ message: "Invalid method!" });
    }
}

