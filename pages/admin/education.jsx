import { hasToken } from 'lib/checkUser'
import AdminPage from 'components/admin/page';
import Head from 'next/head';

const EducationPage = () => {


    return (
        <AdminPage>
            <Head>
                <title>Profile</title>
            </Head>
            Edit Education here.
        </AdminPage>
    )
}

export default EducationPage


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