import { useRef } from 'react';
import { signIn } from 'next-auth/react';
import styled from 'styled-components';
import Button from 'components/button';
import { Input, FormElement, Label, FormHelper } from 'components/form-elements';

// This goes to our signup API endpoint
async function createUser(email, password) {
    const response = await fetch('/api/auth/signup', {
        method: 'POST',
        body: JSON.stringify({ email, password, name: "Kanak", role: "admin" }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Something went wrong!');
    }

    return data;
}
const Wrapper = styled.div`
min-height:100vh;
height:100%;
width:100%;
display:flex;
`;
const ActionPanel = styled.div`
display: flex;
align-items: center;
text-align: center;
flex-direction: column;
margin-bottom: 3rem;
background: #FFF9F9;
box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.1);
border-radius: 25px;
padding:2rem 2.5rem;
max-width: 33rem;
flex: 1 1 auto;
margin:auto;
`;
const Header = styled.div`
width: 100 %;
text-align: center;
margin-block: 1rem 2rem;
`;
const Title = styled.h1`
font-weight: 700;
font-size: 3rem;
margin-block: 1.75rem;
letter-spacing: 0.5em;
letter-spacing: 0.085em;
color: #41464b!important;
text-align: center;
display: block;
&:active,&:hover{
    color: #047f87;
}
`;
const Heading = styled.h2`
font-weight: 700;
font-size: 2.25rem;
margin-block: 0.75rem;
letter-spacing: 0.065em;
color: #000000;
`;
const SubHeading = styled.p`
font-weight: 500;
color: #000000;
`;
const GoToLink = styled.a`
font-weight: 700;
font-size: 1rem;
color: #00A6DB;
`;
const Form = styled.div`
width: 100 %;
display: flex;
align-items: center;
flex-direction: column;
`;


// This gets handled by the [...nextauth] endpoint
function AuthForm() {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();






    async function submitHandler(event) {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        // optional: Add validation here

        await signIn('credentials', {
            redirect: '/admin/dashboard',
            email: enteredEmail,
            password: enteredPassword,
        }).then((data) => console.log(data))
            .catch((error) => console.log(error));


    }

    return (<Wrapper>
        <ActionPanel>

            <Heading>Login</Heading>
            <Form onSubmit={submitHandler}>
                <FormElement>
                    <Label htmlFor='email'>Your Email</Label>
                    <Input type='email' id='email' required ref={emailInputRef} />
                </FormElement>
                <FormElement>
                    <Label htmlFor='password'>Your Password</Label>
                    <Input
                        type='password'
                        id='password'
                        required
                        ref={passwordInputRef}
                    />
                </FormElement>
                <FormElement>
                    <Button type='submit' onClick={submitHandler}>Login</Button>

                </FormElement>
            </Form>

        </ActionPanel>
    </Wrapper>);
}

export default AuthForm;