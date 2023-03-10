import Head from 'next/head'
import { useSession, signOut, signIn, signUp } from 'next-auth/react';
import Link from 'next/link';

export default function Home() {

    const { data: session } = useSession()

    return (
        <div >
            <Head>
                <title>Basic Auth</title>
            </Head>

            <main>
                <h1>Hello {session?.user?.name || "Unknown"}</h1>
                <Link href="/login">
                    <button onClick={() => signIn()}>Sign In</button>
                </Link>
                <button onClick={() => signOut()}>Sign Out</button>
            </main>
        </div>
    )
}