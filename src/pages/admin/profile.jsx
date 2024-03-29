import AdminPage from 'components/admin/page';
import Head from 'next/head';
import styled from 'styled-components';
import Button from 'components/button';
import Alert from 'components/alert';
import Image from 'next/image';
import Link from 'next/link';
import { Loader } from 'components/Loader';
import { Card } from 'components/card';
import axios from 'axios';
import { useState } from 'react';
import { FileInput, FormElement, Label, Input, FormGroup } from 'components/form-elements';

const Header = styled.div`
padding: 1rem;
border-radius: 0.625rem;
background: #fff;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 1rem;
`;

export default function ProfilePage({ user: CurrentUser }) {


    const [user, setUser] = useState(CurrentUser);
    const [state, setState] = useState({
        loading: false,

        alert: {
            open: false,
            message: "",
            type: ""
        }
    });
    const handleFiles = async (files) => {
        setState({ ...state, loading: true });

        const formData = new FormData();
        formData.append('file', files[0]);
        formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET);
        formData.append('folder', process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER);


        // upload image to cloudinary and get url
        await axios(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, {
            method: 'POST',
            data: formData
        }).then(res => {
            const file = res.data;
            // console.log(file);
            setUser({ ...user, profileURl: file.secure_url });
            setState({
                alert: {
                    open: true,
                    message: "Image uploaded successfully",
                    type: "success"
                }, loading: false
            });
        }).catch(err => {
            console.log(err);
            setState({
                alert: {
                    open: true,
                    message: err?.message || "Something went wrong",
                    type: "danger"
                }, loading: false
            });

        })





    }


    const handleChange = async (event) => {
        const { files } = event.target;

        if (files && files.length) {
            console.log(files);
            handleFiles(files);
        }
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log(user);

        setState({ ...state, loading: true });
        try {
            await axios.put('/api/auth/update', { user })
                .then(res => {
                    console.log(res);
                    if (res.data.success) {
                        setState({
                            alert: {
                                open: true,
                                message: "User updated successfully",
                                type: "success"
                            }, loading: false
                        });
                    }
                }).catch(err => {
                    console.log(err);
                    setState({
                        alert: {
                            open: true,
                            message: err?.message || "Something went wrong",
                            type: "danger"
                        }, loading: false
                    });

                })
        }
        catch (err) {
            console.log(err);
            setState({
                alert: {
                    open: true,
                    message: err?.message || "Something went wrong",
                    type: "danger"
                }, loading: false
            });
        }
    }

    return (
        <AdminPage>
            <Head>
                <title>Edit Profile</title>
            </Head>
            <Header>
                Edit your profile here
            </Header>
            <Card>

                <FormGroup style={{ justifyContent: "flex-start" }}>

                    <FormElement>
                        <div>
                            {user.profileURl ? <Image width={150} height={150} alt={user.title} src={user.profileURl} style={{ maxHeight: "400px", }} /> : null}
                        </div>
                    </FormElement>
                    <FormElement>
                        <Label htmlFor="profile-pic">Upload a Picture</Label>
                        <FileInput accept="image/*" id="profile-pic" onChange={handleChange} />
                        <Label htmlFor="profile-pic-url">or Enter a url</Label>
                        <Input placeholder="Enter or paste picture url from external source..." id="profile-pic-url" value={user?.profileURl} onChange={(e) => setUser({
                            ...user,
                            profileURl: e.target.value
                        })} />
                    </FormElement>
                </FormGroup>
                <FormElement>
                    <Label htmlFor="name">Your Name</Label>
                    <Input placeholder="Enter your name." id="name" value={user?.name} onChange={(e) => setUser({
                        ...user,
                        name: e.target.value
                    })} />
                </FormElement>
                <FormElement>
                    <Label htmlFor="profile-pic-url">Your Name</Label>
                    <Input placeholder="email" type="email" id="email" value={user?.email} onChange={(e) => setUser({
                        ...user,
                        email: e.target.value
                    })} />
                </FormElement>

                <FormGroup>
                    <Alert nature={state.alert.type} open={state.alert.open}>{state.alert.message}</Alert>
                    {state.loading ? <Loader /> : null}
                    <Button size="sm" nature="primary" onClick={handleSubmit}>Save Profile</Button>
                    <Button size="sm" nature="danger" as={Link} href="/admin/dashboard">Cancel</Button>

                </FormGroup>
            </Card>
        </AdminPage>)
}