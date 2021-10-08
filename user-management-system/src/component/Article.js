import React, { Component } from 'react';
import axios from "axios";
import Edit from "./Edit"

class Article extends Component {
    constructor(props) {
        super(props);
    this.state = { 
        message:''
     }
    }
    delete = ()=>{
        axios.delete("http://localhost:5000/users/delete",this.state).then(e=>this.setState({message:e.data}))            
             
      }
    edit = ()=>{
            this.setState({message:"edit"})
    }
    render() { 

        if (this.state.message==="edit"){
            return<Edit/>
        }
        return ( 
            <div > 
                <div>
                    <button style={{backgroundColor:'blue',color:'white'}} onClick={e=>this.delete()} >Delete Acount</button>
<>  </>
                    <button style={{backgroundColor:'blue',color:'white'}} onClick={e=>this.edit()} >Edit Acount</button>
           
                </div>
                <br/>
                 <div>   
                 <button style={{backgroundColor:'red',color:'white'}} onClick={e=>this.props.LogOut()} >LogOut</button>

                 </div>
                {this.state.message}
            </div>
         );
    }
}
 
export default Article;