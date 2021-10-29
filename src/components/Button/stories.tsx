import { Meta, Story } from '@storybook/react/types-6-0';
import { Button } from './';

interface ArgsProps {
    size: 'sm' | 'md' | 'lg',
    type: 'primary' | 'secondary', 
    leftIcon: boolean, 
    rightIcon: boolean, 
    disabled: boolean, 
    loading: boolean, 
    text: string,
}

export default {
    title: 'Button',
    component: Button
} as Meta;
  
export const Primary: Story<ArgsProps> = (args) => <Button text='Label' type='primary' size='sm' {...args} />;
Primary.args = { size: 'sm', type: 'primary', leftIcon: false, rightIcon: true, disabled: false, loading: false, text: 'label'}
  
export const Secondary: Story<ArgsProps> = (args) => <Button text='Label' type='secondary' size='sm' {...args} />;
Secondary.args = { size: 'sm', type: 'secondary',leftIcon: false, rightIcon: true, disabled: false, loading: false, text: 'label'}