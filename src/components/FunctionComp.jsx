import {useState} from 'react';
import './BothFile.css';
function FunctionComp() {
  const [showText, setShowText] = useState(false);  
  return (
    <div>
    <button className='btn2' onClick={()=>setShowText (hidden => !hidden)} >
    To see styling in functional component</button>

   {showText && <Text/> }

  </div> 
  );
}
const Text = () => 
  <div style={{border:'2px solid black',width:'40%',height:'45%', backgroundColor: 'aqua',
  margin: '80px',textAlign: 'center',position: 'absolute', top: '35%', left: '2%' ,borderRadius:' 25px'}}> 

  <h1>This is created using functional Component</h1>
   <p >This is done using external CSS</p>
   <p style={{color:'blue',backgroundColor: 'aqua'}}>This is done using inline CSS</p>
  </div> 

export default FunctionComp;