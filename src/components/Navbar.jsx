import styled from 'styled-components';
import Link from 'next/link'

const Nav = styled.nav`
width:clamp(100px, 100%, 1400px);
display:flex;
align-items: center;
justify-content: space-between;
padding:1.25rem 1rem;
margin:2rem auto;
`;
const Logo = styled.h3`
font-weight: 700;
`;
const Menu = styled.div`
display:flex;
margin-left :auto;
align-items: center;
justify-content: space-between;
`;

const NavLink = styled.a`
font-weight: 600;
font-size: 1.25rem;
color:var(--text-color);
&:hover{
    color:var(--theme);
}
`;


export default function NavBar({ navLinks }) {


    return (
        <Nav>
            <Logo>Kanak</Logo>
            <Menu>{navLinks?.map((link, index) => {
                return (<NavLink as={Link} href={link.path} key={index}>{link.name}</NavLink>)
            })}</Menu>
        </Nav>
    )
}