import React from 'react';

const SaveButton = ({ handleSubmit, values }) => {
    const handleButtonClick = () => {
        handleSubmit(values); // Call the handleSubmit function provided by Formik
    };

    return (
        <div id='save'>
            <button type="button" onClick={handleButtonClick}>
                Save Project Data
            </button>
        </div>
    );
};

export default SaveButton;
