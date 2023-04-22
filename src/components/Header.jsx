import styled, { keyframes } from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink, FiCodesandbox } from "react-icons/fi";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { GrInfo } from "react-icons/gr";

const spin = keyframes`
0% {
    transform: rotate(0deg);
}
100% {
    transform: rotate(360deg);
}
`;

const HeaderArea = styled.header`
margin-top:6rem;
position:relative;
width:clamp(100px, 100%, 1400px);
margin-inline:auto;
`;


const DesignArea = styled.div`
position:absolute;
inset:0;
z-index:0;
`;
const DesignAreaContainer = styled.div`
position:relative;
width:100%;
height:100%;
`;
const PatternAreaContainer = styled.div`
position:absolute;
top:50%;
right:50%;
transform:translate(30%,-50%);
`;
const Pattern1 = styled.div`
position: absolute;
width: 112px;
height: 112px;

left: auto;
right: auto;
top: 10%;

border-radius:50%;
background: #BEF3EA;
`;
const Pattern2 = styled.div`
position: absolute;
width: 112px;
height: 112px;

left: 30%;
right: auto;
top: 55%;

border-radius:50%;
background: #FFDBEC;
`;
const Pattern3 = styled.div`
position: absolute;
width: 591px;
height: 579px;

left: 0;
right: 0;
top: 0;

background: #FFD5E9;
opacity: 0.5;
filter: blur(100px);
`;
const Pattern4 = styled.div`
position: absolute;
width: 641px;
height: 563px;


left: 0;
right: 0;
bottom: 0;

background: #D2FFF7;
opacity: 0.5;
filter: blur(100px);
`;
const PatternArea = styled.div`
position:relative;
width: clamp(100px,100%,641px);
height: 100%;
max-height: 563px;
`;


const Patterns = () => (
    <PatternAreaContainer>
        <PatternArea>
            <Pattern1 />
            <Pattern2 />
            <Pattern3 />
            <Pattern4 />
        </PatternArea>
    </PatternAreaContainer>)

const ContentArea = styled.div`
z-index:2;
height: inherit;
max-width: 1720px;
display:flex;
align-items:stretch;
justify-content:space-between;
backdrop-filter: blur(5px);
padding-block: 6rem 2rem;
padding-inline: 1.75rem;
`;

const ImageSection = styled.div`
flex: 1 1 auto;
display:flex;
align-items:center;
justify-content:center;
img{
    border-radius:50%;
    overflow:hidden;
    width:425px;
    aspect-ratio:1/1;
    object-fit:cover;
    object-position:center;
    box-shadow: 0px 4px 4px #FFDBEC,
    0px 4px 4px #BEF3EA ;
}

`;
const ContentSection = styled.div`
flex: 1 1 auto;
max-width: 728px;
`;
const Heading = styled.h2`
font-weight: 400;
font-size: 3rem;
line-height: 110%;
color: #242F65;
margin-bottom:1.5rem;
strong{
    font-weight: 700;
}
`;
const SubHeading = styled.h6`
font-weight: 500;
font-size: 1.25rem;
color: #242F65;
margin-bottom:1.75rem;
letter-spacing: 0;

`;
const Description = styled.p`
font-weight: 500;
color: #242F65;
margin-bottom:2.15rem;
`;
const LinkList = styled.div`
display:flex;
margin-inline:auto;
align-items: center;
justify-content:center;
gap:20px;
a{
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 150%;
    color: #242F65;
    text-decoration:none;
    transition: all 0.3s ease-in-out;
    position:relative;
    &::after{
        content:"";
        position:absolute;
        bottom:-5px;
        left:0;
        width:100%;
        height:2px;
        background:#2A2C32;
        transition: all 0.3s ease-in-out;
        opacity:0;
        visibility:hidden;
        z-index:1;
    }
    &:hover,&.active{
        color:#2A2C32;
        &::after{
            opacity:1;
            visibility:visible;
            z-index:0;
    }
}
`;
const NavBar = styled.nav`
position:fixed;
top:0;
inset-inline:0;
z-index:3;
display:flex;
align-items:center;
justify-content:space-between;
padding:1.25rem 1.75rem;
max-width: 1720px;
backdrop-filter: blur(25px);
background: rgba(255, 255, 255, 0.1);
width:100%;
margin-inline:auto;
svg{
    color:inherit;
}
h1{
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 2.25rem;
    svg{
        animation: ${spin} 6s linear infinite;
    }
}
`;
const HireMe = styled(Link)`
font-weight: 500;
font-size: 1.25rem;
line-height: 150%;
color: #242F65;
text-decoration:none;
transition: all 0.3s ease-in-out;
padding:0.75rem 1.5rem;
border-radius:10px;
background:#2A2C32;
color:#fff;
&:hover{
    opacity:0.95;
}
display:flex;
align-items:center;
gap:0.5rem;
`;
const ContactList = styled.div`
display:flex;
align-items: center;
justify-content:flex-start;
gap:20px;
flex-wrap:wrap;
a{
font-weight: 500;
font-size: 1.2rem;
line-height: 150%;
color: #242F65;
text-decoration:none;
transition: all 0.3s ease-in-out;
padding:0.5rem 1.25rem;
border-radius:10px;
background:#fbfbfb;
color:#2A2C32;
border:2px solid #eee;
&:hover{
    opacity:0.98;
    border-color:#2A2C32;
}
&.resumeLink{
    background:#2A2C32;
    color:#fff;
    &:hover{
        opacity:0.98;
        border-color:#fff;
    }
}
display:flex;
align-items:center;
gap:0.25rem;

}
`;
const Roles = styled.div`
text-align:left;
margin-bottom:1.5rem;
text-transform:uppercase;
font-weight: 500;
font-size: 1.25rem;
color:#2A2C32;
margin-top:1.5rem;
display:flex;
align-items:center;
gap:0.5rem;
flex-wrap:wrap;

span{
    display:inline-block;
}
`;


export default function _Header({ imageSrc, title, description, resumeUrl, social }) {

    return (
        <>
            <NavBar>
                <h1>
                    <FiCodesandbox />
                    Kanak
                </h1>
                <LinkList>
                    <Link href="/">
                        Portfolio
                    </Link>
                    <Link href="/projects">
                        Works
                    </Link>
                    <Link href="/contact">
                        Contact
                    </Link>
                </LinkList>
                <HireMe href="/hire-me">
                    Hire Me <FiExternalLink />
                </HireMe>
            </NavBar>
            <HeaderArea>
                <DesignArea>
                    <DesignAreaContainer>
                        <Patterns />
                    </DesignAreaContainer>
                </DesignArea>

                <ContentArea itemScope itemType="http://schema.org/Person">

                    <ContentSection>
                        <Heading>HEY ,
                            <strong> I'm {title} ,  </strong>
                            A <strong> MERN Developer </strong>
                            BASED IN <strong>INDIA</strong>
                        </Heading>
                        <SubHeading> I’m very passionate about the work that I do.
                        </SubHeading>
                        <meta itemProp="name" content={title} />
                        <meta itemProp="alternateName" content={"Kanak"} />
                        <link itemProp="url" href="https://kanakkholwal.eu.org" />
                        <meta itemProp="description" content={description} />
                        <ContactList>
                            <Link href={resumeUrl} title={'Resume of ' + title} className='resumeLink' target='_blank'>Resume <HiOutlineClipboardDocumentList /></Link>
                            {social?.map(({ name, url }) => (<Link href={url} key={name + url} target='_blank' itemProp="sameAs">{name}</Link>))}
                        </ContactList>
                        <Roles>
                            <GrInfo /> | <span>MERN Developer</span>
                            | <span>NextJs Developer</span>
                            | <span>UI / UX Designer</span>
                        </Roles>
                    </ContentSection>
                    <ImageSection>
                        <Image src={"/me.jpg"} width={425} height={425} alt={title} itemProp="image" />
                    </ImageSection>
                </ContentArea>

            </HeaderArea>
    </>)
}