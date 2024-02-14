import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.scss'

const container = document.getElementById('reactRoot');

function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        // Check if this cookie starts with the name we're looking for
        if (cookie.startsWith(name + '=')) {
            // Return the substring after the cookie name and '='
            return cookie.substring(name.length + 1);
        }
    }
    // Return null if cookie not found
    return null;
}

const myCookieValue = getCookie('items');
if (myCookieValue) {
    const decodedCookie = decodeURIComponent(myCookieValue)
    console.log('Value of items:', JSON.parse(decodedCookie));
} else {
    console.log('Cookie not found or value is empty.');
}

// const cookie = document.cookie.match(new RegExp('item=([^;]+)'))

// const cookieVal = decodeURIComponent(cookie[1])

// console.log(cookieVal)



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
            <input className='fuckin-input' onInput={(e) => handleOnInput(e.target.value)} style={{ padding: !hasText ? "0" : "3px", transition: "padding 300ms ease-in-out" }} type="text" name="text" id="firstInp" placeholder='I dare you..' />
            <button className='fuckin-button'>weeee!</button>
        </form>
    )
}

if (container) {
    ReactDOM.render(<View />, container);
}