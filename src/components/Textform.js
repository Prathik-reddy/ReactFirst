import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{

        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");

    }

    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Cleared text","danger");

    }

    const handleOnChange = (event)=>{
        setText(event.target.value);

    }
    const handleCopyClick = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied","success");

    }
    const handleExtraSpcClick = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert("Removed Extra Space","warning");
    }

    const [text, setText] = useState('');
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>
        <div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} style={{backgroundColor:props.mode==="light"?"white":"#0c0949",color:props.mode==="dark"?"white":"black"}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpcClick}>Remove Extra Spc</button>
        </div>
        <div className="container my-3" style={{color:props.mode==="dark"?"white":"black"}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((elem)=>{return elem.length
            !==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(" ").filter((elem)=>{return elem.length
            !==0}).length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here..."}</p>
        </div>
        </>
    )
}