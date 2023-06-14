import React, { useEffect, useState, useRef } from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage, useFormikContext } from 'formik';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';

import ProjectElectrical from './ProjectElectrical';
import ProjectStructural from './ProjectStructural';
import SaveButton from './SaveButton';


const App = () => {
    //Variables-------------------------------------------------------------------> 
    const [moduleData, setModuleData] = useState([]);
    const [inverterData, setInverterData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    //Values-------------------------------------------------------------------> 
    const [ProjectData, setParentValues] = useState({});

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


    //FormValues------------------------------------------------------------> 



    //Handle Submit-----------------> 
    // const handleSubmit = (values) => {
    //     // Perform actions to submit both forms
    //     console.log('Form 1 data:', values.electricalForm);
    //     console.log('Form 2 data:', values.structuralForm);
    // };

    const handleSubmit = (updatedValues) => {
        // Perform actions with the updated form values
        console.log('Updated Form Values:', updatedValues);
    };

    const handleChildSubmit = (childValues) => {
        // Update the parent component's values
        setParentValues(childValues);
    };


    // Inside the component function
    const handleChange = (updatedValues) => {
        onSubmit(updatedValues); // Call the parent component's handleSubmit function
    };



    //Initialize Forms--------------------------------------------------> 
    const initCustomerFormVals = {
        // Define initial values for the customer form
    };

    const initSiteFormVals = {
        // Define initial values for the site form
    };

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

    const initSurface1Vals = {
        // Define initial values for the site form
    };

    return (
        <ThemeProvider theme={theme}>

            <Formik
                initialValues={{
                    customerForm: initCustomerFormVals,
                    siteForm: initSiteFormVals,
                    electricalForm: initElectricalFormVals,
                    structuralForm: initStructuralFormVals,
                    surface1Form: initSurface1Vals,
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
                                handleChange={handleChange} // Pass the handleSubmit function
                            />

                            {/*-------------------------------------------> */}

                            <ProjectStructural
                                values={values.structuralForm}
                                onSubmit={handleSubmit} // Pass the handleSubmit function
                            />
                            {/*--------------------------------------------> */}
                        </div>

                        {/*---------------------------------------------------------------------> */}
                        <br />
                        {/*---------------------------------------------------------------------> */}
                        <div>
                            <SaveButton handleSubmit={handleSubmit} values={values} />
                        </div>
                        {/*---------------------------------------------------------------------> */}
                    </div>
                )}
            </Formik>

        </ThemeProvider>
    );
}

export default App;
