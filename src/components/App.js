import React, { useEffect, useState, useRef } from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage, useFormikContext } from 'formik';


import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';

import Landing from './Landing';
import SolarForm from './SolarForm';
import ProjectElectrical from './ProjectElectrical';
import ProjectStructural from './ProjectStructural';
import SaveButton from './SaveButton';


const App = () => {

    //Init Fetch------------------------------------------------------------------>
    useEffect(() => {
        fetchModuleData();
        setIsLoading(true)
        fetchInverterData();
    }, []);

    //Fetch Functions------------------------------------------------------------->
    async function fetchModuleData() {
        try {
            const response = await fetch('http://localhost:8118/modules');
            if (!response.ok) {
                throw new Error('Failed to fetch module data');
            }
            const moduleData = await response.json();
            if (moduleData && moduleData.length >= 2) {
                setModuleData(moduleData);
                setIsLoading(false);
            } else {
                throw new Error('Invalid module data structure');
            }
        } catch (error) {
            setError(error.message);
            setIsLoading(false);
        }
    }

    async function fetchInverterData() {
        try {
            const response = await fetch('http://localhost:8118/inverters');
            if (!response.ok) {
                throw new Error('Failed to fetch inverter data');
            }
            const invData = await response.json();
            if (invData && invData.length >= 2) {
                setInverterData(invData);
                setIsLoading(false);
            } else {
                throw new Error('Invalid inverter data structure');
            }
        } catch (error) {
            setError(error.message);
            setIsLoading(false);
        }
    }

    // Material UI Theme---------------------------------------------------------->

    let theme = createTheme({
        palette: {
            primary: {
                main: '#011e3c',
                dark: '#0b1929',
                light: '#d1e5f4',
                hover: '#ffd602',
            },
            secondary: {
                main: '#fff',
            },
            error: {
                main: '#red',
            },
            background: {
                default: '#081a2d',
            },
        },
        typography: {
            // Your typography styles go here
        },
    });

    //Variables-------------------------------------------------------------------> 
    const [moduleData, setModuleData] = useState([]);
    const [inverterData, setInverterData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    //FormValues------------------------------------------------------------> 



    //Handle Submit-----------------> 
    const handleSubmit = (values) => {

        // Handle the form data from the child components

        console.log('Form data:', values);
    };



    //Initialize Forms--------------------------------------------------> 
    const initElectricalFormVals = {
        projectModCount: 0,
        projectModule: '',
        projectInverter: '',
    };

    const initStructuralFormVals = {
        projectType: '',
        projectFlashEq: '',
        projectFlashEqPic: '',
        projectMountEq: '',
        projectMountEqPic: '',
        projectNumSurface: 2,
    };

    return (
        <ThemeProvider theme={theme}>

            <Formik
                initialValues={{
                    customerForm: {},
                    siteForm: {},
                    electricalForm: initElectricalFormVals,
                    structuralForm: initStructuralFormVals,
                    surface1Form: {},
                }}
                onSubmit={handleSubmit}
            >
                {({ values }) => ( // Access Formik's values prop

                    <div id='App'>
                        {/*---------------------------------------------------------------------> */}
                        <div>
                            {/* <SolarForm /> */}
                        </div>
                        {/*---------------------------------------------------------------------> */}
                        <br />
                        {/*---------------------------------------------------------------------> */}

                        <div>
                            <h3>Project Details</h3>
                            {/*-------------------------------------------> */}
                            <ProjectElectrical
                                moduleData={moduleData}
                                inverterData={inverterData}
                                values={values.electricalForm}
                            />
                            {/*-------------------------------------------> */}
                            <ProjectStructural
                                values={values.structuralForm}
                            />
                            {/*--------------------------------------------> */}
                        </div>

                        {/*---------------------------------------------------------------------> */}
                        <br />
                        {/*---------------------------------------------------------------------> */}
                        <div>
                            <SaveButton handleSubmit={handleSubmit} />
                        </div>
                        {/*---------------------------------------------------------------------> */}
                    </div>
                )}
            </Formik>

        </ThemeProvider>
    );
}

export default App;
