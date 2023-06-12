import React from 'react';
import { Formik, Form, Field } from 'formik';
import { MenuItem, Select } from '@mui/material';

const BuilderForm = () => {
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
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
          </Select>
          {values.option && (
            <div>
              Selected Option: {values.option}
            </div>
          )}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default BuilderForm;
