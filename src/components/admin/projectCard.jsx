import styled from "styled-components";
import { Card } from "components/card";
import Link from "next/link";
import Image from "next/image";

const StyledCard = styled(Card)`
flex: 1 1 18.75rem;
border: 2px solid #eee;
transition: all 0.3s ease-in-out;
&:hover {
    border-color: var(--theme);
    transform: scale(1.01);
}
img{
    border-radius: 0.625rem 0.625rem 0 0;
    width: 100%;
    height: auto;
    aspect-ratio: 16/9;

}


`;


export default function ProjectCard({ project }) {


    return (
        <StyledCard as={Link} href={"projects/" + project._id + "/edit"}>
            <Image src={project.image} width={160} height={90} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
        </StyledCard>
    )
}