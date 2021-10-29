import { Meta, Story } from '@storybook/react/types-6-0';
import { TextField } from './';

interface TextFieldProps {
    label?: string,
    leftIcon?: boolean,
    placeholder: string,
    disabled?: boolean,
    status?: 'normal' | 'error' | 'success',
}

export default {
    title: 'Input Text',
    component: TextField
} as Meta;

export const TextInput: Story<TextFieldProps> = (args) => <TextField placeholder='placeholder' {...args}/>;
TextInput.args = { label: 'label', leftIcon: true, status: 'normal', placeholder: 'placeholder', disabled: false };
  