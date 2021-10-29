import { Meta, Story } from '@storybook/react/types-6-0';
import { PasswordField } from './';

interface PasswordFieldProps {
    label?: string,
    leftIcon?: boolean,
    placeholder: string,
    disabled?: boolean,
    hidden?: boolean,
    status?: 'normal' | 'error' | 'success',
}

export default {
    title: 'Input Password',
    component: PasswordField
} as Meta;

export const PasswordInput: Story<PasswordFieldProps> = (args) => <PasswordField placeholder='placeholder' {...args}/>;
PasswordInput.args = { label: 'label', hidden: true, leftIcon: true, status: 'normal', placeholder: 'placeholder', disabled: false };
  