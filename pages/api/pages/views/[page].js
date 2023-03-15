import handler from 'lib/handler';
import PageView from "models/PageView";



handler.get(getViews).post(postViews);

async function getViews(req, res, next) {
    try {
        const { page } = req.query;

        let pageView = await PageView.findOne({ page });

        if (!pageView) {
            pageView = new PageView({ page: page, count: 1 });
            await pageView.save();
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
        const { page, userId } = req.query;

        let pageView = await PageView.findOne({ page });

        if (!pageView) {
            pageView = new PageView({ page: page, count: 1, visitors: [userId ?? "Anonymous"] });
            await pageView.save();
            return res.status(200).json({ message: "Page added to DB", total: pageView.count, type: userId ? "Authenticated" : "Anonymous" })
        }

        pageView.count = pageView.count + 1;
        pageView.visitors = [(userId ?? "Anonymous"), ...pageView.visitors];

        await pageView.save();

        return res.status(200).json({ message: "Page view incremented", total: pageView.count, type: userId ? "Authenticated" : "Anonymous" })

    } catch (error) {

        console.log(error);
        return res.status(500).json({ error: "Internal server error", message: error.message });
    }

}

export default handler