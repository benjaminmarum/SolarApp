import React, { useState } from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import { MenuItem, Select, InputLabel, FormControl, TextField, InputAdornment, OutlinedInput } from '@mui/material';
import SurfaceCard from './SurfaceCard';
import * as Yup from 'yup';

function ProjectStructure() {
    const [projectType, setProjectType] = useState('');
    const [projectMountEQ, setProjectMountEQ] = useState('');
    const [projectNumSurface, setProjectNumSurface] = useState(1);

    const handleSurfaceCount = (event) => {
        setProjectNumSurface(parseInt(event.target.value));
    };

    const handleMountChange = (event) => {
        setProjectMountEQ(event.target.value);
    };

    const handleFlashChange = (event) => {
        setProjectMountEQ(event.target.value);
    };

    const handleTypeChange = (event) => {
        setProjectType(event.target.value);
    };

    return (
        <div>
            <Formik

                initialValues={{
                    option: ''
                }}

                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}

            >

                {({ isSubmitting, values, handleChange }) => (
                    <Form className="projectStructural">
                        <FieldArray
                            name="projectStructural"
                            render={arrayHelpers => (
                                <>
                                    <fieldset>

                                        <h3>Project Structural</h3>

                                        <div id="projectModQty">
                                            <FormControl sx={{
                                                backgroundColor: 'primary.light',
                                                width: '40%',
                                                '&:hover': {
                                                    backgroundColor: 'primary.hover',
                                                    opacity: [0.9, 0.8, 0.7],
                                                },
                                            }} fullWidth>
                                                <InputLabel id="mountType-label">Project Type</InputLabel>
                                                <Select
                                                    labelId="mountType-label"
                                                    id="mountType-label"
                                                    value={projectType}
                                                    label="Project Type"
                                                    onChange={handleTypeChange}
                                                >
                                                    <MenuItem key={'Roof Mount'} value={'Roof Mount'}>Roof Mount</MenuItem>
                                                    <MenuItem key={'Ground Mount'} value={'Ground Mount'}>Ground Mount</MenuItem>
                                                    <MenuItem key={'Car Port'} value={'Car Port'}>Car Port</MenuItem>
                                                </Select>
                                            </FormControl>
                                            <br />
                                        </div>

                                        <br />

                                        <div id='projectFlashingEq'>
                                            <FormControl sx={{
                                                backgroundColor: 'primary.light',
                                                width: '40%',
                                                '&:hover': {
                                                    backgroundColor: 'primary.hover',
                                                    opacity: [0.9, 0.8, 0.7],
                                                },
                                            }}>
                                                <InputLabel id="flashSelect-label">Flashing Kit</InputLabel>
                                                <Select
                                                    labelId="flashSelect-label"
                                                    id="flashSelect-label"
                                                    value={projectMountEQ}
                                                    label="flashting Equipment"
                                                    onChange={handleFlashChange}
                                                >
                                                    <MenuItem key={'Unirac'} value={'Unirac Flashloc'}>Unirac Flashloc</MenuItem>
                                                    <MenuItem key={'IronRidge'} value={'Ironridge Flashfoot'}>Ironridge Flashfoot</MenuItem>
                                                </Select>
                                            </FormControl>
                                            <br />
                                        </div>

                                        <br />

                                        <div id='projectMountingEq'>
                                            <FormControl sx={{
                                                backgroundColor: 'primary.light',
                                                width: '40%',
                                                '&:hover': {
                                                    backgroundColor: 'primary.hover',
                                                    opacity: [0.9, 0.8, 0.7],
                                                },
                                            }}>
                                                <InputLabel id="mountSelect-label">Mounting Equipment</InputLabel>
                                                <Select
                                                    labelId="mountSelect-label"
                                                    id="mountSelect-label"
                                                    value={projectMountEQ}
                                                    label="Mounting Equipment"
                                                    onChange={handleMountChange}
                                                >
                                                    <MenuItem key={'Unirac'} value={'Unirac Flashloc'}>Unirac Flashloc</MenuItem>
                                                    <MenuItem key={'IronRidge'} value={'Ironridge Flashfoot'}>Ironridge Flashfoot</MenuItem>
                                                </Select>
                                            </FormControl>
                                            <br />
                                        </div>

                                        <br />
                                        
                                        <div>
                                            <FormControl sx={{
                                                backgroundColor: 'primary.light',
                                                width: '40%',
                                                '&:hover': {
                                                    backgroundColor: 'primary.hover',
                                                    opacity: [0.9, 0.8, 0.7],
                                                },
                                            }}>
                                                <InputLabel id="numSurface-label">Number of Surfaces</InputLabel>
                                                <Select
                                                    labelId="numSurface-label"
                                                    id="numSurface-label"
                                                    value={projectNumSurface}
                                                    label="Number of Surfaces"
                                                    onChange={handleSurfaceCount}
                                                >
                                                    <MenuItem key={'oneSurface'} value={1}>1</MenuItem>
                                                    <MenuItem key={'twoSurface'} value={2}>2</MenuItem>
                                                    <MenuItem key={'threeSurface'} value={3}>3</MenuItem>
                                                    <MenuItem key={'fourSurface'} value={4}>4</MenuItem>
                                                </Select>
                                            </FormControl>
                                            <br />
                                        </div>
                                        <br />  <br />

                                        {/* 

                                <div>
                                    <label>Choose a Standoff:</label>
                                    <select v-model="atttachmentType" id="standoff" name="standoff">
                                        <option value="Unirac">Unirac Flashloc</option>
                                        <option value="IronRidge">Ironridge Flashfoot </option>
                                    </select>
                                </div>

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
                                </>
                            )}
                        />
                    </Form>
                )}
            </Formik>
            <fieldset id="surfaceArray">
                {Array.from({ length: projectNumSurface }, (_, index) => (
                    <SurfaceCard key={index} id={index + 1} projectType={projectType} />
                ))}
            </fieldset>
        </div>
    )
};

export default ProjectStructure;
