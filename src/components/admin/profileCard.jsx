import styled from "styled-components";
import Image from "next/image";



const Card = styled.div`
width: 100%;
height: auto;
text-align: center;
`;
const ImageContainer = styled.div`
width: 100%;
height: auto;
position: relative;
img{
    width: 100%;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    overflow: hidden;
}
`;

const Name = styled.h3`
margin: 0.5rem 0;
`;
const Email = styled.p`
margin: 0.25rem 0;
`;


export default function ProfileCard({ user }) {





    return (
        <Card>
            <ImageContainer>
                {user?.profileURl ? <Image src={user?.profileURl || " "} alt={user?.name} width={300} height={300} /> : null}
            </ImageContainer>
            <Name>{user?.name}</Name>
            <Email>{user?.email}</Email>
        </Card>)
}