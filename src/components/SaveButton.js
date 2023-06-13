import React from 'react';

const SaveButton = ({ handleSubmit }) => {
    return (
        <div id='save'>
            <button id='saveBtn' type='submit' onClick={handleSubmit}>Save all Data</button>
        </div>
    );
};

export default SaveButton;
