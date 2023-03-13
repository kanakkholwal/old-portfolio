import { hasToken } from 'lib/checkUser'

const ProtectedPage = () => {
    return (
        <div>
            This page is protected.
        </div>
    )
}

export default ProtectedPage


export async function getServerSideProps(context) {

    const token = await hasToken(context.req)

    if (!token) {
        return {
            redirect: {
                destination: '/admin',
                permanent: false
            }
        }
    }

    return { props: {} }
}