import styled from 'styled-components';


const TimeLines = styled.div`
overflow: hidden;
text-align: left;
margin:2rem auto;
`;
const TimeLineBlock = styled.div`
position: relative;
margin:0 auto;
`;

const Header = styled.div`
display:flex;
flex-wrap: wrap;
`;

const Info = styled.div`
flex : 1 1 auto;
`;
const Time = styled.div`
flex : 1 0 auto;
text-align: right;
`;


const OrgName = styled.h4`
font-weight: 700;
margin-bottom:0.5rem;
`;
const Degree = styled.h5`
font-weight: 600;
font-size: 1.25rem;
margin-bottom: 1.25rem;
color: rgba(0,0,0,0.7);


`;
const Description = styled.p`
font-weight: 400;
font-size: 1.25rem;
`;
const Points = styled.ul`
font-weight: 400;
font-size: 1.25rem;
margin:0.75rem 0.5rem;
li{
  &:marker{
    display:none;
  }
  svg{
    margin-right:0.05rem;
  }
}
`;


export default function Education({ educationExperiences }) {


    return (
     
            <TimeLines>
                {educationExperiences?.map(({ duration, orgName, degree, description, points }, index) => {
                    return (
                        <TimeLineBlock key={index}>
                            <Header>
                                <Info>
                                    <OrgName>{orgName}</OrgName>
                                    <Degree>{degree}</Degree>
                                </Info>

                                <Time>{duration}</Time>
                            </Header>

                            <Description>{description}</Description>
                            {points?.length > 0 ? <Points>{points.map((point, i) => (<li key={i}><BiArrowFromLeft /> {" "}{point}</li>))}</Points> : null}
                        </TimeLineBlock>)
                })}
            </TimeLines>
)
}