import { hasToken } from 'lib/checkUser'
import AdminPage from 'components/admin/page';
import Head from 'next/head';

const WorkPage = () => {


    return (
        <AdminPage>
            <Head>
                <title>Works</title>
            </Head>
            Edit Work here.
        </AdminPage>
    )
}

export default WorkPage


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