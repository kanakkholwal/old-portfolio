import styled from "styled-components";



export const Loader = styled.div`
    transform: rotateZ(45deg);
    perspective: 1000px;
    border-radius: 50%;
    width: ${({ size }) => size || '48px'};
    height: ${({ size }) => size || '48px'};
    color: #fff;

    &:before,
    &:after {
content: '';
display: block;
position: absolute;
top: 0;
left: 0;
width: inherit;
height: inherit;
border-radius: 50%;
transform: rotateX(70deg);
animation: 1s spin linear infinite;
    }
    &:after {
color: #FF3D00;
transform: rotateY(70deg);
animation-delay: .4s;
    }

@keyframes rotate {
    0% {
transform: translate(-50%, -50%) rotateZ(0deg);
    }
    100% {
transform: translate(-50%, -50%) rotateZ(360deg);
    }
}

@keyframes rotateCc {
    0% {
transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
transform: translate(-50%, -50%) rotate(-360deg);
    }
}

@keyframes spin {
    0%,
    100% {
box-shadow: .2em 0px 0 0px currentColor;
    }
    12% {
box-shadow: .2em .2em 0 0 currentColor;
    }
    25% {
box-shadow: 0 .2em 0 0px currentColor;
    }
    37% {
box-shadow: -.2em .2em 0 0 currentColor;
    }
    50% {
box-shadow: -.2em 0 0 0 currentColor;
    }
    62% {
box-shadow: -.2em -.2em 0 0 currentColor;
    }
    75% {
box-shadow: 0px -.2em 0 0 currentColor;
    }
    87% {
box-shadow: .2em -.2em 0 0 currentColor;
    }
}

`;

const LoaderWrapper = styled.div`
width:100%;
min-height:100vh;
height:100%;
display:flex;
justify-content:center;
align-items:center;
`;


export const PageLoader = () => (<LoaderWrapper><Loader size="64px" /></LoaderWrapper>)
