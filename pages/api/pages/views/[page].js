import PageView from "models/PageView";
import dbConnect from "lib/dbConnect";

import handler from 'lib/handler';
import nextConnect from "next-connect";


export default nextConnect(handler).get(async (req, res, next) => {
    try {

        await dbConnect();

        const { page } = req.query;
        const { title } = req.header;


        if (!page)
            return res.status(400).json({ error: "Bad request", message: "Page name is required" })

        let pageView = await PageView.findOne({ page: page });

        if (!pageView) {
            pageView = await PageView.create({ title: title || "unknown page", page, count: 1 });

            return res.status(200).json({ message: "Page added to DB", total: pageView.count })
        }
        else
            return res.status(200).json({ message: "Page view received", total: pageView.count })

    } catch (error) {

        console.log(error);
        return res.status(500).json({ error: "Internal server error while getting views", message: error.message });
    }

})
    .post(async (req, res, next) => {
        try {
            await dbConnect();

            const { page } = req.query;
            const { title, userId } = req.body;

            let pageView = await PageView.findOne({ page });

            if (!pageView) {
                pageView = await PageView.create({ title: title || "unknown page", page, count: 1, visitors: [userId || "Anonymous"] });

                return res.status(200).json({ message: "Page added to DB", total: pageView.count, type: userId ? "Authenticated" : "Anonymous" })
            }

            pageView.count += 1;
            pageView.visitors.push(userId || "Anonymous")

            await pageView.save();

            return res.status(200).json({ message: "Page view incremented", total: pageView.count, type: userId ? "Authenticated" : "Anonymous" })

        } catch (error) {

            console.log(error);
            return res.status(500).json({ error: "Internal server error while registering view", message: error.message });
        }

    });



// Path: pages/api/pages/views/index.js