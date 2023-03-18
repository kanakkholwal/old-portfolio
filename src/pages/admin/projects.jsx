import styled from 'styled-components';
import Head from 'next/head';
import AdminPage from 'components/admin/page';
import Button from 'components/button';
import { Card } from 'components/card';
import ProjectCard from 'components/admin/projectCard';
import { Loader } from "components/Loader";
import Link from 'next/link';

import useSWR from 'swr'
import axios from 'axios';
import { useEffect } from 'react';

const Header = styled.div`
padding: 1rem;
border-radius: 0.625rem;
background: #fff;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 1rem;
`;

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProjectPage({ user }) {


    const { data: response, isLoading, error } = useSWR([`/api/admin/projects?userId=${user.id}`], fetcher)

    // console.log(response);

    useEffect(() => {
        const fetchProjects = async () => {
            const response = await axios.get(`/api/admin/projects?userId=${user.id}`, {
                params: {
                    userId: user.id
                }
            });

            console.log(response);
        }
        // fetchProjects()

    }, [])

    console.log(response);

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
                <Card>
                    {isLoading && <Loader size="48px" />}
                    {error && <p>{error.message}</p>}
                    {response?.message && <p>{response?.message}</p>}
                    {response?.projects?.length > 0 && <p>Showing {response?.projects?.length} Projects</p>}
                    {response?.projects?.length === 0 && <p>No Projects</p>}
                    {response?.projects?.map((item, index) => (<ProjectCard key={index} project={item} />))}
                </Card>



            </AdminPage>
        </>)
}