import Head from 'next/head';
import AdminPage from 'components/admin/page';
import DragAndDrop from 'components/drag-and-drop';
import Alert from 'components/alert';
import { Card } from 'components/card';
import { Input, Label, FormGroup, FormElement, TextArea } from 'components/form-elements';
import styled from 'styled-components';
import Button from 'components/button';
import Link from 'next/link';
import { IoChevronBack } from 'react-icons/io5';
import { useState } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';

const Header = styled.div`
padding: 1rem;
border-radius: 0.625rem;
background: #fff;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 1rem;
`;


export default function AddProjectPage({ user }) {

    const [state, setState] = useState({
        loading: false,

        alert: {
            open: false,
            message: "",
            type: ""
        }
    });


    const [projectData, setProjectData] = useState({
        title: '',
        description: '',
        image: "",
        link: {
            title: "",
            url: ""
        },
        github: '',
        tags: []
    });


    const handleFiles = async (files) => {
        const formData = new FormData();
        formData.append('file', files[0]);
        formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET);
        formData.append('folder', process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER);


        // upload image to cloudinary and get url
        const res = await axios(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, {
            method: 'POST',
            data: formData
        });
        const file = await res.data;
        // console.log(file);
        setProjectData({ ...projectData, image: file.secure_url });

    }


    const handleChange = async (event) => {
        const { files } = event.target;

        if (files && files.length) {
            console.log(files);
            handleFiles(files);
        }
    }

    const handleDrop = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        const { files } = e.dataTransfer

        if (files && files.length) {
            console.log(files);
            handleFiles(files);
        }
    }



    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(`/api/users/${user.id}/projects/add`, { project: projectData })
        console.log(response);
    }



    return (
        <>
            <Head>
                <title>Add Project</title>
            </Head>
            <AdminPage>
                <Header>
                    <Button as={Link} href="/admin/projects" size="sm" nature="link" ><IoChevronBack /> Go Back</Button>
                </Header>
                <Card as="form" onSubmit={handleSubmit}>
                    <FormElement>
                        <Label htmlFor="title">Project Title</Label>
                        <Input id="title" placeholder="Enter the name of the project..." size="100" value={projectData.title} onChange={(e) => setProjectData({ ...projectData, title: e.target.value, })} />
                    </FormElement>
                    <FormElement>
                        <Label htmlFor="description">Project Description</Label>
                        <TextArea id="description" rows={8} placeholder="Enter the description of the project..." value={projectData.description} onChange={(e) => setProjectData({ ...projectData, description: e.target.value })} />
                    </FormElement>
                    <FormElement>
                        <DragAndDrop onChange={handleChange} onDrop={handleDrop} />
                        <Label htmlFor="image_url">Project Image Url</Label>
                        <Input id="image_url" placeholder="Enter the Thumbnail url or upload any valid image" value={projectData.image} onChange={(e) => setProjectData({ ...projectData, image: e.target.value, })} />
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
                        <Alert nature={state.alert.type} open={state.alert.open}>{state.alert.message}</Alert>
                        {state.loading ? <Loader /> : null}
                        <Button type="submit" nature="primary">Submit Projects</Button>
                        <Button type="reset" nature="danger" onClick={() => setProjectData({
                            title: '',
                            description: '',
                            image: " ",
                            link: {
                                title: "",
                                url: ""
                            },
                            github: '',
                            tags: []
                        })}>Reset All</Button>
                        <Button as={Link} href="/admin/projects" nature="warning" size="sm">Cancel</Button>
                    </FormGroup>
                </Card>


            </AdminPage>
        </>)
}