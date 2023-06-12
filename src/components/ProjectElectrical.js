import React, { useState } from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import { MenuItem, Select, InputLabel, FormControl, TextField, InputAdornment, OutlinedInput } from '@mui/material';
import * as Yup from 'yup';

function ProjectElectrical({ moduleData, inverterData, theme }) {
    const [projectModCount, setProjectModCount] = useState(0);
    const [projectModule, setProjectModule] = useState('');
    const [projectInverter, setProjectInverter] = useState('');


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

    const handleModuleCount = (event) => {
        setProjectModCount(parseInt(event.target.value));
    };

    const handleModuleChange = (event) => {
        setProjectModule(event.target.value);
    };

    const handleInverterChange = (event) => {
        setProjectInverter(event.target.value);
    };



    return (
        <div>
            <Formik

                initialValues={{
                    option: ''
                }}

                validate={values => {
                    const errors = {};
                    if (!values.label) {
                        errors.label = 'Required';
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

                {({ isSubmitting, values, handleChange }) => (
                    <Form className="projectElectrical">
                        <FieldArray
                            name="projectElectrical"
                            render={arrayHelpers => (
                                <fieldset>
                                    <h3>Project Electrical</h3>

                                    <div>
                                        <FormControl
                                            sx={{
                                                backgroundColor: 'primary.light',
                                                '&:hover': {
                                                    backgroundColor: 'primary.hover',
                                                    opacity: [0.9, 0.8, 0.7],
                                                },
                                            }}>
                                            <InputLabel id="modCount-label">Project Module Count</InputLabel>
                                            <OutlinedInput
                                                id="outlined-adornment-password"
                                                variant="filled"
                                                type="number"
                                                name="moduleQty"
                                                value={projectModCount}
                                                onChange={handleModuleCount}
                                                label="Project Module Count"
                                            />
                                            <ErrorMessage name="moduleQty" component="div" />
                                        </FormControl>
                                        <br /> <br />
                                    </div>

                                    <div>
                                        <FormControl
                                            sx={{
                                                backgroundColor: 'primary.light',
                                                '&:hover': {
                                                    backgroundColor: 'primary.hover',
                                                    opacity: [0.9, 0.8, 0.7],
                                                },
                                            }} fullWidth>
                                            <InputLabel id="modSelect-label">Solar Module</InputLabel>
                                            <Select
                                                labelId="modSelect-label"
                                                id="demo-simple-select"
                                                value={projectModule}
                                                label="Solar Module"
                                                onChange={handleModuleChange}
                                            >
                                                {solarModules}
                                            </Select>
                                        </FormControl>

                                    </div>
                                    <br />
                                    <div>
                                        <FormControl sx={{
                                            backgroundColor: 'primary.light',
                                            '&:hover': {
                                                backgroundColor: 'primary.hover',
                                                opacity: [0.9, 0.8, 0.7],
                                            },
                                        }} fullWidth>
                                            <InputLabel id="invSelect-label">Solar Inverter(s)</InputLabel>
                                            <Select
                                                labelId="invSelect-label"
                                                id="demo-simple-select"
                                                value={projectInverter}
                                                label="Solar Inverter(s)"
                                                onChange={handleInverterChange}
                                            >
                                                {solarInverters}
                                            </Select>
                                        </FormControl>
                                    </div>

                                {/* 
                                <div>
                                    <label>Choose a Standoff:</label>
                                    <select v-model="atttachmentType" id="standoff" name="standoff">
                                        <option value="Unirac">Unirac Flashloc</option>
                                        <option value="IronRidge">Ironridge Flashfoot </option>
                                    </select>
                                </div>

                                <div>
                                    <label>Choose a Rail:</label>
                                    <select v-model="railType" id="standoff" name="standoff">
                                        <option value="Unirac">Unirac Solarmount </option>
                                        <option value="IronRidge">Ironridge XR100</option>
                                    </select>
                                </div>

                                <label>Roof Quantity:</label>
                                <input v-model="roofQuantity" type="number" />
                                
                                */}
                                </fieldset>
                            )}
                        />
                    </Form>
                )}
            </Formik>
        </div>
    )
};

export default ProjectElectrical;
