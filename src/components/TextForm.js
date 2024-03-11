import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("Enter text Here");

    const handleClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const onChangeHandle = (event) => {
        setText(event.target.value);
    }

    return (
        <div>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} id="exampleFormControlTextarea1" onChange={onChangeHandle} rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-1' onClick={handleClick}>Click to Convert to Uppercase</button>
            <button className='btn btn-primary mx-1' onClick={handleLoClick}>Click to Convert to LowerCase</button>
        </div>
    )
}
