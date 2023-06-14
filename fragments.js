
const { setFieldValue } = useFormikContext();

const handleUpdateField = () => {
    // Update a field value in the form

    const newCount = values.projectModCount; // Get the new value from Formik's values
    const newModule = values.projectModule; // Get the new value from Formik's values
    const newInverter = values.projectInverter; // Get the new value from Formik's values

    setFieldValue('projectModCount', newCount);
    setFieldValue('projectModule', newModule);
    setFieldValue('projectInverter', newInverter);
};