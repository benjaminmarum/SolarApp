import React, { useEffect, useState } from 'react';

// import BasicFormik from '../../componentLibrary/BasicFormik';
// import FormikForm from '../../componentLibrary/FormikForm';
// import ReactForm from '../../componentLibrary/reactForm';


import Landing from './Landing';
import SolarForm from './SolarForm';
import Home from './Home';
import FormSubmitOptions from './FormSubmitOptions';


function App() {
    const [state, setState] = useState('Hi from Ben\'s first React Project');


    return (
        <>
            <div>
                <SolarForm />
            </div>
            <br/>
            <div>
                <Home />
            </div>
            <br/>
            <div>
                <FormSubmitOptions />
            </div>
            <br/>
        </>
    );
}

export default App;
