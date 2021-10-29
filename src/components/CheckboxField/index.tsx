import { Container, CheckboxInput } from './styles';

interface CheckboxFieldProps {
    label: string,
    isDisabled?: boolean,
}

export function CheckboxField({label, isDisabled = false}: CheckboxFieldProps) {
    return (
        <Container isDisabled={isDisabled} >
            <CheckboxInput 
                disabled={isDisabled} 
                isDisabled={isDisabled}
                type='checkbox'
            />
            {label}
        </Container>
    )
}