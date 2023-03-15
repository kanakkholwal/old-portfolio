import styled from "styled-components";

export const MainWrapper = styled.div`
width: 100%;
height: 100%;
padding-inline: 16rem;
transition: all 0.3s ease-in-out;
@media (max-width: 1024px) {
    padding-inline: 0;
}
// @media (min-width: 1024px) {
    
//     &.notificationPanelOpen {
//         padding-right: 0;
//     }
//     &.sideNavOpen {
//         padding-left: 0;
//     }
// }
`;