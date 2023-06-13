import React, { useState } from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import { MenuItem, Select, InputLabel, FormControl, TextField, InputAdornment, OutlinedInput } from '@mui/material';
import SurfaceCard from './SurfaceCard';
import MountingPics from './MountingPics';
import * as Yup from 'yup';

import UniracFlashingPic from '../assets/img/FlashLoc-Comp_Brochure_Page1_23126.png'
import IronridgeFlashingPic from '../assets/img/IronRidge_FlashFoot2_Tech_Brief_1.png'

import UniracMountingPic from '../assets/img/SM_Product-Brochure_1.png'
import IronridgeMountingPic from '../assets/img/IronRidge_XR_Rail_Family_Tech_Brief_1.png'

function ProjectStructural() {
    const [projectType, setProjectType] = useState('');
    const [projectFlashEq, setProjectFlashEq] = useState('');
    const [projectFlashEqPic, setProjectFlashEqPic] = useState('');
    const [projectMountEq, setProjectMountEq] = useState('');
    const [projectMountEqPic, setProjectMountEqPic] = useState('');
    const [projectNumSurface, setProjectNumSurface] = useState(1);


    const handleSurfaceCount = (event) => {
        setProjectNumSurface(parseInt(event.target.value));
    };

    const handleMountChange = (event) => {
        setProjectMountEq(event.target.value);
        if (event.target.value === 'Unirac SolarMount') {
            setProjectMountEqPic(UniracMountingPic);
        } else if (event.target.value === 'Ironridge XR-100') {
            setProjectMountEqPic(IronridgeMountingPic);
        } else {
            setProjectMountEqPic('No Racking Selected');
        };
    };

    const handleTypeChange = (event) => {
        setProjectType(event.target.value);
    };


    const handleFlashChange = (event) => {
        setProjectFlashEq(event.target.value);
        if (event.target.value === 'Unirac Flashloc') {
            setProjectFlashEqPic(UniracFlashingPic);
        } else if (event.target.value === 'Ironridge Flashfoot') {
            setProjectFlashEqPic(IronridgeFlashingPic);
        } else {
            setProjectFlashEqPic('No Flashing Selected');
        };
    };

    return (
        <div id='mountingDetails'>
            <Formik

                initialValues={{
                    projectType : '',
                    projectFlashEq : '',
                    projectFlashEqPic : '',
                    projectMountEq : '',
                    projectMountEqPic : '',
                    projectNumSurface : 1,
                }}

                validate={values => {
                    const errors = {};
                    if (!values.label) {
                        errors.label = 'REquired';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.label)
                    ) {
                        errors.label = 'Invalid email address';
                    }
                    return errors;
                }}

                onSubmit={(values, { setSubmitting }) => {
                    handleAllFormSubmit(values);
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}

            >

                {({ isSubmitting, values, handleChange }) => (
                    <Form id="projectStructural" className="projectStructural">
                        <FieldArray
                            name="projectStructural"
                            render={arrayHelpers => (
                                <>
                                    <fieldset >
                                        <h3>Project Structural</h3>
                                        <div id='structuralDiv'>

                                            <div id='structureForm'>

                                                <div id='projectType'>
                                                    <FormControl sx={{
                                                        backgroundColor: 'primary.light',
                                                        width: '100%',
                                                        '&:hover': {
                                                            backgroundColor: 'primary.hover',
                                                            opacity: [0.9, 0.8, 0.7],
                                                        },
                                                    }} fullWidth>
                                                        <InputLabel id="projectType-label">Project Type</InputLabel>
                                                        <Select
                                                            labelId="projectType-label"
                                                            id="projectType-label"
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
                                                        width: '100%',
                                                        '&:hover': {
                                                            backgroundColor: 'primary.hover',
                                                            opacity: [0.9, 0.8, 0.7],
                                                        },
                                                    }}>
                                                        <InputLabel id="flashSelect-label">Flashing Kit</InputLabel>
                                                        <Select
                                                            labelId="flashSelect-label"
                                                            id="flashSelect-label"
                                                            value={projectFlashEq}
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
                                                        width: '100%',
                                                        '&:hover': {
                                                            backgroundColor: 'primary.hover',
                                                            opacity: [0.9, 0.8, 0.7],
                                                        },
                                                    }}>
                                                        <InputLabel id="mountSelect-label">Mounting Equipment</InputLabel>
                                                        <Select
                                                            labelId="mountSelect-label"
                                                            id="mountSelect-label"
                                                            value={projectMountEq}
                                                            label="Mounting Equipment"
                                                            onChange={handleMountChange}
                                                        >
                                                            <MenuItem key={'UniracSM'} value={'Unirac SolarMount'}>Unirac SolarMount</MenuItem>
                                                            <MenuItem key={'IronridgeXR'} value={'Ironridge XR-100'}>Ironridge XR-100</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                    <br />
                                                </div>

                                                <br />

                                                <div id="numSurfaces">
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

                                                <br />

                                            </div>

                                            <MountingPics FlashingImage={projectFlashEqPic}  MountingImage={projectMountEqPic} />
                                       
                                        </div>
                                    </fieldset>
                                </>
                            )}
                        />
                    </Form>
                )}
            </Formik>
            <fieldset id='projectSurfaces'>
                {Array.from({ length: projectNumSurface }, (_, index) => (
                    <SurfaceCard key={index} id={index + 1} projectType={projectType} />
                ))}
            </fieldset>
        </div>
    )
};

export default ProjectStructural;
