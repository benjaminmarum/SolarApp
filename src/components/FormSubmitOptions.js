import React from 'react';
import { Formik, Form, Field } from 'formik';
import { MenuItem, Select } from '@mui/material';

const FormSubmitOptions = () => {
  return (
    <Formik
      initialValues={{ option: '' }}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {({ values, handleChange }) => (
        <Form>
          <Select
            name="option"
            value={values.option}
            onChange={handleChange}
          >
            <MenuItem value="">Select an option</MenuItem>
            <MenuItem value="Form Saved">Save</MenuItem>
            <MenuItem value="Form Submitted">Submit</MenuItem>
            <MenuItem value="Form Send">Send</MenuItem>
          </Select>
          {values.option && (
            <div>
              Form Status: {values.option}
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default FormSubmitOptions;
