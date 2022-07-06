import React,{useState} from 'react';
export default function TextForm(props){
    
    const handleClick=()=>{
// console.log("UpperCase was Clicked",text);
let newText=text.toUpperCase();
setText(newText);
props.showAlert("converted to upper Case","success")

    }
    const handle1Click=()=>{
        // console.log("UpperCase was Clicked",text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("converted to  Lower case","success");
        
            }
            const handle2Click=()=>{
                // console.log("UpperCase was Clicked",text);
                let newText='';
                setText(newText);
                props.showAlert("Clear Text","success")
                
                    }
                    const handle3Click=()=>{
                        let text=document.getElementById("myText");
                        text.select();
                        navigator.clipboard.writeText(text.value);  
                        document.getSelection().removeAllRanges();
                        props.showAlert("Copied","success")

             
                    } 
                    const handle4Click=()=>{
                       let newText=text.split(/[ ]+/);
                       setText(newText.join(" ")); 
                       props.showAlert("removed extra space","success") 

                            }                  

    const handleOnChange=(event)=>{
        console.log("On Change")
        setText(event.target.value);
    }
    const[text,setText]=useState('')
    // text="my text";//wrong syntax to change the state
    // setText("my-text"); //correct way
    return (
        <>
        <div className='container'style={{color:props.mode==='light'?'black':'white'}} >
     <h1 className="my-2">{props.heading}</h1>   
<div className="mb-3">
  <label for="myText" className="form-label"></label>
  <textarea className="form-control" value={text}  onChange={handleOnChange}id ="myText" style={{backgroundColor:props.mode==='light'?'white':'#13466e',color:props.mode==='light'?'black':'white'}}rows="8"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClick}>ConvertToUpperCase</button>
<button disabled={text.length===0} className="btn btn-primary  mx-1 my-1" onClick={handle1Click}>ConvertToLowerCase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handle2Click}>Clear Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handle3Click}>Copy Text</button>
<button disabled={text.length===0} className="btn btn-primary " onClick={handle4Click}>Remove Extra Spaces</button>

    </div>
    <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
);

   
}



