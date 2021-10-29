import { ContainerTextArea } from './styles';

interface TextAreaFieldProps {
    disabled?: boolean;
    placeholder: string;
}

export function TextAreaField({ disabled = false, placeholder }: TextAreaFieldProps) {
    return (
        <ContainerTextArea  
            placeholder={placeholder}
            spellCheck='false'
            isDisabled={disabled}
            disabled={disabled}
        />
    )
}