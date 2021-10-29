import { IoRocketOutline } from 'react-icons/io5'
import { Loading } from '../Loading'
import { Container} from './styles'

interface ButtonProps {
    type: 'primary' | 'secondary',
    text: string,
    size: 'sm' | 'md' | 'lg',
    leftIcon?: boolean,
    rightIcon?: boolean,
    disabled?: boolean,
    loading?: boolean,
}

export function Button({
    text = 'LABEL',
    type = 'primary',
    size = 'sm',
    leftIcon = false,
    rightIcon = true,
    disabled = false,
    loading = false,
}: ButtonProps){
    return (
        
        loading ? (
            <Container 
                isDisabled={false} 
                btnType={type} 
                size={size}
            >   
                <div style={{visibility: 'collapse'}} >
                {leftIcon && <IoRocketOutline size={24}/>}
                {text}
                {rightIcon && <IoRocketOutline size={24}/>}
                </div>
                <Loading />
            </Container>
        ) : (
            <Container
                btnType={type}
                disabled={disabled} 
                isDisabled={disabled}
                size={size}
                onClick={() => alert('Hello Rocketseat! 👨‍🚀 🚀')} 
            >
                {leftIcon && <IoRocketOutline size={24}/>}
                {text}
                {rightIcon && <IoRocketOutline size={24}/>}
            </Container>
        )
        
    )
}