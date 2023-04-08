import User from 'models/user';
import dbConnect from 'lib/dbConnect';
import handler from 'lib/handler';
import nextConnect from "next-connect";


export default nextConnect(handler)
    .post(createUser)

async function createUser(req, res) {

    const data = req.body;

    const { email, password } = data;

    dbConnect();

    const user = await User.create(req.body)

    res.status(201).json({ message: 'Created user!' });

}

