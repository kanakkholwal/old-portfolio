import styled from 'styled-components';

const Section = styled.section`
position:relative;
width:clamp(100px, 100%, 1400px);
margin:2rem auto;
background: rgb(190,243,234);
background: radial-gradient(circle, rgba(190,243,234,0.3) 0%, rgba(255,219,236,0.6) 35%, rgba(210,255,247,0.5) 100%);
backdrop-filter: blur(10px);
padding:1.25rem;
border-radius: 1rem;
box-shadow: 2px -1px 14px 11px #aed7d75e;

`;
const Heading = styled.h2`
font-weight: 700;
margin-bottom:1.5rem;
line-height: 110%;
svg{
margin-right:1rem;
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
  }    box-shadow: 2px -1px 14px 11px #aed7d75e;

    right: calc(160px + 0.5rem);
    background: rgba(0,0,0,0.1);
    height: 2px;
    width:clamp(10px ,60%,500px);
    content: "";
    top:20px
  }
  
`;

const OrgName = styled.h4`
font-weight: 700;
margin-bottom:0.5rem;
`;
const Degree = styled.h5`
font-weight: 500;
margin-bottom:1.25rem;
font-size:1.25rem;

`;
const Description = styled.p`
font-weight: 400;
font-size: 1.25rem;
`;


export default function Education({ educationExperiences }) {


    return (
        <Section>
            <Heading>
                <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} viewBox="0 0 512 512">
                    <defs>
                        <linearGradient id="a" x1=".5" x2=".5" y2={1} gradientUnits="objectBoundingBox"><stop offset={0} stopColor="#C7EBE4" />
                            <stop offset={1} stopColor="#C7EBE4" /></linearGradient>
                    </defs>
                    <g transform="translate(15468.002 21737)">
                        <rect width={512} height={512} fill="url(#a)" data-name="RECTANGLE ALBUM COVER" rx={100} transform="translate(-15468 -21737)" />
                        <g fill="#2a937e"><path d="m-15209.573-21445.816-105.308-32.412v54.133c0 25.026 47.163 45.316 105.339 45.316s105.344-20.29 105.344-45.316c0-.2-.065-.4-.069-.587v-53.546Z" data-name="Path 14617" />
                            <path d="m-15386.08-21515.492 37.621 13.458 3.206-6.866 13.821-1.175 1.971 2.05-11.86 2.813-1.729 5.116s-26.789 56-22.855 83.393c0 0 16.72 9.973 33.432 0l4.441-74.9v-6.235l24.878-5.612-1.757 4.33-18.548 6.032 8.579 3.065 105.307 32.403 105.306-32.412 71.2-25.464-176.506-67.902Z" data-name="Path 14618" />
                        </g>
                    </g>
                </svg>
                Education
            </Heading>
            <TimeLines>
                {educationExperiences?.map(({ duration, orgName, degree, description }, index) => {
                    return (
                        <TimeLineBlock key={index} data-duration={duration}>
                            <OrgName>{orgName}</OrgName>
                            <Degree>{degree}</Degree>
                            <Description>{description}</Description>
                        </TimeLineBlock>)
                })}

            </TimeLines>


        </Section>)
}