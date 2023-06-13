import React, { useState } from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import { MenuItem, Select, InputLabel, FormControl, TextField, InputAdornment, OutlinedInput } from '@mui/material';


function SurfaceCard({ id, projectType }) {
    const [surfaceModCount, setSurfaceModCount] = useState('');
    const [surfaceTilt, setSurfaceTilt] = useState('');
    const [surfaceAzimuth, setSurfaceAzimuth] = useState('');
    const [surfaceSubType, setSurfaceSubType] = useState('');

    const [structureType, setStructureType] = useState('');
    const [structureSize, setStructureSize] = useState('');
    const [structureSpace, setStructureSpace] = useState('');
    const [structureSpan, setStructureSpan] = useState('');

    const handleModChange = (event) => {
        setSurfaceModCount(event.target.value);
    };

    const handleTiltChange = (event) => {
        setSurfaceTilt(event.target.value);
    };

    const handleAziChange = (event) => {
        setSurfaceAzimuth(event.target.value);
    };

    const handleTypeChange = (event) => {
        setSurfaceSubType(event.target.value);
    };


    const handleStrucChange = (event) => {
        setStructureType(event.target.value);
    };

    const handleStrucSizeChange = (event) => {
        setStructureSize(event.target.value);
    };

    const handleStrucSpaceChange = (event) => {
        setStructureSpace(event.target.value);
    };

    const handleStrucSpanChange = (event) => {
        setStructureSpan(event.target.value);
    };





    // const [formData, setFormData] = useState({
    //     id: id,
    //     name: '',
    //     image: '',
    //     surfaceType: '',
    //     surfaceName: '',
    //     surfaceModQty: 0,
    //     surfaceTilt: 0,
    //     surfaceSubType: '',
    //     surfaceStrucType: '',
    //     surfaceStrucSizing: '',
    //     surfaceStrucSpacing: '',
    //     surfacePocDistance: '',
    // });

    // const handleInputChange = (event) => {
    //     console.log(event.target.value)
    //     setFormData({
    //         ...formData,
    //         [event.target.name]: event.target.value,
    //     });
    // };

    // const handleNewPrice = (event) => {
    //   setPrice(price)
    //   event.preventDefault();
    //   fetch(`http://localhost:6001/plants/${plant.id}`, {
    //     method: "PATCH",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ price: parseFloat(price) }),
    //   });
    // };

    return (
        <div className="card">
            {/* <img src={'plant.image'} alt={'plant.name'} /> */}
            <h4>{projectType} {id}</h4>
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
                    <Form className="surfaceCard">
                        <FieldArray
                            name={`surface${id}Card`}
                            render={arrayHelpers => (
                                <div className='surfaceCard'>
                        
                                    <div className="modQty">
                                        <FormControl
                                            sx={{
                                                backgroundColor: 'primary.light',
                                                width: '100%',
                                                '&:hover': {
                                                    backgroundColor: 'primary.hover',
                                                    opacity: [0.9, 0.8, 0.7],
                                                },
                                            }}>
                                            <InputLabel id={`surface${id}ModQty-label`}>Module Qty</InputLabel>
                                            <OutlinedInput
                                                id={`surface${id}ModQty`}
                                                variant="filled"
                                                type="number"
                                                name={`surface${id}ModQty`}
                                                value={(surfaceModCount)}
                                                onChange={handleModChange}
                                                label="Module Qty"
                                            />
                                            <ErrorMessage name={`surface${id}ModQty`} component="div" />
                                        </FormControl>
                                    </div>

                                    <br />

                                    <div className='tilt'>
                                        <FormControl
                                            sx={{
                                                backgroundColor: 'primary.light',
                                                width: '100%',
                                                '&:hover': {
                                                    backgroundColor: 'primary.hover',
                                                    opacity: [0.9, 0.8, 0.7],
                                                },
                                            }}>
                                            <InputLabel id={`surface${id}Tilt-label`}>Tilt</InputLabel>
                                            <OutlinedInput
                                                id={`surface${id}Tilt`}
                                                variant="filled"
                                                type="number"
                                                name={`surface${id}Tilt`}
                                                value={surfaceTilt}
                                                onChange={handleTiltChange}
                                                label="Tilt"
                                            />
                                            <ErrorMessage name={`surface${id}Tilt`} component="div" />
                                        </FormControl>
                                    </div>

                                    <br />

                                    <div className='azi'>
                                        <FormControl
                                            sx={{
                                                backgroundColor: 'primary.light',
                                                width: '100%',
                                                '&:hover': {
                                                    backgroundColor: 'primary.hover',
                                                    opacity: [0.9, 0.8, 0.7],
                                                },
                                            }}>
                                            <InputLabel id={`surface${id}Azimuth-label`}>Azimuth</InputLabel>
                                            <OutlinedInput
                                                id={`surface${id}Azimuth`}
                                                variant="filled"
                                                type="number"
                                                name={`surface${id}Azimuth`}
                                                value={surfaceAzimuth}
                                                onChange={handleAziChange}
                                                label="Azimuth"
                                            />
                                            <ErrorMessage name={`surface${id}Azimuth`} component="div" />
                                        </FormControl>
                                    </div>

                                    <br />

                                    <div className='surfType'>
                                        <FormControl sx={{
                                            backgroundColor: 'primary.light',
                                            width: '100%',
                                            '&:hover': {
                                                backgroundColor: 'primary.hover',
                                                opacity: [0.9, 0.8, 0.7],
                                            },
                                        }}>
                                            <InputLabel id="flashSelect-label">{projectType} Type</InputLabel>
                                            <Select
                                                labelId="surf_type"
                                                id="surf_type"
                                                value={surfaceSubType}
                                                label="Array Surface Type"
                                                onChange={handleTypeChange}
                                            >
                                                <MenuItem key={'asphalt'} value={'AsphaltShingle'}>Asphalt/Comp. Shingle</MenuItem>
                                                <MenuItem key={'rolledAsph'} value={'RolledAsphalt'}>Rolled Asphalt</MenuItem>
                                                <MenuItem key={'adheredMembrane'} value={'AdheredMembrane'}>Adhered Membrane</MenuItem>
                                                <MenuItem key={'corrugatedMetal'} value={'CorrugatedMetal'}>Corrugated Metal</MenuItem>
                                                <MenuItem key={'StandingSeam'} value={'StandingSeam'}>Standing Seam</MenuItem>
                                                <MenuItem key={'WoodShingle'} value={'WoodShingle'}>Wood Shingle</MenuItem>
                                                <MenuItem key={'tarGravel'} value={'TarGravel'}>Tar & Gravel</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <br />
                                    </div>

                                    <br />

                                    <div className='strucType'>
                                        <FormControl sx={{
                                            backgroundColor: 'primary.light',
                                            width: '100%',
                                            '&:hover': {
                                                backgroundColor: 'primary.hover',
                                                opacity: [0.9, 0.8, 0.7],
                                            },
                                        }}>
                                            <InputLabel id="strucSelect-label">Structure Type</InputLabel>
                                            <Select
                                                labelId="struc_type"
                                                id="struc_type"
                                                value={structureType}
                                                label="Structure Type"
                                                onChange={handleStrucChange}
                                            >
                                                <MenuItem key={'rafters'} value={'Rafters'}>Rafters</MenuItem>
                                                <MenuItem key={'woodTruss'} value={'WoodTruss'}>Wood Truss</MenuItem>
                                                <MenuItem key={'postBeam'} value={'PostBeam'}>Post & Beam</MenuItem>
                                                <MenuItem key={'sip'} value={'SIP'}>S.I.P.</MenuItem>
                                                <MenuItem key={'metalTruss'} value={'MetalTruss'}>Metal Truss</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <br />

                                    </div>

                                    <br />

                                    <div className='strucSize'>
                                        <FormControl sx={{
                                            backgroundColor: 'primary.light',
                                            width: '100%',
                                            '&:hover': {
                                                backgroundColor: 'primary.hover',
                                                opacity: [0.9, 0.8, 0.7],
                                            },
                                        }}>
                                            <InputLabel id="strucSpace-label">Structure Spacing</InputLabel>
                                            <Select
                                                labelId="strucSpace"
                                                id="strucSpace"
                                                value={structureSpace}
                                                label="Structure Spacing"
                                                onChange={handleStrucSpaceChange}
                                            >
                                                <MenuItem key={'12'} value={'12'}>12" O.C.</MenuItem>
                                                <MenuItem key={'16'} value={'16'}>16" O.C.</MenuItem>
                                                <MenuItem key={'19.2'} value={'19.2'}>19.2" O.C.</MenuItem>
                                                <MenuItem key={'24'} value={'24'}>24" O.C.</MenuItem>
                                                <MenuItem key={'48'} value={'48'}>48" O.C.</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <br />

                                    </div>

                                    <br />

                                </div>
                            )}
                        />
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default SurfaceCard;
