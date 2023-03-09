import styled from 'styled-components';
import { motion } from "framer-motion";
import { NodeJs, JavaScript, Sass, Css, NextJs, Firebase, Figma, ReactJs, Git, Github, Postman, Canva, Typescript, Npm, Bootstrap, Jquery, MongoDB } from 'assets/icons/tech-stack';
import { VscGraph } from 'react-icons/vsc';

const Section = styled.section`
position:relative;
width:clamp(100px,calc(100% - 10px),1400px);
margin:2rem auto;
background: #ffffff;
backdrop-filter: blur(10px);
padding:1.25rem;
border-radius: 1rem;
box-shadow: 2px -1px 14px 11px #d9d9d9;

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
background:#d9d9d9;
}
`;
const Svg = styled.svg`
text{
    font-size:300%;
    font-weight:700;
    fill:var(--color);
}
`;
const SkillName = styled.h3`
text-align:center;
color:var(--color);
svg{
    margin-inline:0.5rem;
}
`;
const SkillBox = styled.div`
display:flex;
flex-direction:column;
gap:10px;
align-items: center;
width: max-content;
margin:0.5rem 0.75rem;
--color:#000;
`;
const TechStacks = styled.div`
display:flex;
gap:3rem;
align-items: center;
justify-content: center;
flex-wrap:wrap;
padding: 2rem 1rem;
`;


const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: ({ percent }, i) => {
        const delay = 1 + i * 0.5;
        return {
            pathLength: (percent / height),
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                opacity: { delay, duration: 0.01 }
            }
        };
    }
};
const CircularSkill = ({ skillName, percent, color, stroke = "#0099ff", size = "height" }) => {



    return (<SkillBox style={{ "--color": color }}>
        <Svg as={motion.svg} viewBox="0 0 400 400" width={size} height={size} initial="hidden" animate="visible">
            <motion.circle
                cx="200"
                cy="200"
                r="150"
                stroke={stroke}
                variants={draw}
                custom={{
                    percent
                }}
                fill="transparent"
                strokeWidth="25px"
                strokeLinecap="round"
            />
            <motion.text y="210" x="140">{percent.toString()}%</motion.text>
        </Svg>
        <SkillName>{skillName}</SkillName>
    </SkillBox>)
}

export default function Skills({ }) {

    const height = 60;
    return (
        <Section>
            <Heading>
                <VscGraph />
                Tech Stack
            </Heading>
            <TechStacks>
                <NodeJs height={height} />
                <JavaScript height={height} />
                <Sass height={height} />
                <Css height={height} />
                <NextJs height={height} />
                <Firebase height={height} />
                <Figma height={height} />
                <ReactJs height={height} />
                <Git height={height} />
                <Github height={height} />
                <Postman height={height} />
                <Canva height={height} />
                <Typescript height={height} />
                <Npm height={height} />
                <Bootstrap height={height} />
                <Jquery height={height} />
                <Typescript height={height} />
                <MongoDB height={height} />
            </TechStacks>
        </Section>)
}