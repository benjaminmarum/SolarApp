import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';


const SurfaceForm = () => (
    <div>
      <h3>Roof Information</h3>
      <Formik
  
        initialValues={{
          array: [{
            label: '',
            moduleQty: 0,
            Surface: [{
              surfaceType: '',
              surfaceSecondaryType: '',
              surfaceSecondaryTypeLayers: '',
              Pitch: 0,
              Azimuth: 0,
              Height: 0,
              Overhang: [{
                bottom: 0,
                sides: 0,
              }],
              Drawing: '',
            }],
  
            Structure: [{
              strucType: '',
              strucSecondType: '',
              strucThirdType: '',
              Size: '',
              Spacing: '',
              MaxSpan: '',
              sheathingType: '',
              sheatingThickness: '',
              repairs: '',
            }],
          }],
        }}
  
        validate={values => {
          const errors = {};
          if (!values.label) {
            errors.label= 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.label)
          ) {
            errors.label = 'Invalid email address';
          }
          return errors;
        }}
  
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
  
      >
  
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="label" placeholder="Enter surface label" />
            <ErrorMessage name="label" component="div" />
            <Field type="password" name="password" placeholder="Eneter password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Save
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
  
  export default SurfaceForm;