import styled from 'styled-components';
import { AnimatePresence, motion } from "framer-motion";
import { NodeJs, JavaScript, Sass, Css, NextJs, Firebase, Figma, ReactJs, Git, Github, Postman, Canva, Typescript, Npm, Bootstrap, Jquery, MongoDB } from 'assets/icons/tech-stack';

const TechStacks = styled.div`
display: grid; 
grid-auto-flow: row dense; 
grid-template-columns:repeat(auto-fit, minmax(250px, 1fr)) ; 
grid-template-rows:repeat(auto-fit, minmax(90px, 1fr)); 
--theme-rgb:56, 141, 145;
grid-gap:0.75rem;
`;
const TechStack = styled.div`
display: inline-flex;
align-items: center;
justify-content: center;
gap: 0.5rem;
border-radius:0.5rem;
color:rgba(var(--theme-rgb),0.9);
background:rgba(var(--theme-rgb),0.1);
padding:0.75rem;
cursor: pointer;
user-select: none;
&:hover{
    background:rgba(var(--theme-rgb),0.2);
}
`;
const Icons = {
    NextJs,
    NodeJs,
    MongoDB,
    Firebase,
    Typescript,
    Figma,
    Sass,
    JavaScript,
    Css,
    ReactJs,
    Git,
    Github,
    Npm,
    Bootstrap,
    Postman,
    Jquery,
    Canva,

}

const MotionGrid = motion(TechStack, { forwardMotionProps: true });

export default function Skills({ }) {

    const cardItemVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        show: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1.4,
                type: "spring",
                damping: 5,
                stiffness: 70
            }
        }
    };

    const height = 60;
    return (
        <AnimatePresence>
            <TechStacks>
                {Object.keys(Icons).map((icon, index) => {
                    const Icon = Icons[icon];
                    return (
                        <MotionGrid
                            key={index}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.9 }}
                            variants={cardItemVariants}
                            initial="hidden"
                            whileInView="show"
                        >
                            <Icon height={height} width={height} />
                            <span>{icon}</span>
                        </MotionGrid>
                    )
                })
                }
            </TechStacks>
        </AnimatePresence>)
}