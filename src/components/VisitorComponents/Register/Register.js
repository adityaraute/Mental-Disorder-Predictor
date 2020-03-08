import React, { Component } from 'react';
import firebase from '../../../Firebase';
import classes from './Register.module.css';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Redirect } from 'react-router-dom';



class Register extends Component {

    constructor(props) {
        super(props);
        this.formSub = this.formSub.bind(this);
        this.state = {
            username: '',
            password: '',
            name: '',
            phone: '',p:''
        }
    }

    componentDidMount() {
        console.log('Register');

    }

    formSub = (e) => {

        e.preventDefault();

        console.log("submitted");
        //this is the error ! 
        console.log(this.state);
        //#lols     
        const db = firebase.firestore();
        const docRef = db.collection('users').doc(this.state.username).set({
            username: this.state.username,
            phone: this.state.phone,
            password: this.state.password,
            name: this.state.name
        }).then(
            ()=>{this.setState({ p: <Redirect to='/login' /> })
        })
        this.setState({
            name: "",
            username: "",
            phone: "",
            password: ""
        })

    }

    changehandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    render() {
        return (
            <div className={classes.RegDiv}>
                <Typography component="h1" variant="h5" align="center">Register</Typography>
                <form onSubmit={this.formSub} className={classes.FormDiv}>
                    <TextField id="name" label="Full Name" onChange={this.changehandler} value={this.state.name} fullWidth variant="outlined" style={{ marginBottom: '1rem' }} />
                    <TextField id="phone" label="Phone No." type="number" onChange={this.changehandler} value={this.state.phone} fullWidth variant="outlined" style={{ marginBottom: '1rem' }} />
                    <TextField id="username" label="Username" onChange={this.changehandler} value={this.state.username} fullWidth variant="outlined" style={{ marginBottom: '1rem' }} />
                    <TextField id="password" label="Password" type="password" onChange={this.changehandler} value={this.state.password} fullWidth variant="outlined" style={{ marginBottom: '1rem' }} />
                    <Button variant="contained" fullWidth color="primary" type="submit">Submit
                    </Button>
                    {this.state.p}
                    {/* <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" placeholder="Name"  onChange={this.changehandler}  value={this.state.name}/><br></br>
                    <label htmlFor="phone">Phone No</label>
                    <input type="number" id="phone" placeholder="Phone"  onChange={this.changehandler} value={this.state.phone}/><br></br>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Username"  onChange={this.changehandler} value={this.state.username}/><br></br>
                    <label htmlFor="passwd">Password</label>
                    <input type="password" id="password" placeholder="Password"  onChange={this.changehandler} value={this.state.password}/>
                    <input type="submit" title="submit"></input> */}
                </form>
            </div>
        );
    }
}
export default Register;



