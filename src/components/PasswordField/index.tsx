import { useEffect, useState } from 'react';
import { IoLockClosed, IoAlertCircle, IoCheckmarkCircle, IoEye, IoEyeOff } from 'react-icons/io5'

import { 
    Container, 
    PasswordContainer, 
    PasswordIcon, 
    PasswordLabel, 
    Password,
    StatusMessage
} from './styles';

interface PasswordFieldProps {
    label?: string,
    leftIcon?: boolean,
    placeholder: string,
    disabled?: boolean,
    hidden?: boolean,
    status?: 'normal' | 'error' | 'success',
}

export function PasswordField({ 
    label, 
    leftIcon,
    placeholder,
    disabled = false,
    hidden = false, 
    status = 'normal'
}: PasswordFieldProps) {
    const [isHidden, setIsHidden] = useState(hidden);

    useEffect(() => {
        setIsHidden(!hidden);
    }, [hidden])

    return (
        <Container>

        {label && (<PasswordLabel htmlFor='input' >{label}</PasswordLabel>)}
        
        <PasswordContainer status={status} isDisabled={disabled}>
            {leftIcon && (<PasswordIcon  htmlFor='input'><IoLockClosed size={24} /></PasswordIcon>)}
            <Password id='input' placeholder={placeholder} type={isHidden ? 'password' : 'text'} />
            {isHidden ? (
                <IoEye size={24}/>
                ) : (
                <IoEyeOff size={24}/>
                )
            }
        </PasswordContainer>

        {status === 'error' && (<StatusMessage status={status}><IoAlertCircle size={20}/> {status} message </StatusMessage>)}
        {status === 'success' && (<StatusMessage status={status}><IoCheckmarkCircle size={20}/> {status} message </StatusMessage>)}
        </Container>
    )
}