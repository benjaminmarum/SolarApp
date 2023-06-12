import React, { useEffect, useState } from 'react';
import ReactForm from './reactForm';
import SolarForm from './SolarForm';
import BasicFormik from './BasicFormik';
import FormikForm from './FormikForm';
import Landing from './Landing';
import Home from './Home';
import BuilderForm from './BuilderForm';


function App() {
    const [state, setState] = useState('Hi from Ben\'s first React Project');


    return (
        <>
            <div>
                {state}
            </div>
            <br/>
            <div>
                <ReactForm />
            </div>
            <br/>
            <div>
                <BasicFormik />
            </div>
            <br/>
            <div>
                <SolarForm />
            </div>
            <br/>
            <div>
                <Home />
            </div>
            <div>
                <BuilderForm />
            </div>
            <br/>
        </>
    );
}

export default App;
