import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink } from "react-icons/fi";


const HeaderArea = styled.header`
margin:3rem auto;
position:relative;
width:clamp(100px, 100%, 1400px);
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
// position:absolute;
// left:50%;
// top:50%;
// transform:translate(-50%,-50%);
z-index:2;
height: inherit;
max-width: 1720px;
// max-height: 992px;
border-radius:40px;
display:flex;
align-items:stretch;
justify-content:space-between;
backdrop-filter: blur(5px);
aspect-rato:16/9;
@media (max-width:1024px){
    aspect-rato:auto;
    flex-wrap:wrap; 
    justify-content: center;
}
`;

const ImageSection = styled.div`
border-radius:20px;
overflow:hidden;
max-width: 496px;
max-height: 692px;
box-shadow: 2px -1px 14px 11px #2a2c322b;
img{
    border-radius:inherit;
    width:100%;
    height:100%;
    max-width: 496px;
    max-height: 692px;
    object-fit:cover;
    object-position:center;
}
flex: 0 0 auto;
order: 0;
width: calc(100% - 20px);
margin:0.5rem;
`;
const ContentSection = styled.div`
flex: 1 1 auto;
order: 1;
padding:2rem 0 4rem 2rem;

`;
const Heading = styled.h1`
font-weight: 400;
line-height: 110%;
color: #242F65;
margin-bottom:1.5rem;
`;
const Description = styled.p`
font-weight: 500;

color: #242F65;
margin-bottom:2.15rem;
`;
const LinkList = styled.div`
display:flex;
width:100%;
align-items: center;
justify-content:flex-start;
gap:20px;
flex-wrap:wrap;
a{
    border-radius: 10px;
    padding: 1.125rem 1.5625rem;
    font-weight: 500;
    font-size: 1.25rem;
    vertical-align: middle;
    transition:all 200ms ease-in-out;
    &.resumeLink{
        background: #2A2C32;
        color:#fbfbfb;
    }
    &:hover:not(.resumeLink){
        background: #52566517;
        color:#2a2626;
    }
    &:hover{
        transform:scale(1.05);
    }
}
`;

export default function Header({ imageSrc, title, description, resumeUrl, social }) {

    return (<HeaderArea>
        <DesignArea>
            <DesignAreaContainer>
                <Patterns />
            </DesignAreaContainer>
        </DesignArea>
        <ContentArea>
            <ImageSection>
                <Image src={imageSrc} width={496} height={692} alt='Kanak Kholwal' />
            </ImageSection>
            <ContentSection>
                <Heading>Hi , I'm {title}</Heading>
                <Description>{description}</Description>
                <LinkList>
                    <Link href={resumeUrl} title={'Resume of ' + title} className='resumeLink' target='_blank'>Resume <FiExternalLink /></Link>
                    {social?.map(({ name, url }) => (<Link href={url} key={name + url} target='_blank'>{name}</Link>))}
                </LinkList>
            </ContentSection>
        </ContentArea>

    </HeaderArea>)
}