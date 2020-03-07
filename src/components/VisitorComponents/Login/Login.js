import React, { Component } from 'react';
import firebase from '../../../firebase';
import { Redirect } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '@material-ui/core/Card';



// import { makeStyles } from '@material-ui/core/styles';



class Login extends Component {
    constructor(props) {
        super(props);
        this.formSub = this.formSub.bind(this);
        this.db = firebase.firestore();
        // console.log(this.db);
        this.state = {
            username: '',
            password: '',
            tagline: 'LOGIN',
            p: ''
        }
    }
    componentDidMount() {
        console.log('Login');
    }
    formSub(e) {
        let cityRef = this.db.collection('users').doc(this.state.username);
        let getDoc = cityRef.get()
            .then(doc => {
                if (!doc.exists) {
                    let string = "Wrong ID or Password";
                    // console.log('huh'); 
                    this.setState({ tagline: string })
                } else {
                    console.log('Document data:', doc.data());
                    this.setState({ p: <Redirect to='/user' /> })
                }
            })
            .catch(err => {
                console.log('Error getting document', err);
            });
        e.preventDefault();
    }

    changehandler = (e) => {
        let value = e.target.value;
        var st = {}
        st[e.target.id] = value;
        this.setState(st);
    }

    render() {
        return (
            <Container component="main" maxWidth="xs" style={{ paddingTop: '3rem' }} centered>
                <CssBaseline />
                
                <Typography component="h1" variant="h5">
                    {this.state.tagline}
                </Typography>

                <form onSubmit={this.formSub} style={{ paddingTop: '3rem' }} >
                    <TextField id="username" label="Username" fullWidth variant="outlined" onChange={this.changehandler} style={{ marginBottom: '1rem' }} />
                    <TextField id="password" label="Password" fullWidth variant="outlined" onChange={this.changehandler} style={{ marginBottom: '1rem' }} />

                    {/* <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Username" onChange={this.changehandler} /><br></br>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Password" onChange={this.changehandler}/> */}
                    <Button variant="contained" fullWidth color="primary" type="submit">Submit
                    </Button>
                    {this.state.p}
                </form>
            </Container>
        );
    }
}
export default Login;