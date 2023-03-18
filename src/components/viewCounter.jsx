import { useEffect } from 'react'
import useSWR from 'swr';

async function fetcher(...args) {
    const res = await fetch(...args)
    return res.json()
}

export default function ViewCounter({ slug, title, userId = 'Anonymous' }) {
    const pageName = slug.split('/').join('_');
    const { data, error } = useSWR(`/api/pages/views/${pageName}?title=${title}`, fetcher)
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
                    title, userId
                })
            })
        registerView()
    }, [slug]);

    return `${views > 0 ? views.toLocaleString() : `-`} views`
}