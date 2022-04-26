import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Form, Formik } from 'formik';

import { FormikDateInputField } from '../../components';

export default {
  title: 'Components/Formik Input Fields/Formik Date Input Field',
  component: FormikDateInputField,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof FormikDateInputField>;

const initialValues = {
  field: new Date().toISOString(),
};

const Template: ComponentStory<typeof FormikDateInputField> = (props) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        console.log({ values });
      }}
    >
      {() => {
        return (
          <Form noValidate>
            <FormikDateInputField
              label="Formik Date Input Field"
              name="field"
              {...props}
              sx={{ minWidth: 300 }}
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export const Default = Template.bind({});
Default.args = {
  required: true,
};
