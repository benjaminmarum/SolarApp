import React, { useState } from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import { MenuItem, Select, InputLabel, FormControl, TextField, InputAdornment, OutlinedInput } from '@mui/material';


function SurfaceCard({ id }) {
    const [surfaceModCount, setSurfaceModCount] = useState(0);
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        image: '',
        surfaceType: '',
        surfaceName: '',
        surfaceModQty: '',
        surfaceTilt: '',
        surfaceSubType: '',
        surfaceStrucType: '',
        surfaceStrucSizing: '',
        surfaceStrucSpacing: '',
        surfacePocDistance: '',
    });

    const handleInputChange = (event) => {
        console.log(event.target.value)
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    // const handleDeleteBtn = () => {
    //     setDeleteID(id)
    //     handleDeleteFetch(id)
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
            <h4>Array {formData.id}</h4>
            <Formik

                initialValues={{
                    option: ''
                }}

                // validate={values => {
                //     const errors = {};
                //     if (!values.label) {
                //         errors.label = 'Required';
                //     } else if (
                //         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.label)
                //     ) {
                //         errors.label = 'Invalid email address';
                //     }
                //     return errors;
                // }}

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
                                    <div>
                                        <FormControl
                                            sx={{
                                                backgroundColor: 'primary.light',
                                                '&:hover': {
                                                    backgroundColor: 'primary.hover',
                                                    opacity: [0.9, 0.8, 0.7],
                                                },
                                            }}>
                                            <InputLabel id={`surface${id}ModQty-label`}>Surface Module Count</InputLabel>
                                            <OutlinedInput
                                                id={`surface${id}ModQty`}
                                                variant="filled"
                                                type="number"
                                                name={`surface${id}ModQty`}
                                                value={formData.surfaceModCount}
                                                onChange={handleInputChange}
                                                label="Surface Module Count"
                                            />
                                            <ErrorMessage name={`surface${id}ModQty`} component="div" />
                                        </FormControl>
                                    </div>
                                    <br/>

                                    <div>
                                        <FormControl
                                            sx={{
                                                backgroundColor: 'primary.light',
                                                '&:hover': {
                                                    backgroundColor: 'primary.hover',
                                                    opacity: [0.9, 0.8, 0.7],
                                                },
                                            }}>
                                            <InputLabel id={`surface${id}Tilt-label`}>Surface Tilt</InputLabel>
                                            <OutlinedInput
                                                id={`surface${id}Tilt`}
                                                variant="filled"
                                                type="number"
                                                name={`surface${id}Tilt`}
                                                value={formData.surfaceTilt}
                                                onChange={handleInputChange}
                                                label="Surface Tilt"
                                            />
                                            <ErrorMessage name={`surface${id}Tilt`} component="div" />
                                        </FormControl>
                                    </div>



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
