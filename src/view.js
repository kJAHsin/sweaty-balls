import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.scss'

const View = () => {
    const [hasText, setHasText] = useState(false);
    
    const handleOnInput = (val) => {
        if (val.length > 0) {
            setHasText(true)
        }
        else setHasText(false)
    }

    return (
        <form className='fuckin-form'>
			<input className='fuckin-input' onInput={(e) => handleOnInput(e.target.value)} style={{padding: hasText? "0" : "3px", transition: "padding 300ms ease-in-out"}} type="text" name="text" id="firstInp" placeholder='I dare you..'/>
			<button className='fuckin-button'>weeee!</button>
		</form>
    )
}

const container = document.getElementById('reactRoot');
if (container) {
    ReactDOM.render(<View />, container);
}