import React, { useEffect, useState } from 'react';
import ProjectElectrical from './ProjectElectrical';
import ProjectStructural from './ProjectStructural';
import { createTheme,ThemeProvider, responsiveFontSizes } from '@mui/material/styles';


function Home({form1Ref, form2Ref}) {
  //--------> Variables
  const [moduleData, setModuleData] = useState([]);
  const [inverterData, setInverterData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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

  //--------> Init Fetch
  useEffect(() => {
    fetchModuleData();
    setIsLoading(true)
    fetchInverterData();
  }, []);


  //--------> Fetch Functions
  async function fetchModuleData() {
    try {
      const response = await fetch('http://localhost:8006/modules');
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
      const response = await fetch('http://localhost:8006/inverters');
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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  //--------> set Data



  //----------------------------------------------------------------------------------->
  //JSX
  return (
    <ThemeProvider theme={theme}>
      <div>
        <h3>Project Details</h3>
        <ProjectElectrical moduleData={moduleData} inverterData={inverterData} form1Ref={form1Ref}/>
        <ProjectStructural form2Ref={form2Ref}/>
      </div>
    </ThemeProvider>
  );
}

export default Home;
