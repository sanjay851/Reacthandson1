import React from 'react';
import './App.css';
import ClassCompo from './components/ClassCompo';
import FunctionCompo from './components/FunctionComp';
import './components/BothFile.css';
class App extends React.Component{
  render(){
    return(
    <>
    <h1 style={{textShadow: '2px 3px rgb(0, 265, 265)',color: 'black', textAlign:'center' ,marginTop:'0px'}}>
      Styling using Functional and Class Component</h1> 
      <br/>
    <ClassCompo/>
    <FunctionCompo/>
    </>
    )
  }
}
export default App;
