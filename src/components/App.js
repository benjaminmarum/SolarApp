import React, { useEffect, useState, useRef } from 'react';
import { Formik, Form, Field } from 'formik';

// import BasicFormik from '../../componentLibrary/BasicFormik';
// import FormikForm from '../../componentLibrary/FormikForm';
// import ReactForm from '../../componentLibrary/reactForm';


import Landing from './Landing';
import SolarForm from './SolarForm';
import Home from './Home';
import SaveButton from './SaveButton';


function App() {

    const formElecRef = useRef(null);
    const [formElecData, setFormElecData] = useState({});
    const handleFormElecSubmit = () => {
        const formData = formElecRef.current;
        setFormElecData(formData);
    };

    // const form2Ref = useRef(null);

    // const [formCustomerData, setFormCustomerData] = useState({});
    // const [formUtilityData, setFormUtilityData] = useState({});

    // const [formStructuralData, setFormStructuralData] = useState({});

    // const [formArray1Data, setFormArray1Data] = useState({});
    // const [formArray2Data, setFormArray2Data] = useState({});
    // const [formArray3Data, setFormArray3Data] = useState({});
    // const [formArray4Data, setFormArray4Data] = useState({});



    const handleSubmit = () => {
        form1Data = formElecRef.current.values;
        // const form2Data = form2Ref.current.values;

        // Perform actions to submit both forms
        console.log('Form 1 data:', form1Data);
        // console.log('Form 2 data:', form2Data);
    };




    return (
        <>
            <Formik
                initialValues={{ 
                    form1: { field1: '', field2: '' }, 
                    form2: { field3: '', field4: '' } 
                }}
                onSubmit={handleSubmit}
            >
                <>
                    <div>
                        <SolarForm />
                    </div>
                    <br />
                    <div>
                        <Home handleFormElecSubmit={handleFormElecSubmit} formRef={formElecRef} />
                    </div>
                    <br />
                    <div>
                        <SaveButton handleSubmit={handleSubmit} />
                    </div>
                    <br />
                </>
            </Formik>

        </>
    );
}

export default App;
