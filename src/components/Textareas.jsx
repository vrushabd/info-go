import React from 'react'
import Erro from './Erro';
import { useState } from 'react';
import "./Textareas.css"

function Textareas() {
    const [text, setText] = useState("");
    const [text2,setText2] = useState('');
    const [text3,setText3] = useState('');
    const [text4,setText4] = useState('');
    const [text5,setText5] = useState('hidden');
    const [text7,setText7] = useState('Light Mode');
    const [check,setCheck] = useState(true);
  
  
  
  
  async function run3(){
  
    const response = await fetch(`https://iplocate.io/api/lookup/${text.trim(" ")}?apikey=0641c573908a4868dfe75d21f6307096`);
    const data = await response.json();
    console.log(data);
    setText2(data.ip);
    setText3(data.country);
    setText4(data.latitude);
   setText5('visible');
   
   
   
  };
    const run1 = () => {
      if(text.trim()===""){
         setCheck(false);
         setTimeout(()=>{
          setCheck(true);
         },2000)
      }
      else{
        setCheck(true); 
     setText(text.toUpperCase()); }
    };
  
  
    const run2 = () => {
      const capital = [];
        text.split(" ").forEach(element => {
        const new1 =  element.charAt(0).toUpperCase() + element.slice(1);
        capital.push(new1);
     
        }); 
         setText(capital.join(' '))
    };
  
    const handleChange = (event) => {
      setText(event.target.value);
    };
    const clear = ()=>{
       setText('')
    }
  
  return (
    <>
    <div className="container">
      <div className="container mt-4">
    <div className="input-group mb-3">
      <input type="text" className="form-control" value={text} onChange={handleChange} />
    </div>
    <div className="d-flex gap-2 flex-wrap">
      <button className='btn btn-primary' onClick={run1}>Convert UpperCase</button>
      <button className='btn btn-primary' onClick={run2}>Convert To Capatalize</button>
      <button className='btn btn-primary' onClick={run3}>Find The Ip info</button>
      <button className='btn btn-primary' onClick={clear}>Clear Text</button>
    </div>
  </div>
  </div>
  <div className='info'>
    <h2>Text Info</h2>
    <p>Words - {text.split(" ").length}</p>
    <p>Characters - {text.trim().length}</p> 

      <p className='infoip' style={{visibility:text5}}>ip : {text2}</p>
    <p className='infoip'style={{visibility:text5}}>country :{text3}</p>
    <p className='infoip'  style={{visibility:text5}}>latitude:{text4}</p>
<button >
  {text7}
</button>  
</div>

<Erro state={check} />

    </>
  )
}

export default Textareas
