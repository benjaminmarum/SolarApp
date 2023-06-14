import React, { useState } from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import { MenuItem, Select, InputLabel, FormControl, TextField, InputAdornment, OutlinedInput } from '@mui/material';
import SurfaceCard from './SurfaceCard';

function SurfaceStack({projectNumSurface, projectType} ) {


    //----------------------------------------------------------------------------------->
    //JSX
    return (
        <fieldset id='projectSurfaces'>
            {Array.from({ length: projectNumSurface }, (_, index) => (
                <SurfaceCard key={index} id={index + 1} projectType={projectType} />
            ))}
        </fieldset>
    );
    //----------------------------------------------------------------------------------->
}

export default SurfaceStack;
