import Head from 'next/head';
import AdminPage from 'components/admin/page';
import styled from 'styled-components';
import Button from 'components/button';
import Link from 'next/link';

const Header = styled.div`
padding: 1rem;
border-radius: 0.625rem;
background: #fff;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 1rem;
`;


export default function ProjectPage() {



    return (
        <>
            <Head>
                <title>Your Projects</title>
            </Head>
            <AdminPage>
                <Header >
                    <h3>
                        Your Projects
                    </h3>
                    <Button as={Link} href="/admin/projects/add" size="sm">Add Projects</Button>
                </Header>



            </AdminPage>
        </>)
}