import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FieldValueDisplay } from '../components';

export default {
  title: 'Components/Field Value Display',
  component: FieldValueDisplay,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof FieldValueDisplay>;

const Template: ComponentStory<typeof FieldValueDisplay> = ({ value }) => {
  const props: any = {};
  value != null && (props.value = value);

  return <FieldValueDisplay label="The Label" {...props} />;
};

export const Default = Template.bind({});

export const WithValue = Template.bind({});
WithValue.args = {
  value: 'This is the value',
};