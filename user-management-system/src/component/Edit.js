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
            name:'',
            mobile:'',
            message:'',
         }
    }
    
    name = (e) =>{
        this.setState({name:e.target.value})
    }
    num = (e)=>{
        this.setState({mobile:e.target.value})
    }
    check = () =>{
        axios.put("http://localhost:5000/users/editUser",this.state).then(e=>this.setState({message:e.data}))
        
    }
    logincheck=()=>{
        
        
        return  <div><br/>
        <p>Username : <input value={this.state.nmae} placeholder='Name' onChange={e=>this.name(e)} type="text" /> </p>
        <p>Password : <input value={this.state.mobile} placeholder='Number' onChange={e=>this.num(e)} type='Number' /><br/></p>


        <button style={{backgroundColor:'#3B3B98',color:'#fff'}} onClick={e=>this.check()} >submit</button><br></br>
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

