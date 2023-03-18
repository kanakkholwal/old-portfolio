import { hasToken } from 'lib/checkUser'
import AddProjectPage from 'pages/admin/addProject';


export default AddProjectPage


export async function getServerSideProps(context) {

    const token = await hasToken(context.req);

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