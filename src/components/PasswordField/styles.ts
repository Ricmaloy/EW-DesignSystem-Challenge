import styled from 'styled-components';

interface PasswordContainerProps {
    status: 'normal' | 'error' | 'success',
    isDisabled: boolean,
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
`

export const PasswordLabel = styled.label`
    font-size: 1.6rem;
    color: #FFFFFF;
`

export const PasswordContainer = styled.div<PasswordContainerProps>`
    width: 35rem;
    padding: 1.2rem 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    border-radius: .5rem;

    background-color: #181B23;

    svg {
        color: #C4C4CC;
        cursor: pointer;
    }

    border: 1px solid ${props => props.status === 'error' ? `#FF5343` : props.status == 'success' ? '#04D361' :  '#353646'};

    &:focus-within {
        border: 1px solid ${props => props.status === 'error' ? `#FF5343` : props.status == 'success' ? '#04D361' :  '#ED8936'};
    }

    ${props => props.isDisabled && `
        opacity: 0.5;
        pointer-events: none;
    `}
`

export const PasswordIcon = styled.label`
    color: #A8A8B3;
`

export const Password = styled.input`
    flex: 1;
    font-size: 1.6rem;
    color: #EEEEF2;
    border: none;
    background: transparent;

    outline: none;
`

export const StatusMessage = styled.div<Omit<PasswordContainerProps, 'isDisabled'>>`
    font-size: 1.2rem;
    color: ${props => props.status === 'error' ? `#FF5343` : '#04D361'};

    display: flex;
    align-items: center;
    gap: 0.8rem;
`