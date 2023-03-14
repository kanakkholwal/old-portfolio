import { useState, useRef } from 'react';
import { getProviders, signIn, getSession, getCsrfToken } from 'next-auth/react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Button from '../buttons';

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
const Input = styled.input`
letter-spacing: 0.1em;
width: 100 %;
opacity: 0.95;
margin-bottom: 1.5rem;
font-weight: 500;
font-size: 1.25rem;
color: rgba(0, 0, 0, 0.95);
transition: all .2s linear;
border-radius: 0.5rem;
padding: calc(0.33rem + 1px) calc(0.75rem + 1px);

border: ${props => props.outlined ? "2px" : "1px"} solid  #F1F1F1;
background: #F1F1F1;


&::placeholder {
    font-weight: 500;
    color: rgba(0, 0, 0, 0.5);
}


&:focus {
    border-color:#05A7B1;
}
`;
const Label = styled.label`
margin-bottom: 0.25rem;
padding-left: 0.25rem;
font-weight: 500;
font-size: 1.25rem;
color: rgba(0, 0, 0, 0.8);
`;
const FormHelper = styled.div`
font-weight: 300;
margin: 0.25rem auto;
margin-left: 0.25rem;
text-align: left;
color:${props => props.error ? "#dc4c64" : "#eee"};
svg{
    margin-inline: 0.25rem;
}
`;
const FormElement = styled.div`

display: flex;
align-items: flex-start;
flex-direction: column;
margin: 0.25rem auto .25rem;
width: clamp(calc(100% - 10px), 100%, 35rem);

${FormHelper} {
    order: 3;
}
  &: has(${FormHelper}){
    &> ${Input},&> textarea{
        margin-bottom: 0
    }
}
${Label},label {
    order: 1;
    display: flex;
}

${Input},
textarea, input, select {
    order: 2;
    display: flex;
}
`;
const ActionButton = styled.button`
background: var(--theme);
padding: 1rem 1.75rem;
border-radius: 15px;
font-weight: 600;
font-size: 1.5rem;
width: 100%;
margin: 0.5rem auto;
text-align: center;
letter-spacing: 0.065em;
color: #FFFFFF;
svg{
    font-weight: 600;
    font-size: 1.5rem;
}
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