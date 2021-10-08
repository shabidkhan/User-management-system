import React from "react";

import LogIn from "./LogIn"
import SignUp from './SignUp'


class Index extends React.Component{
  constructor(props){
    super(props)
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
        return <LogIn/>
      case false:
        return <SignUp/>
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
      <button className='buttons' onClick={e=>this.pressing()} >{this.renderContentinsideButton()}</button><br></br>
      {this.renderContent()}
    </div>
  );}
}

export default Index;
