import Head from 'next/head';
import AdminPage from 'components/admin/page';
import { Card } from 'components/card';
import { Input, Label, FormGroup, FormElement, TextArea } from 'components/form-elements';
import styled from 'styled-components';
import Button from 'components/button';
import Link from 'next/link';
import { IoChevronBack } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'


const Header = styled.div`
padding: 1rem;
border-radius: 0.625rem;
background: #fff;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 1rem;
`;


export default function EditProjectPage({ user }) {
    const router = useRouter();
    const { projectId } = router.query;


    const [projectTitle, setProjectTitle] = useState("");
    const [projectData, setProjectData] = useState({
        title: '',
        description: '',
        image: " hii",
        link: {
            title: "",
            url: ""
        },
        github: '',
        tags: []
    })


    useEffect(() => {
        const fetchProject = async () => {
            await fetch(`/api/admin/projects?userId=${user.id}&projectId=${projectId}`, {
                method: 'GET',
                params: {
                    userId: user.id,
                    projectId
                }
            }).then(res => res.json()
            ).then(data => {
                console.log(data);
                setProjectData(data.project);
                setProjectTitle(data.project.title);
            })
        }
        fetchProject();
    }, [router]);

    const handleSubmit = async (e) => {

        e.preventDefault();


        const response = await axios.put('/api/admin/projects', { userId: user.id, project: projectData });

        console.log(response);
    }


    return (
        <>
            <Head>
                <title>Add Project </title>
            </Head>
            <AdminPage>
                <Header>
                    <Button as={Link} href="/admin/projects" size="sm" nature="link" ><IoChevronBack /> Go Back</Button>
                    {projectTitle}
                </Header>
                <Card as="form" onSubmit={handleSubmit}>
                    <FormElement>
                        <Label htmlFor="title">Project Title</Label>
                        <Input id="title" placeholder="Enter the name of the project..." size="100" value={projectData.title} onChange={(e) => setProjectData({ ...projectData, title: e.target.value, })} />
                    </FormElement>
                    <FormElement>
                        <Label htmlFor="description">Project Description</Label>
                        <TextArea id="description" placeholder="Enter the description of the project..." value={projectData.description} onChange={(e) => setProjectData({ ...projectData, description: e.target.value })} />
                    </FormElement>
                    <FormGroup>
                        <FormElement>
                            <Label htmlFor="link_title">Project Link Title</Label>
                            <Input id="link_title" placeholder="example.com/project-name" value={projectData.link.title} onChange={(e) => setProjectData((data) => {
                                return {
                                    ...projectData,
                                    link: {
                                        title: e.target.value,
                                        url: data.link.url
                                    }
                                }
                            })} />
                        </FormElement>
                        <FormElement>
                            <Label htmlFor="link_url">Project Link Url</Label>
                            <Input id="link_url" placeholder="https//www.example.com/project-name/some-path" value={projectData.link.url} onChange={(e) => setProjectData((data) => {
                                return {
                                    ...projectData,
                                    link: {
                                        url: e.target.value,
                                        title: data.link.title
                                    },
                                }
                            })} />
                        </FormElement>
                        <FormElement>
                            <Label htmlFor="github">Project Github Url</Label>
                            <Input id="github" placeholder="https//github.com/username/repository" value={projectData.github} onChange={(e) => setProjectData({ ...projectData, github: e.target.value, })} />
                        </FormElement>
                    </FormGroup>
                    <FormElement>
                        <Label htmlFor="tags">Tags [Separated by (,)]</Label>
                        <Input id="tags" placeholder="e-commerce,frontend,etc.." value={projectData.tags.join(",")} onChange={(e) => setProjectData({ ...projectData, tags: e.target.value.split(","), })} />
                    </FormElement>
                    <FormGroup>
                        <Button type="submit" nature="primary">Submit Projects</Button>
                        <Button type="reset" nature="danger">Reset All</Button>
                        <Button as={Link} href="/admin/projects" nature="warning" size="sm">Cancel</Button>
                    </FormGroup>
                </Card>


            </AdminPage>
        </>)
}