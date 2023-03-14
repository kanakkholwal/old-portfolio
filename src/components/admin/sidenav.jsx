import styled from 'styled-components';
import { signOut, useSession } from 'next-auth/react';
import Button from 'components/buttons';
import NavLink from 'components/navLink';

const SideNavWrapper = styled.div`
position: fixed;
inset-block: 0;
left:0;
width: 16rem;
height: 100%;
background-color: #fff;
box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
border-right: 1px solid rgba(0, 0, 0, 0.1);
padding: 1.25rem;
font-weight: 400;
font-size: 0.875rem;
`;
const SideNavHeader = styled.div`
padding: 1rem 0.5rem 2rem ;
text-align: center;
border-bottom: 1px solid rgba(0, 0, 0, 0.1);
margin-bottom: 1rem;
`;
const SectionTitle = styled.h6`
color: rgba(0, 0, 0, 0.4);
padding: 0.5rem 0;
`;

const LinkList = styled.div`
display:flex;
flex-direction:column;
gap:0.25rem;
align-items:center;
`;
const Link = styled.a`
display:flex;
gap:0.25rem;
align-items:center;
justify-content:flex-start;
width:100%;
`;
const LogoutButton = styled.button`
margin-top:auto;
width:100%;
`;


const RecursiveLinkList = ({ links }) => {

    return (<LinkList>{links?.map((item, index) => (<Link as={NavLink} key={index} href={item.path}>{item.title}{item.children?.length > 0 ? <RecursiveLinkList links={item.children} /> : null}</Link>))}</LinkList>)
}

export default function SideNav({ links }) {

    const { data: session } = useSession();

    return (
        <SideNavWrapper>
            <SideNavHeader>Hi , {session?.user?.name}</SideNavHeader>
            {links?.length > 0 ? <RecursiveLinkList links={links} /> : null}
            <LogoutButton as={Button} onClick={() => signOut()}>Sign Out </LogoutButton>
        </SideNavWrapper>
    )
}
