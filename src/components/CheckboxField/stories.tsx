import { Meta, Story } from '@storybook/react/types-6-0';
import { CheckboxField } from './';

interface CheckboxFieldrops {
    label?: string,
    isDisabled?: boolean,
}

export default {
    title: 'Check Box Area',
    component: CheckboxField
} as Meta;

export const CheckboxInput: Story<CheckboxFieldrops> = (args) => <CheckboxField label='label' {...args}/>;
CheckboxInput.args = { isDisabled: false, label: 'label' };
  