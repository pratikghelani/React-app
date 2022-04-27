import React, { useState } from 'react';

export default function TextForm(props) {
    const hendleclick = (e) => {
        e.preventDefault();
       let  newText = text.toUpperCase();
       setText(newText);
    }

    const hendleclickLowercase = (e) => {
        e.preventDefault();
       let  newText = text.toLowerCase();
       setText(newText);
    }

    const hendlechange = (e) =>{
        setText(e.target.value);
    }

    const clear = (e) =>{
        e.preventDefault();
        let  newText = "";
       setText(newText);
    }


    const [text, setText] = useState('Enter text here');

  return (
    <div>
        <div className="container">
        <form>
            <div className="mt-5 mb-2">
                <h1 className='text-center'>{props.heading}</h1>
                <textarea type="" value={text} className="form-control mt-3" onChange={(e) => hendlechange(e)} rows="12" id="mybox" />
            </div>
                <button type="submit"  className="btn btn-primary" style={{marginLeft:"5%"}} onClick={(e) => hendleclick(e)} >Convert to Uppercase</button>
                <button type="submit"  className="btn btn-primary" style={{marginLeft:"5%"}} onClick={(e) => hendleclickLowercase(e)} >Convert to Lowercase</button>
                <button type="submit"  className="btn btn-danger" style={{marginLeft:"5%"}} onClick={(e) => clear(e)} >Clear</button>
        </form>
        </div>
    </div>
  )
}
