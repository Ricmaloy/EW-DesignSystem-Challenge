import styled, { keyframes } from "styled-components"

const loadAnimation = keyframes`
    0% { transform: scale(0); opacity: 1; }
    100% { transform: scale(0.9); opacity: .3; }
`

export const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background: red;
`

export const Loader = styled.div`
    width: 100%;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: rgb(255, 255, 255, 0.5);
    animation: ${loadAnimation} 2s linear infinite alternate;

    position: absolute;
    top: calc(50% - 2rem);
    left: calc(50% - 2rem);

    &:first-child {
        animation-delay: -2s;
    }
`