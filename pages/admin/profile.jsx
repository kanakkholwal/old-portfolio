import { hasToken } from 'lib/checkUser'
import AdminPage from 'components/admin/page';
import Head from 'next/head';

const ProfilePage = () => {


    return (
        <AdminPage>
            <Head>
                <title>Profile</title>
            </Head>
            This page is protected.
        </AdminPage>
    )
}

export default ProfilePage


export async function getServerSideProps(context) {

    const token = await hasToken(context.req)

    if (!token) {
        return {
            redirect: {
                destination: '/admin/login',
                permanent: false
            }
        }
    }

    return { props: {} }
}