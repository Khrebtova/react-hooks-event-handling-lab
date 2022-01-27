// Code Keypad Component Here
import React from 'react';

function Keypad () {
    function handleChange(e){
        console.log('Entering password...')
    }
    
    return (
    <input type="password" name="password" placeholder="Enter password..." onChange={handleChange}/>
    )
    
}

export default Keypad;