import styled from 'styled-components';
import { BiArrowFromLeft } from 'react-icons/bi';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";

const Wrapper = styled.div`
display: inline-flex;
align-items: stretch;
justify-content: flex-start;
flex-wrap: wrap;
position: relative;
gap: 1rem;
margin-inline:auto;
`;

const Card = styled.div`
    --theme-rgb:56, 141, 145;
    position: relative;
    display: flex;
    flex-direction: column;
    word-wrap: break-word;
    background: var(--card-bg);
    box-shadow: var(--card-shadow);
    --border-radius: 0.5rem;
    border-radius: var(--border-radius,.5rem);
    flex: 1 1 auto;
    padding: .75rem;
    background:var(--card-bg);
    opacity: 0;
    visibility: hidden;
    transition: all 250ms ease-in-out;
    animation-name: pop;
    animation-duration: 0.83s;
    animation-direction: normal;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    border:2px solid rgba(var(--theme-rgb),0.1);
    max-width:420px;

`;
const CardHeader = styled.div`
flex: 1 1 auto;
display: flex;
align-items: center;
justify-content: space-between;
gap:1rem;
padding-bottom:1rem;
border-bottom:1px solid rgba(var(--theme-rgb),0.1);
`;

const CardBody = styled.div`
flex: 1 1 auto;
padding-bottom: 1rem;
img{
  border-radius: 0.5rem;
  width: 100%;
  height:auto;
  object-fit: contain;
  aspect-ratio: 16/9;
  max-height: 280px;
}
`;
const CardTitle = styled.h5`
display: -webkit-box;
-webkit-box-orient: vertical;
overflow: hidden;
text-overflow: ellipsis;
text-transform: uppercase;
white-space: wrap;
letter-spacing: 2px;
--webkit-line-clamp: 2;
`;
const CardDescription = styled.p`
display: -webkit-box;
-webkit-box-orient: vertical;
overflow: hidden;
-webkit-line-clamp: 3;
font-size: 0.9rem;
`;
const Button = styled.button`
display: inline-flex;
align-items: center;
justify-content: center;
gap: 0.5rem;
color:rgba(var(--theme-rgb),0.9);
background:rgba(var(--theme-rgb),0.2);
padding: 0.5rem 1rem;           
border-radius: 0.5rem;           
border:none;
outline:none !important;
font-size: 1rem;
font-weight: 600;
cursor: pointer;
margin-left:auto;
`;
const CardFooter = styled.div`
flex: 1 1 auto;
display: flex;
align-items: center;
justify-content: space-between;
gap:1rem;
padding: 0.5rem;
border-top:1px solid rgba(var(--theme-rgb),0.1);
div{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  span{
    font-size: 0.8rem;
    font-weight: 600;
    color:rgba(var(--theme-rgb),0.9);
  }
}
`;
const MotionCard = motion(Card, { forwardMotionProps: true });
const container = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.4,
      delayChildren: 0.3,
    }
  }
}
function ProjectCard({ title, description,image ,category,link}) {
  
  return (
    <MotionCard 
    variant={{
      hidden: { opacity: 0, scale: 0.5 },
      visible: {
          opacity: 1,
          scale: 1,
          transition: {
              duration: 1.4,
              type: "spring",
              damping: 5,
              stiffness: 70
          }
      }
    }}
    initial="hidden"
    whileInView="visible"
    >
      <CardBody>
        <Image src={image} width={300} height={300} alt={title} />
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardBody>
      <CardFooter>
        <div className='x-mandatory'>
        {category?.split(",").map((cat, index) => <span key={index}>#{cat}</span>)}
        </div>
        <Button  as={Link} href={link} target="_blank">
          View   <BiArrowFromLeft />
        </Button>
      </CardFooter>
    </MotionCard>
  )
}

export default function _Projects({ projects }) {


  return (
    <Wrapper as={motion.div} variant={container}
    initial="hidden"
    animate="visible"
    >
      {projects?.map((project, index) => <ProjectCard {...project} key={index} />)}
    </Wrapper>
  )
}