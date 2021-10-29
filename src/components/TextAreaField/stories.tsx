import { Meta, Story } from '@storybook/react/types-6-0';
import { TextAreaField } from './';


interface TextAreaFieldProps {
    disabled?: boolean,
    placeholder: string,
}

export default {
    title: 'Input Area',
    component: TextAreaField
} as Meta;

export const TextAreaInput: Story<TextAreaFieldProps> = (args) => <TextAreaField placeholder='placeholder' {...args}/>;
TextAreaInput.args = { disabled: false, placeholder: 'Placeholder' };
  