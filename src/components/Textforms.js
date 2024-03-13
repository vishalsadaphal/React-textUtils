import React, {useState} from 'react'

function Textforms(props) {

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case", "success")
  }


  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case", "success")

  }

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("text cleard ", "success")

  }

const handleonChange = (event) =>{
  setText(event.target.value)
}

const [text, setText] = useState('');
  return (
    <>
    <div className='container' style={{color : props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className='form-control' value={text} onChange={handleonChange} style={{backgroundColor: props.mode === 'dark'?'#042743':'white', color: props.mode === 'dark'?'white':'#042743' }} id='myBox' rows="8"> </textarea>
  </div>

  <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Uppercase</button>

  <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To Lowercase</button>

  <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear All Text</button>
    
</div>


<div className='container my-3' style={{color : props.mode==='dark'?'white':'#042743'}} >
  <h1>Your Text Summary</h1>

  <p>{(text.trim()).length === 0 ? 0 : (text.trim()).split('').length} Words and {text.length} Characters</p>

  <p>{0.008 * text.split(" ").length } Minutes read</p>

  <h2>Preview</h2>
<p>{text.length>0?text:"Enter Something in the textbox to preview it here"}</p>
</div>
    
    </>
  )
}

export default Textforms
