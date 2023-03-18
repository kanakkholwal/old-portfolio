import { useEffect } from 'react'
import useFetch from 'hooks/useFetch';

async function fetcher(...args) {
    const res = await fetch(...args)
    return res.json()
}

export default function ViewCounter({ slug, title, userId = 'Anonymous' }) {
    const pageName = slug.split('/').join('_');
    const { response: data, error } = useFetch(`/api/pages/views/${pageName}?title=${title || "unknown page"}`);
    const views = new Number(data?.total)


    useEffect(() => {
        const pageName = slug.split('/').join('_');

        const registerView = async () =>
            await fetch(`/api/pages/views/${pageName}`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    title: title || "unknown page", userId
                })
            })
        registerView();
    }, [slug]);

    return `${views > 0 ? views.toLocaleString() : `-`} views`
}