import axios from 'axios';
import { hasToken, getUser } from 'lib/checkUser'
import EditProjectPage from 'pages/admin/editProject';


export default EditProjectPage


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
    const user = await getUser(context.req);




    return {
        props: { user },

    }
}