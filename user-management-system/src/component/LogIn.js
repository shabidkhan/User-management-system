import axios from 'axios';
import React ,{Component} from 'react'
import Article from './Article'
// import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'reactstrap';
// import Form from 'react-bootstrap/Form'



class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Email:'',
            Password:'',
            message:'',
         }
    }
    LogOut=()=>{
        this.setState({message:'',Username:'',Password:''})
    }
    user = (e) =>{
        this.setState({Email:e.target.value})
    }
    pass = (e)=>{
        this.setState({Password:e.target.value})
    }
    check = () =>{
        axios.post("http://localhost:5000/users/login",this.state).then(e=>this.setState({message:e.data.message,token:e.data.token}))
        
    }
    logincheck=()=>{
        
        if (this.state.message==="LogedIn"){
            
            return <Article LogOut={this.LogOut} />
        }
        return  <div><br/>
        <p>Username : <input value={this.state.Email} placeholder='Email' onChange={e=>this.user(e)} type="email" /> </p>
        <p>Password : <input value={this.state.Password} placeholder='Password' onChange={e=>this.pass(e)} type='password' /><br/></p>


        <button style={{backgroundColor:'#3B3B98',color:'#fff'}} onClick={e=>this.check()} >LogIn</button><br></br>
        {this.state.message}
         
    </div>

    }
    
    render() { 
        return ( 
           <div>
                {this.logincheck()}
           </div>
           
         );
    }
}
 
export default LogIn;

