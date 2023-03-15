import { hasToken } from 'lib/checkUser'
import AdminPage from 'components/admin/page';
import Head from 'next/head';

const ProjectPage = () => {


    return (
        <AdminPage>
            <Head>
                <title>Projects</title>
            </Head>
            Edit projects here.
        </AdminPage>
    )
}

export default ProjectPage


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