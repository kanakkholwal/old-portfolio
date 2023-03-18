import handler from 'lib/handler';
import PageView from "models/PageView";
import dbConnect from "lib/dbConnect";



handler.get(getViews).post(postViews);

async function getViews(req, res, next) {



    try {
        await dbConnect();
        const { page, title } = req.query;


        let pageView = await PageView.findOne({ page });

        if (!pageView) {
            pageView = await PageView.create({ title: title || "unknown page", page, count: 1 });

            return res.status(200).json({ message: "Page added to DB", total: pageView.count })
        }
        else
            return res.status(200).json({ message: "Page view received", total: pageView.count })

    } catch (error) {

        console.log(error);
        return res.status(500).json({ error: "Internal server error", message: error.message });
    }

}
async function postViews(req, res, next) {

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
        return res.status(500).json({ error: "Internal server error", message: error.message });
    }

}

export default handler