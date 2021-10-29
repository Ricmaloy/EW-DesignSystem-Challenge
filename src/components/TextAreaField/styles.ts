import styled from 'styled-components';

interface ContainerTextAreaProps {
    isDisabled: boolean,
}


export const ContainerTextArea = styled.textarea<ContainerTextAreaProps>`
    width: 56.5rem;
    height: 17.5rem;
    font-size:1.6rem;
    resize: none;
    outline: none;

    padding: 1.2rem 2.4rem;
    background: #181B23;
    border: 1px solid #353646;
    border-radius: 0.5rem;
    color: #EEEEF2;

    &:placeholder {
        color: #797D9A;
    }

    &:focus {
        border: 1px solid #ED8936;
    }

    ${props => props.isDisabled && `
        opacity: 0.5;
        pointer-events: none;
    `}
`