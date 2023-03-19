import styled from "styled-components";
import Image from "next/image";
import { BsPersonCheck } from "react-icons/bs";



const Card = styled.div`
width: 100%;
height: auto;
text-align: center;
position: relative;

`;
const ImageContainer = styled.div`
width: 100%;
height: auto;
position: relative;
img{
    width: 100%;
    height: auto;
    user-select:none;
    -webkit-user-drag: none;
    border-radius: 50%;
    overflow: hidden;
    box-shadow:0 0 1rem rgba(0,0,0,0.5)
}
`;

const Name = styled.h3`
margin: 0.5rem auto 0;
`;
const Email = styled.small`
margin: 0.25rem 0;
`;


export default function ProfileCard({ user }) {





    return (
        <Card>
            <ImageContainer>
                {user?.profileURl ? <Image src={user?.profileURl || " "} alt={user?.name} width={200} height={200} /> : null}
            </ImageContainer>
            <Name>{user?.name}</Name>
            <Email>{user?.email}
                {user?.role === "admin" ? <BsPersonCheck /> : null}
            </Email>
        </Card>)
}