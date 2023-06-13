import React, { useRef, useState } from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import { MenuItem, Select, InputLabel, FormControl, TextField, InputAdornment, OutlinedInput } from '@mui/material';
import * as Yup from 'yup';

function ProjectElectrical({ moduleData, inverterData, formElecRef }) {
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

                innerRef={formElecRef}

                initialValues={{
                    projectModCount: 0,
                    projectModule: '',
                    projectInverter: '',
                }}

                onSubmit={() => {}}
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
                                                name="projectModCount"
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
                            )}
                        />
                    </Form>
                )}
            </Formik>
        </div>
    )
};

export default ProjectElectrical;
