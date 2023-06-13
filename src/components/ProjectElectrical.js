import React, { useRef, useState } from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import { MenuItem, Select, InputLabel, FormControl, TextField, InputAdornment, OutlinedInput, Input, FormHelperText } from '@mui/material'
import * as Yup from 'yup';

function ProjectElectrical({ moduleData, inverterData, initElectricalFormVals }) {
    //------------------------------------------------------------>
    const [projectModCount, setProjectModCount] = useState(0);
    const [projectModule, setProjectModule] = useState('');
    const [projectInverter, setProjectInverter] = useState('');

    console.log(initElectricalFormVals)

    //------------------------------------------------------------>

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

    //------------------------------------------------------------>

    const handleModuleCount = (event) => {
        console.log(event.target.value)
        setProjectModCount(parseInt(event.target.value));
    };

    const handleModuleChange = (event) => {
        setProjectModule(event.target.value);
    };

    const handleInverterChange = (event) => {
        setProjectInverter(event.target.value);
    };

    const handleElecFormSubmit = (values) => {
        console.log(values);
        // Handle form submission logic here
    };

    //------------------------------------------------------------>

    return (
        <Formik
            initialValues={{ projectModCount: 0, projectModule: '', projectInverter: '' }}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {/* //------------------------------------------------------------> */}
            <Form className="form">
                <button type='submit'> Save Project Data </button>







                <fieldset>
                    <h3>Project Electrical</h3>

                    <div>
                        <Field name="projectModCount">
                            {({ field }) => (
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
                                            value={projectModCount}
                                            onChange={handleModuleCount}
                                            label="Project Module Count"
                                        />
                                    </>
                                    {/* <ErrorMessage name="moduleQty" component="div" /> */}
                                </FormControl>
                            )}
                        </Field>
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
                                name="projectModule"
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
                                type="text"
                                name='projectInverter'
                                value={projectInverter}
                                label="Solar Inverter(s)"
                                onChange={handleInverterChange}
                            >
                                {solarInverters}
                            </Select>
                        </FormControl>
                    </div>

                </fieldset>


            </Form>

        </Formik>
    )
};

export default ProjectElectrical;
