import React, { useEffect, useState, useRef } from 'react';
import { Formik, Form, Field } from 'formik';

import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';

import Landing from './Landing';
import SolarForm from './SolarForm';
import ProjectElectrical from './ProjectElectrical';
import ProjectStructural from './ProjectStructural';
import SaveButton from './SaveButton';


function App() {

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

    //Project Equipment-----------------> 
    const [projectModCount, setProjectModCount] = useState(0);
    const [projectModule, setProjectModule] = useState('');
    const [projectInverter, setProjectInverter] = useState('');


    //Project Electrical-----------------> 
    const formElecRef = useRef(null);
    const [formElecData, setFormElecData] = useState({});

    //Initialize Forms--------------------------------------------------> 
    const initElectricalFormVals = {
        projectModCount: 0,
        projectModule: '',
        projectInverter: '',
    };






    //Submit Handlers------------------------------------------------------------> 

    //Handle All-----------------> 
    const handleSubmit = () => {
        // formData = electricalForm.values;
        // // const form2Data = form2Ref.current.values;

        // // Perform actions to submit both forms
        // console.log('Form 1 data:', values.formData);
        // console.log('Form 2 data:', form2Data);
    };

    //Handle Electrical-----------------> 
    const handleFormElecSubmit = () => {
        const formData = formElecRef.current;
        setFormElecData(formData);
    };

    return (
        <ThemeProvider theme={theme}>

            <Formik
                initialValues={{
                    customerForm: { firstName: '', lastName: '', },
                    siteForm: {},
                    electricalForm: { initElectricalFormVals },
                    structuralForm: {},
                    surface1Form: { field3: '', field4: '' },
                }}
                onSubmit={handleSubmit}
            >
                <div id='App'>
                    {/*---------------------------------------------------------------------> */}
                    <div>
                        <SolarForm />
                    </div>
                    {/*---------------------------------------------------------------------> */}
                    <br />
                    {/*---------------------------------------------------------------------> */}
                    <div>
                        <div>
                            <h3>Project Details</h3>
                            <ProjectElectrical moduleData={moduleData} inverterData={inverterData} initElectricalFormVals={initElectricalFormVals} />
                            <ProjectStructural />
                        </div>
                    </div>
                    {/*---------------------------------------------------------------------> */}
                    <br />
                    {/*---------------------------------------------------------------------> */}
                    <div>
                        <SaveButton handleSubmit={handleSubmit} />
                    </div>
                    {/*---------------------------------------------------------------------> */}
                </div>

            </Formik>

        </ThemeProvider>
    );
}

export default App;
