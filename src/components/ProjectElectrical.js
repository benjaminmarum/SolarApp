import React, { useRef, useState } from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage, useFormikContext } from 'formik';
import { MenuItem, Select, InputLabel, FormControl, TextField, InputAdornment, OutlinedInput, Input, FormHelperText } from '@mui/material'
import * as Yup from 'yup';

function ProjectElectrical({ moduleData, inverterData, values }) {

    //------------------------------------------------------------------------------------------------------>

    const solarModules = moduleData.map((module, index) => {
        return (
            <MenuItem key={index} value={module["Model Number"]}>{module.Manufacturer} {module["Model Number"]}</MenuItem>
        )
    })

    const solarInverters = inverterData.map((inverter, index) => {
        return (
            <MenuItem key={index} value={inverter["Model Number1"]}>{inverter["Manufacturer Name"]} {inverter["Model Number1"]}</MenuItem>
        )
    })

    //------------------------------------------------------------------------------------------------------>
    // Update Fields
    // const handleUpdateField = (values) => {
    //     // Update a field value in the form
        
    //     const newCount= values.projectModCount; // Get the new value from Formik's values
    //     const newModule = values.projectModule; // Get the new value from Formik's values
    //     const newInverter = values.projectInverter; // Get the new value from Formik's values

    //     setFieldValue('projectModCount', newCount);
    //     setFieldValue('projectModule', newModule);
    //     setFieldValue('projectInverter', newInverter);
    // };

    const handleSubmit = (values) => {
        console.log('Form data:', values);
        // Other logic to handle the form data
      };
    //------------------------------------------------------------------------------------------------------>
    //JSX
    return (
        <Formik initialValues={values} onSubmit={handleSubmit}
        >
            {/* //------------------------------------------------------------------------------------------> */}
            <Form className="form">
                {/* <button onClick={handleUpdateField}>Update Field</button>
                <button type='submit'> Save Project Data </button> */}

                <fieldset>
                    <h3>Project Electrical</h3>
                    {/* //------------------------------------------------------------------------------------------> */}

                    <div id='modQty'>
                        <Field name="projectModCount">
                            {({ field, form }) => (
                                <FormControl
                                    sx={{
                                        backgroundColor: 'primary.light',
                                        '&:hover': {
                                            backgroundColor: 'primary.hover',
                                            opacity: [0.9, 0.8, 0.7],
                                        },
                                    }}>
                                    <>
                                        <InputLabel id="modCount-label">Project Module Count</InputLabel>
                                        <OutlinedInput
                                            {...field}
                                            id="outlined-adornment-password"
                                            variant="filled"
                                            type="number"
                                            name="projectModCount"
                                            value={field.value}
                                            onChange={form.handleChange}
                                            label="Project Module Count"
                                        />
                                    </>
                                    {/* <ErrorMessage name="moduleQty" component="div" /> */}
                                </FormControl>
                            )}
                        </Field>
                    </div>

                    {/* //------------------------------------------------------------------------------------------> */}
                    <br />
                    {/* //------------------------------------------------------------------------------------------> */}

                    <div id='modules'>
                        <Field name="projectModule">
                            {({ field, form }) => (
                                <FormControl
                                    sx={{
                                        backgroundColor: 'primary.light',
                                        '&:hover': {
                                            backgroundColor: 'primary.hover',
                                            opacity: [0.9, 0.8, 0.7],
                                        },
                                    }} fullWidth>
                                    <>
                                        <InputLabel id="modSelect-label">Solar Module</InputLabel>
                                        <Select
                                            {...field}
                                            labelId="modSelect-label"
                                            id="demo-simple-select"
                                            name="projectModule"
                                            value={field.value}
                                            onChange={form.handleChange}
                                            label="Solar Module"
                                        >
                                            <MenuItem key={''} value={undefined}>Solar Modules</MenuItem>
                                            {solarModules}
                                        </Select>
                                    </>
                                </FormControl>
                            )}
                        </Field>
                    </div>

                    {/* //------------------------------------------------------------------------------------------> */}
                    <br />
                    {/* //------------------------------------------------------------------------------------------> */}

                    <div id='inverter' >
                        <Field name="projectInverter">
                            {({ field, form }) => (
                                <FormControl sx={{
                                    backgroundColor: 'primary.light',
                                    '&:hover': {
                                        backgroundColor: 'primary.hover',
                                        opacity: [0.9, 0.8, 0.7],
                                    },
                                }} fullWidth>
                                    <InputLabel id="invSelect-label">Solar Inverter(s)</InputLabel>
                                    <Select
                                        {...field}
                                        labelId="invSelect-label"
                                        id="demo-simple-select"
                                        type="text"
                                        name='projectInverter'
                                        value={field.value}
                                        onChange={form.handleChange}
                                        label="Solar Inverter(s)"
                                    >
                                        <MenuItem key={''} value={undefined}>Solar Inverter(s)</MenuItem>
                                        {solarInverters}
                                    </Select>
                                </FormControl>
                            )}
                        </Field>
                    </div>

                    {/* //------------------------------------------------------------------------------------------> */}
                </fieldset>

            </Form>

        </Formik>
    )
};

export default ProjectElectrical;
