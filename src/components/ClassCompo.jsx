import React from 'react';
import './BothFile.css';
class ClassCompo extends React.Component {
    constructor(){
        super();
        this.state = {
            showClass: false
          }
    }
    render() {
      return (
        <>
        <button className="classbtn" onClick={()=>{this.setState({showClass: !this.state.showClass})}}> 
        To see styling in class component</button>
  
        {this.state.showClass && 
        <div className="border" >
        <h1>This is created using class Component</h1>
        <p>This is done using external CSS</p>
        <p style={{color:'blue',backgroundColor: 'yellow'}}>This is done using inline CSS</p>
         </div>
      }
        </>
      );
    }
  }
  
  export default ClassCompo;