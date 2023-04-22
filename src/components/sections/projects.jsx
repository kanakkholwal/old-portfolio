import styled from 'styled-components';
import { BiArrowFromLeft } from 'react-icons/bi';

const Wrapper = styled.div`
display: inline-flex;
align-items: center;
justify-content: flex-start;
flex-wrap: wrap;
position: relative;
`;

const Card = styled.div`
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
    border:2px solid #eee;
`;
const CardHeader = styled.div`
flex: 1 1 auto;
display: flex;
align-items: center;
justify-content: space-between;
gap:1rem;
padding-bottom:1rem;
border-bottom:1px solid #eee;
`;

const CardBody = styled.div`
flex: 1 1 auto;
padding-bottom: 1rem;
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
`;
const Button = styled.button`
display: inline-flex;
align-items: center;
justify-content: center;
gap: 0.5rem;
color:rgba(var(--theme-rgb),0.9);
background:none !important;
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
border-top:1px solid #eee;
`;
function ProjectCard({ title, description }) {
  return (
    <Card>
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardBody>
      <CardFooter>
        <Button nature="primary">
          View   <BiArrowFromLeft />
        </Button>
      </CardFooter>
    </Card>
  )
}

export default function _Projects({ projects }) {


  return (
    <Wrapper>
      {projects?.map((project, index) => <ProjectCard {...project} key={index} />)}
    </Wrapper>
  )
}