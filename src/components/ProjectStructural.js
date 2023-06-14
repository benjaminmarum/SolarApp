import React, { useState } from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage, useFormikContext } from 'formik';
import { MenuItem, Select, InputLabel, FormControl, TextField, InputAdornment, OutlinedInput } from '@mui/material';
import * as Yup from 'yup';

import SurfaceStack from './SurfaceStack';
import MountingPics from './MountingPics';

import UniracFlashingPic from '../assets/img/FlashLoc-Comp_Brochure_Page1_23126.png'
import IronridgeFlashingPic from '../assets/img/IronRidge_FlashFoot2_Tech_Brief_1.png'
import UniracMountingPic from '../assets/img/SM_Product-Brochure_1.png'
import IronridgeMountingPic from '../assets/img/IronRidge_XR_Rail_Family_Tech_Brief_1.png'

function ProjectStructural({ values, handleChange}) {
    //------------------------------------------------------------------------------------------------------>
    const { setFieldValue } = useFormikContext();
    

    const [projectType, setProjectType] = useState('');
    const [projectNumSurface, setProjectNumSurface] = useState(2);
    
    const [projectFlashEq, setProjectFlashEq] = useState('');
    const [projectMountEq, setProjectMountEq] = useState('');
    const [projectFlashEqPic, setProjectFlashEqPic] = useState('');
    const [projectMountEqPic, setProjectMountEqPic] = useState('');

    const handleSubmit = (values) => {
        // Call the onSubmit callback function passed from the parent

        const structuralData = values.structuralForm;

        // Pass the formValues to the parent component


        console.log('ProjectStructural form data:', structuralData);
    };


    //------------------------------------------------------------------------------------------------------>

    const handleTypeChange = (event) => {
        setProjectType(event.target.value);
    };

    const handleSurfaceCount = (event) => {
        setProjectNumSurface(parseInt(event.target.value));
    };

    const handleMountChange = (event) => {
        const newValue = event.target.value;
        setProjectMountEq(newValue);
        if (newValue === 'Unirac SolarMount') {
            setProjectMountEqPic(UniracMountingPic);
        } else if (newValue === 'Ironridge XR-100') {
            setProjectMountEqPic(IronridgeMountingPic);
        } else {
            setProjectMountEqPic('No Racking Selected');
        }

        // Update the form field value with the new value
        setFieldValue('projectMountEq', newValue);
    };

    const handleFlashChange = (event) => {
        const newValue = event.target.value;
        setProjectFlashEq(newValue);
        if (newValue === 'Unirac Flashloc') {
            setProjectFlashEqPic(UniracFlashingPic);
        } else if (newValue === 'Ironridge Flashfoot') {
            setProjectFlashEqPic(IronridgeFlashingPic);
        } else {
            setProjectFlashEqPic('No Flashing Selected');
        }

        // Update the form field value with the new value
        setFieldValue('projectFlashEq', newValue);
    };

    // Access the field values
    // console.log(values);

    //------------------------------------------------------------------------------------------------------>
    return (
        <>
            <Formik initialValues={values}>
                {/* //------------------------------------------------------------------------------------------> */}
                <Form name='structuralForm' id="projectStructural" className="projectStructural">
                    {/* <button type='submit'> Save Project Data </button> */}

                    <fieldset >
                        <h3>Project Structural</h3>
                        {/* //------------------------------------------------------------------------------------------> */}
                        <div id='structuralDiv'>

                            <div id='structureForm'>
                                {/* //------------------------------------------------------------------------------------------> */}
                                <div id='projType'>
                                    <Field name="projectType">
                                        {({ field, form }) => (
                                            <FormControl
                                                sx={{
                                                    backgroundColor: 'primary.light',
                                                    width: '100%',
                                                    '&:hover': {
                                                        backgroundColor: 'primary.hover',
                                                        opacity: [0.9, 0.8, 0.7],
                                                    },
                                                }} fullWidth>
                                                <>
                                                    <InputLabel id="projectType-label">Project Type</InputLabel>
                                                    <Select
                                                        {...field}
                                                        labelId="projectType-label"
                                                        id="projectType-label"
                                                        name="projectType"
                                                        value={field.value}
                                                        onChange={(event) => {
                                                            form.handleChange(event); // Call Formik's handleChange
                                                            handleTypeChange(event); // Call your custom handler
                                                            handleChange(event); // Update the parent component's form values
                                                        }}
                                                        label="Project Type"

                                                    >
                                                        <MenuItem key={undefined} value={undefined}>Select Project Type</MenuItem>
                                                        <MenuItem key={'Roof Mount'} value={'Roof Mount'}>Roof Mount</MenuItem>
                                                        <MenuItem key={'Ground Mount'} value={'Ground Mount'}>Ground Mount</MenuItem>
                                                        <MenuItem key={'Car Port'} value={'Car Port'}>Car Port</MenuItem>
                                                    </Select>
                                                </>
                                            </FormControl>
                                        )}
                                    </Field>
                                </div>

                                {/* //------------------------------------------------------------------------------------------> */}
                                <br />
                                {/* //------------------------------------------------------------------------------------------> */}

                                <div id='FlashingEq'>
                                    <Field name="projectFlashEq">
                                        {({ field, form }) => (
                                            <FormControl sx={{
                                                backgroundColor: 'primary.light',
                                                width: '100%',
                                                '&:hover': {
                                                    backgroundColor: 'primary.hover',
                                                    opacity: [0.9, 0.8, 0.7],
                                                },
                                            }}>
                                                <InputLabel id="flashSelect-label">Flashing Kit</InputLabel>
                                                <Select
                                                    {...field}
                                                    labelId="flashSelect-label"
                                                    id="flashSelect-label"
                                                    label="flashting Equipment"
                                                    name="projectFlashEq"
                                                    value={field.value}
                                                    onChange={(event) => {
                                                        form.handleChange(event); // Call Formik's handleChange
                                                        handleFlashChange(event); // Call your custom handler
                                                        handleChange(event); // Update the parent component's form values
                                                    }}
                                                >
                                                    <MenuItem key={undefined} value={undefined}>Select Flash Kit</MenuItem>
                                                    <MenuItem key={'Unirac'} value={'Unirac Flashloc'}>Unirac Flashloc</MenuItem>
                                                    <MenuItem key={'IronRidge'} value={'Ironridge Flashfoot'}>Ironridge Flashfoot</MenuItem>
                                                </Select>
                                            </FormControl>
                                        )}
                                    </Field>
                                </div>

                                {/* //------------------------------------------------------------------------------------------> */}
                                <br />
                                {/* //------------------------------------------------------------------------------------------> */}

                                <div id='projectMountingEq'>
                                    <Field name="projectMountEq">
                                        {({ field, form }) => (

                                            <FormControl sx={{
                                                backgroundColor: 'primary.light',
                                                width: '100%',
                                                '&:hover': {
                                                    backgroundColor: 'primary.hover',
                                                    opacity: [0.9, 0.8, 0.7],
                                                },
                                            }}>
                                                <InputLabel id="mountSelect-label">Mounting Equipment</InputLabel>
                                                <Select
                                                    {...field}
                                                    labelId="mountSelect-label"
                                                    id="mountSelect-label"
                                                    label="Mounting Equipment"
                                                    name="projectMountEq"
                                                    value={field.value}
                                                    onChange={(event) => {
                                                        form.handleChange(event); // Call Formik's handleChange
                                                        handleMountChange(event); // Call your custom handler
                                                        handleChange(event); // Update the parent component's form values
                                                    }}
                                                >
                                                    <MenuItem key={''} value={undefined}>Mounting Equipment</MenuItem>
                                                    <MenuItem key={'UniracSM'} value={'Unirac SolarMount'}>Unirac SolarMount</MenuItem>
                                                    <MenuItem key={'IronridgeXR'} value={'Ironridge XR-100'}>Ironridge XR-100</MenuItem>
                                                </Select>
                                            </FormControl>

                                        )}
                                    </Field>
                                </div>

                                {/* //------------------------------------------------------------------------------------------> */}
                                <br />
                                {/* //------------------------------------------------------------------------------------------> */}

                                <div id="numSurfaces">
                                    <Field name="projectNumSurface">
                                        {({ field, form }) => (

                                            <FormControl sx={{
                                                backgroundColor: 'primary.light',
                                                width: '100%',
                                                '&:hover': {
                                                    backgroundColor: 'primary.hover',
                                                    opacity: [0.9, 0.8, 0.7],
                                                },
                                            }}>
                                                <InputLabel id="numSurface-label">Number of Surfaces</InputLabel>
                                                <Select
                                                    {...field}
                                                    labelId="numSurface-label"
                                                    id="numSurface-label"
                                                    name="projectNumSurface"
                                                    value={field.value}
                                                    onChange={(event) => {
                                                        form.handleChange(event); // Call Formik's handleChange
                                                        handleSurfaceCount(event); // Call your custom handler
                                                        handleChange(event); // Update the parent component's form values
                                                    }}
                                                    label="Number of Surfaces"
                                                >
                                                    <MenuItem key={''} value={undefined}>Number of Surfaces</MenuItem>
                                                    <MenuItem key={'oneSurface'} value={1}>1</MenuItem>
                                                    <MenuItem key={'twoSurface'} value={2}>2</MenuItem>
                                                    <MenuItem key={'threeSurface'} value={3}>3</MenuItem>
                                                    <MenuItem key={'fourSurface'} value={4}>4</MenuItem>
                                                </Select>
                                            </FormControl>
                                        )}
                                    </Field>
                                </div>

                                {/* //------------------------------------------------------------------------------------------> */}
                            </div>

                            <MountingPics FlashingImage={projectFlashEqPic} MountingImage={projectMountEqPic} />

                        </div>
                        {/* //------------------------------------------------------------------------------------------> */}
                    </fieldset>


                </Form>

            </Formik>
            {/* //------------------------------------------------------------------------------------------> */}

            <SurfaceStack projectNumSurface={projectNumSurface} projectType={projectType} />

            {/* //------------------------------------------------------------------------------------------> */}
        </>
    )
};

export default ProjectStructural;
