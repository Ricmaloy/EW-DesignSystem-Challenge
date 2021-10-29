import { IoRocketOutline, IoAlertCircle, IoCheckmarkCircle } from 'react-icons/io5'

import { 
    Container, 
    InputContainer, 
    InputIcon, 
    InputLabel, 
    Input,
    StatusMessage
} from './styles';

interface TextFieldProps {
    label?: string,
    leftIcon?: boolean,
    placeholder: string,
    disabled?: boolean,
    status?: 'normal' | 'error' | 'success',
}

export function TextField({ 
    label, 
    leftIcon,
    placeholder,
    disabled = false, 
    status = 'normal'
}: TextFieldProps) {
    return (
        <Container>

        {label && (<InputLabel htmlFor='input' >{label}</InputLabel>)}
        
        <InputContainer status={status} isDisabled={disabled}>
            {leftIcon && (<InputIcon  htmlFor='input'><IoRocketOutline size={24} /></InputIcon>)}
            <Input id='input' placeholder={placeholder} />
        </InputContainer>

        {status === 'error' && (<StatusMessage status={status}><IoAlertCircle size={20}/> {status} message </StatusMessage>)}
        {status === 'success' && (<StatusMessage status={status}><IoCheckmarkCircle size={20}/> {status} message </StatusMessage>)}
        </Container>
    )
}