import AdminPage from 'components/admin/page';
import Head from 'next/head';
import styled from 'styled-components';
import Button from 'components/button';
import Alert from 'components/alert';
import {Loader} from 'components/Loader';
import { Card } from 'components/card';
import axios from 'axios';
import {useState} from 'react';
import { FileInput, FormElement, Label, Input ,FormGroup} from 'components/form-elements';

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
  
    return (
        <AdminPage>
            <Head>
                <title>Edit Profile</title>
            </Head>
            <Header>
                Edit your profile here
                <Button size="sm" nature="link">Save Profile</Button>
            </Header>
            <Card>
                <FormElement>
                    <Label htmlFor="profile-pic">Upload a Picture</Label>
                    <FileInput accept="image/*" id="profile-pic" onChange={handleChange} />
                    <Label htmlFor="profile-pic-url">or Enter a url</Label>
                    <Input placeholder="Enter or paste picture url from external source..." id="profile-pic-url" value={user?.profileURl} onChange={() => setUser({
                        ...user,
                        profileURl
                    })} />
                </FormElement>
                <FormElement>
                    <Label htmlFor="name">Your Name</Label>
                    <Input placeholder="Enter your name." id="name" value={user?.name} onChange={() => setUser({
                        ...user,
                        name
                    })} />
                </FormElement>
                <FormElement>
                    <Label htmlFor="profile-pic-url">Your Name</Label>
                    <Input placeholder="email" type="email" id="email" value={user?.email} onChange={() => setUser({
                        ...user,
                        email
                    })} />
                </FormElement>

                <FormGroup>
                        <Alert nature={state.alert.type} open={state.alert.open}>{state.alert.message}</Alert>
                        {state.loading ? <Loader /> : null}
                        </FormGroup>
            </Card>
        </AdminPage>)
}