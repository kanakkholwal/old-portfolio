import styled from "styled-components";

export const MainWrapper = styled.div`
width: 100%;
height: 100%;
padding-inline: 16rem;
transition: all 0.3s ease-in-out;
padding-inline: 0;
@media (min-width: 1024px) {
    &.isNotificationOpen:has(~.isOpen){
        padding-right:16rem;
    }
}
`;
export const ContentWrapper = styled.div`
width: 100%;
height: 100%;
padding: 2rem 1rem;
`;
// export const PageWrapper = styled.div`
// width:100%;
// height:100%;
// position:relative;
// display:flex;
// align-items:stretch;
// `;