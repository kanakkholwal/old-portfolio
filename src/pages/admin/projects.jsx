import styled from 'styled-components';
import Head from 'next/head';
import AdminPage from 'components/admin/page';
import Button from 'components/button';
// import SnackBar from 'components/SnackBar';
import { Card } from 'components/card';
import { Badge } from 'components/topography';
import ProjectCard from 'components/admin/projectCard';
import { Loader } from "components/Loader";
import Link from 'next/link';
import useFetch from 'hooks/useFetch';
import { IoMdAdd } from 'react-icons/io';

// import { useEffect, useState } from 'react';
// import axios from 'axios';

const Header = styled.div`
padding: 1rem;
border-radius: 0.625rem;
background: #fff;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 1rem;
`;
const CardWrapper = styled.div`
display: flex;
flex-wrap: wrap;
gap: 1rem;

`;

// const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProjectPage({ user }) {
    // const [snackObj, SetSnackObj] = useState({ Message: "Some error Occurred", open: false });

    const { response, loading, error } = useFetch(`/api/users/${user.id}/projects`)



    return (
        <>
            <Head>
                <title>Your Projects</title>
            </Head>
            <AdminPage>
                <Header >
                    <h3>
                        Your Projects ({response?.projects?.length})
                    </h3>
                    <Button as={Link} href="/admin/projects/add" size="sm" nature="link" > <IoMdAdd />Add Projects</Button>
                </Header>
                <Card>
                    {loading && <Loader size="48px" />}
                    {response?.message && <p>{response?.message}</p>}
                    {error?.message && <p>{error?.message}</p>}
                    {response?.projects?.length > 0 && <p style={{ textAlign: "center" }}><Badge>Showing {response?.projects?.length} Projects </Badge></p>}
                    {response?.projects?.length === 0 && <p>No Projects</p>}
                    <CardWrapper>
                        {response?.projects?.map((item, index) => (<ProjectCard key={index} project={item} />))}
                    </CardWrapper>
                    ``   </Card>



            </AdminPage>
            {/* <SnackBar  {...snackObj} /> */}
        </>)
}


    // const { data: response, isLoading, error } = useSWR([`/api/admin/projects?userId=${user.id}`], fetcher)
    // const fetchProjects = async () => {

    //     await axios.get(`/api/admin/projects?userId=${user.id}`, {
    //         params: {
    //             userId: user.id
    //         }
    //     }).then(response => {
    //         console.log(response);
    //         setResponse(response.data);
    //     })
    //         .catch(err => {
    //             console.log(err);
    //         })
    //         .finally(() => {
    //             setLoading(false);
    //         })


    // }

    // console.log(response);

    // useEffect(() => {
    //     fetchProjects()

    // }, [])