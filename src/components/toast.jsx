import styled from 'styled-components';

const Wrapper = styled.div`
    color:${props => props.outlined ? `var(--btn-bg)` : `var(--btn-text)`};
    background:${props => props.outlined ? `none` : `var(--btn-bg)`};
    box-shadow: var(--btn-box-shadow);
    border-radius: ${props => props.rounded ? `10rem` : `var(--btn-border-radius)`};
    border: 2px solid var(--btn-bg);
`;


export default Wrapper;