import styled from 'styled-components';
import { BiArrowFromLeft } from 'react-icons/bi';
const Wrapper = styled.div`
display: inline-flex;
align-items: center;
justify-content: flex-start;
flex-wrap: wrap;
position: relative;
`;
const TimeLineBlock = styled.div`
position: relative;
margin:0 auto;
padding:0.5rem 1rem;
&:not(:last-child){
  margin-bottom: 1rem;
  border-bottom: 1rem solid #eee;
}
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


const RoleName = styled.h4`
font-weight: 700;
margin-bottom:0.5rem;
`;
const OrgName = styled.h5`
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


export default function Works({ workExperiences }) {


  return (
  <Wrapper>
        {workExperiences?.map(({ duration, orgName, role, description, points }, index) => {
          return (
            <TimeLineBlock key={index}>
              <Header>
                <Info>
                  <RoleName>{role}</RoleName>
                  <OrgName>{orgName}</OrgName>
                </Info>

                <Time>{duration}</Time>
              </Header>

              <Description>{description}</Description>
              {points?.length > 0 ? <Points>{points.map((point, i) => (<li key={i}><BiArrowFromLeft /> {" "}{point}</li>))}</Points> : null}
            </TimeLineBlock>)
        })}

      </Wrapper>
)
}