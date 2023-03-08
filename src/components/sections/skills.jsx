import styled from 'styled-components';
import { VscGraph } from 'react-icons/vsc';

const Section = styled.section`
position:relative;
width:clamp(100px, 100%, 1400px);
margin:2rem auto;
background: rgba(209 ,128, 61,0.34);
background: radial-gradient(circle, rgba(174, 126, 86,0.3) 0%, rgba(209 ,128, 61,0.34) 35%, rgba(174, 126, 86,0.5) 100%);
backdrop-filter: blur(10px);
padding:1.25rem;
border-radius: 1rem;
box-shadow: 2px -1px 14px 11px rgb(229 201 179 / 37%);

`;
const Heading = styled.h2`
font-weight: 700;
margin-bottom:1.5rem;
line-height: 110%;
svg{
margin-right:1rem;
padding:10px;
border-radius:12px;
font-size:64px;
color:rgba(174, 126, 86, 1);
background:#ECCFB8;
}
`;


export default function Skills({ }) {


    return (
        <Section>
            <Heading>
                <VscGraph />
                Skills
            </Heading>
        </Section>)
}