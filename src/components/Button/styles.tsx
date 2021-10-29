import styled, {keyframes} from 'styled-components';

interface ButtonProps {
    btnType: 'primary' | 'secondary',
    size: 'sm' | 'md' | 'lg',
    isDisabled?: boolean,
}

export const Container = styled.button<ButtonProps>`
    font-weight: bold;
    text-transform: uppercase;
    color: #FFFAF0;
    
    border: none;
    transition: all .2s;
    border-radius: .5rem;

    position: relative;
    
    padding: ${props => props.size === 'sm' ? '2rem' : props.size === 'md' ? '2.4rem' : '3.2rem'};
    ${props => props.isDisabled && `
        opacity: 0.5;
        pointer-events: none;
    `}

    display: flex;
    align-items: center;
    gap: 1.2rem;

    ${props => props.btnType === 'primary' && `
        background: #ED8936;

        &:hover {
            background-color: #C05621;
        }
    `}

    ${props => props.btnType === 'secondary' && `
        background: transparent;
        border: 1px solid #ED8936;

        &:hover {
            background-color: #FFFAF0;
            color: #C05621;
        }
    `}

    &:focus {
        box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.6);
    }
`

