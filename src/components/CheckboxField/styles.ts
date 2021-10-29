import styled from 'styled-components';

interface CheckboxInputProps {
    isDisabled: boolean
}

export const Container = styled.label<CheckboxInputProps>`
    display: flex;
    align-items: center;
    gap: .5rem;

    font-size: 1.6rem;

    color: #EEEEF2;

    ${props => props.isDisabled && `
        opacity: 0.5;
    `}
`

export const CheckboxInput = styled.input<CheckboxInputProps>`
    width: 2rem;
    height: 2rem;

    &:checked {

        &:before {
            content: '✓';
        
            width: 100%;
            height: 100%;
            border-radius: .2rem;
            background-color: #ED8936;
            color: #EEEEF2;
    
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    
    ${props => props.isDisabled && `
        opacity: 0.5;
        pointer-events: none;
    `}

`