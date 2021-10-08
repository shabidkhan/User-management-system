import React, { Component } from 'react';
// import "../index.css"
import { Button } from 'reactstrap';
import Form from 'react-bootstrap/Form'
import axios from "axios";
class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Name:'',
            Email:"",
            Password:'',
            Number:'',
            message:''
         }
         

    }
    user = (e)=>{
        this.setState({Email:e.target.value})
    }
    pass = (e)=>{
        this.setState({Password:e.target.value})
    }
    mno = (e)=>{
        this.setState({Number:e.target.value})
    }
    name = (e)=>{
        this.setState({Name:e.target.value})
    }
    check = () =>{
        if (this.state.Password.length < 7){
            this.setState({message:'Invalid Password'})
        }else{
            // console.log("ok");
            axios.post("http://localhost:5000/users/signup",this.state).then(e=>this.setState({message:e.data}))            
            
        }
        

    }
    render() { 
        return ( 
            <div>
                {/* <p>Name     : <input value={this.state.Name} placeholder='Name' onChange={e=>this.name(e)} /> </p>
                <p>Email : <input value={this.state.Email.value} placeholder='Email' onChange={e=>this.user(e)} /> </p>
                <p>Password : <input value={this.state.Password} placeholder='Pxyz@123' onChange={e=>this.pass(e)} type='password' /> </p>
                <p>M.Number : <input value={this.state.Number} placeholder='xxxxxxxxxx' onChange={e=>this.mno(e)} /> </p>

                <button onClick={e=>this.check()} >submit</button><br></br>
                {this.state.message} */}
                <Form>
                    <Form.Group className="container bgc py-7 px-5" controlId="formBasicText" onChange={e=>this.name(e)}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Your Name" />
                    </Form.Group>

                    <Form.Group className="container bgc py-7 px-5" controlId="formBasicEmail" onChange={e=>this.user(e)}>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>

                    <Form.Group className="container bgc py-7 px-5" controlId="formBasicPassword" onChange={e=>this.pass(e)}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="container bgc py-7 px-5" controlId="formBasicNumber" onChange={e=>this.mno(e)}>
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="Number" placeholder="Number" />
                    </Form.Group><br/>
                    <Button variant="primary" type="submit" onClick={e=>this.check()}>
                    Submit
                    </Button>
            </Form>
            {this.state.message}
            </div>
         );
    }
}
 
export default SignUp;

