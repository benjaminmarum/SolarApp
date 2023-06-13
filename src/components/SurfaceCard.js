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
                                <>

                                    <div class="modQty">
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

                                    <div class='tilt'>
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

                                    <div class='azi'>
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

                                    <div class='surfType'>
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

                                    <div class='strucType'>
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

                                    <div class='strucSize'>
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

                                    {/* <div class='strucSpan'>
                                        <FormControl
                                            sx={{
                                                backgroundColor: 'primary.light',
                                                width: '50%',
                                                '&:hover': {
                                                    backgroundColor: 'primary.hover',
                                                    opacity: [0.9, 0.8, 0.7],
                                                },
                                            }}>
                                            <div class="span">
                                                <InputLabel id={`surface${id}strucSpan-label`}>Max Span</InputLabel>
                                                <OutlinedInput
                                                    id={`surface${id}strucSpan`}
                                                    variant="filled"
                                                    type="number"
                                                    name={`surface${id}strucSpan`}
                                                    value={structureSpan}
                                                    onChange={setStructureSpan}
                                                    label="strucSpan"
                                                />
                                                <InputLabel id={`surface${id}strucSpan-label`}>Max Span</InputLabel>
                                                <OutlinedInput
                                                    id={`surface${id}strucSpan`}
                                                    variant="filled"
                                                    type="number"
                                                    name={`surface${id}strucSpan`}
                                                    value={structureSpan}
                                                    onChange={setStructureSpan}
                                                    label="strucSpan"
                                                />
                                            </div>
                                            <ErrorMessage name={`surface${id}strucSpan`} component="div" />
                                        </FormControl>
                                    </div> */}

                                </>
                            )}
                        />
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default SurfaceCard;

// <FormControl sx={{
//     backgroundColor: 'primary.light',
//     width: '40%',
//     '&:hover': {
//         backgroundColor: 'primary.hover',
//         opacity: [0.9, 0.8, 0.7],
//     },
// }}>
//     <InputLabel id="numSurface-label">Number of Surfaces</InputLabel>
//     <Select
//         labelId="numSurface-label"
//         id="numSurface-label"
//         value={projectNumSurface}
//         label="Number of Surfaces"
//         onChange={handleSurfaceCount}
//     >
//         <MenuItem key={'oneSurface'} value={1}>1</MenuItem>
//         <MenuItem key={'oneSurface'} value={2}>2</MenuItem>
//         <MenuItem key={'oneSurface'} value={3}>3</MenuItem>
//         <MenuItem key={'oneSurface'} value={4}>4</MenuItem>
//     </Select>
// </FormControl>


{/* <div class="roofInput">
<fieldset>
  <b style="font-size: large">Roof 1:</b><br>

  <label for="fname">Module Quantity:</label>
  <input v-model="roofModQty1" type="number"><br>

  <label for="roofTilt1">Rooft Tilt:</label>
  <input v-model="roofTilt1" type="number"><br>

  <label for="roofAzi1">Rooft Azimuth:</label>
  <input v-model="roofAzi1" type="number"><br>

  <div>
    <label for="roofType1">Roof Type:</label>
    <select v-model="roofType1">
      <option value="Asphalt/Comp Shingle">Asphalt/Comp Shingle</option>
      <option value="Concrete Tile">Concrete Tile </option>
    </select>
  </div>

  <div>
    <label for="roofStructureType1">Roof Structure Type:</label>
    <select v-model="roofStructureType1">
      <option value="Wood Truss">Wood Truss</option>
      <option value="Rafters">Rafters</option>
    </select>
  </div>

  <div>
    <label for="roofStructureMembers1">Roof Structure Size:</label>
    <select v-model="roofStructureMembers1">
      <option value='2" x 4"'>2" x 4"</option>
      <option value='2" x 6"'>2" x 6"</option>
      <option value='2" x 8"'>2" x 8"</option>
      <option value='2" x 10"'>2" x 10"</option>
      <option value='2" x 12"'>2" x 12"</option>
    </select>
  </div>

  <div>
    <label for="roofStructureSpacing1">Structure Sapcing:</label>
    <select v-model="roofStructureSpacing1">
      <option value="24">24in O.C.</option>
      <option value="16">16in O.C.</option>
    </select>
  </div>

  <div>
    <label for="roofDistance1">Roof Distance:</label>
    <input v-model="roofDistance1" type="number">ft<br>
  </div>

</fieldset>
</div> */}
