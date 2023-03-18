import styled from "styled-components";
import { Card } from "components/card";
import Link from "next/link";
export default function ProjectCard({ project }) {


    return (
        <Card as={Link} href={"projects/" + project._id + "/edit"}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
        </Card>
    )
}