import styled from 'styled-components';

const Section = styled.section`
position:relative;
width:clamp(100px, 100%, 1400px);
margin:2rem auto;
background: rgb(190,243,234);
background: radial-gradient(circle, rgba(237, 240, 249,0.3) 0%, rgba(217, 223, 242,0.6) 35%, rgba(237, 240, 249,0.9) 100%);
backdrop-filter: blur(10px);
padding:1.25rem;
border-radius: 1rem;
box-shadow:2px -1px 14px 11px #d9dff2;
`;
const Heading = styled.h2`
font-weight: 700;
margin-bottom:1.5rem;
line-height: 110%;
svg{
margin-right:1rem;
padding:10px;
border-radius:12px;
color:#6878AC;
background:#D9DEEE;
}
`;
const TimeLines = styled.div`
overflow: hidden;
text-align: left;
margin:50px auto;
`;
const TimeLineBlock = styled.div`
position: relative;
list-style:none;
margin:0 auto;


&:last-of-type {
    padding-bottom: 0;
    margin-bottom: 0;
    border: none;
  }

  &:before,
  &:after {
    position: absolute;
    display: block;
    top: 5px;
  }
  &:before {
    right:0;
    content: attr(data-duration);
    text-align: center;
    font-weight: 500;
    font-size: 1.25rem;
    color:rgba(0,0,0,0.8);
    min-width: 160px;
  }
  &:after {
    right: calc(160px + 0.5rem);
    background: rgba(0,0,0,0.1);
    height: 2px;
    width:clamp(10px ,60%,500px);
    content: "";
    top:20px
  }
  
`;

const RoleName = styled.h4`
font-weight: 700;
margin-bottom:0.5rem;
`;
const OrgName = styled.h5`
font-weight: 500;
font-size:1.25rem;
margin-bottom:1.25rem;
`;
const Description = styled.p`
font-weight: 400;
font-size: 1.25rem;
`;


export default function Works({ workExperiences }) {


    return (
        <Section>
            <Heading>
                <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} viewBox="0 0 32 32" >

                    <path fill='currentColor' d="M6.986 1.604a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3zM6.5 8.502a3 3 0 0 0-3 3v7.894a3 3 0 0 0 3 3h5v6.5a1.5 1.5 0 0 0 3 0v-8a1.5 1.5 0 0 0-1.5-1.5H9.5v-4.82l.65.416a1.5 1.5 0 0 0 1.78-.119l2.353-2a1.5 1.5 0 0 0-1.941-2.287l-1.508 1.281-1.387-.887A2.995 2.995 0 0 0 6.5 8.502zm14.102.723a.998.998 0 0 0-1.165.804l-.615 3.367H14.5a1 1 0 1 0 0 2h5.156a1 1 0 0 0 .985-.82l.765-4.187a1 1 0 0 0-.804-1.164zm-19.1 5.166c-.552 0-1 .445-1 .998l-.002 9v.007c0 .552.447 1.004 1 1.004.014 0 .025-.004.04-.004H4.5v2.698l-1.813 1.398a.502.502 0 0 0-.093.703.497.497 0 0 0 .394.194.519.519 0 0 0 .313-.106L4.5 29.36v.53a.5.5 0 1 0 1 0v-.53l1.188.924c.09.07.193.106.3.106.15 0 .297-.067.395-.194a.5.5 0 0 0-.082-.703L5.5 28.094v-2.698h2.986a1 1 0 1 0 0-2H2.5l.002-8.003c0-.552-.447-1.002-1-1.002zM13.5 16.396a1 1 0 1 0 0 2h2v11a1 1 0 1 0 2 0v-11h9v11a1 1 0 1 0 2 0v-11h2a1 1 0 1 0 0-2h-17z" />

                </svg>

                Work
            </Heading>
            <TimeLines>
                {workExperiences?.map(({ duration, orgName, role, description }, index) => {
                    return (
                        <TimeLineBlock key={index} data-duration={duration}>
                            <RoleName>{role}</RoleName>
                            <OrgName>{orgName}</OrgName>
                            <Description>{description}</Description>
                        </TimeLineBlock>)
                })}

            </TimeLines>


        </Section>)
}