import { hasToken, getUser } from 'lib/checkUser'
import ProjectPage from 'pages/admin/projects';


export default ProjectPage


export async function getServerSideProps(context) {

    const token = await hasToken(context.req);

    const user = await getUser(context.req);
    if (!token) {
        return {
            redirect: {
                destination: '/admin/login',
                permanent: false
            }
        }
    }

    return {
        props: {
            user
        }
    }
}