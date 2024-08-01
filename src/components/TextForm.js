import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
       // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Convert to Uppercase", "success");
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked");
         let newText = text.toLowerCase();
         setText(newText)
         props.showAlert("Convert to Lowercase", "success");
     }
    const handleOnChange = (event)=>{
       // console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
  <div className="my-3"> 
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#2c4263':'white',
color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
   </div>
   <div>
    <button  className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
    <button  className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
   </div>
   </div>

   <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>Your Text Summery</h1>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter Something Text To Preview"}</p>
   </div>
   </>
  )
}
