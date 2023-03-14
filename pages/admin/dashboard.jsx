import { hasToken } from 'lib/checkUser'
import AdminPage from 'components/admin/page';

const ProtectedPage = () => {


    return (
        <AdminPage>
            This page is protected.
        </AdminPage>
    )
}

export default ProtectedPage


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