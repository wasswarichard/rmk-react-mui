import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Form, Formik } from 'formik';
import { LoremIpsum } from 'lorem-ipsum';

import { FormikTextAreaField } from '../../components';

export default {
  title: 'Components/Formik Input Fields/Formik Text Area Field',
  component: FormikTextAreaField,
} as ComponentMeta<typeof FormikTextAreaField>;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const initialValues = {
  field: lorem.generateWords(20),
};

const Template: ComponentStory<typeof FormikTextAreaField> = (props) => {
  return (
    <Container maxWidth="md" sx={{ pt: 6 }}>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          console.log({ values });
        }}
      >
        {() => {
          return (
            <Form noValidate>
              <FormikTextAreaField
                label="Formik Text Area Field"
                name="field"
                inputProps={{
                  maxLength: 200,
                }}
                {...props}
                fullWidth
              />
              <Grid container sx={{ mt: 2 }}>
                <Grid item xs />
                <Grid item>
                  <Button variant="contained" type="submit">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};

export const Default = Template.bind({});
Default.args = {
  required: true,
};
