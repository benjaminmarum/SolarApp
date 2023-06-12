import React, { useState } from 'react';

function ReactForm() {
    const [formData, setFormData] = useState({
        isGoing: true,
        numGuests: 2,
    });

    const handleCheckboxChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: !formData.isGoing,
        });
    };

    const handleNumberChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <form>
            <label>
                Is going:
                <input
                    name="isGoing"
                    type="checkbox"
                    checked={formData.isGoing}
                    onChange={handleCheckboxChange} />
            </label>
            <br />
            <label>
                Number of guests:
                <input
                    name="numGuests"
                    type="number"
                    value={formData.numGuests}
                    onChange={handleNumberChange} />
            </label>
        </form>
    );
}

export default ReactForm;
