import React from 'react';
import './App.css';
import Index from "./component/Index"

class App extends React.Component{
  constructor(){
    super()
    this.state={
      pressed:true
    }
  }

  pressing=()=>{
    this.setState({pressed:!this.state.pressed})
  }
  renderContent = () =>{
    switch(this.state.pressed){
      case true:
        return <Index/>
    
    }
  }
  renderContentinsideButton = () =>{
    switch(this.state.pressed){
      case true:
        return "SignUp"
      case false:
        return "LogIn"
    }
  }
  render(){
  return (
  
      <div className="App"  >
      {this.renderContent()}
    </div>
   
    
  );}
}


export default App;
