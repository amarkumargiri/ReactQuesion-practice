import React, {useState} from 'react';

function ToggleButton(){

    const [isOn, SetIsOn] = useState(false);

    const toggle = () => {
        SetIsOn(prevState => !prevState);
    };

    return(
        <button
         onClick={toggle}
         style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: isOn ? '#4CAF50' : '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            transition: 'background-color 0.3s'
        }}
         >
            {isOn ? 'ON' : 'OFF'}
         </button>
    );
};

export default ToggleButton;