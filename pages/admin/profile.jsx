import { hasToken, getUser } from 'lib/checkUser'
import ProfilePage from 'pages/admin/profile';



export default ProfilePage



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