import React, { Component } from 'react';
import firebase from './firebase';
import { Redirect } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { Button , Avatar, Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


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
                    let string = this.state.username
                    this.setState({ p: <Redirect to={{
                        pathname : '/user/',
                        state: {
                            user: string
                        }
                    }} /> })
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
                {/* <CssBaseline /> */}
                <Paper align="center" elevation={0} style={{minHeight: '20vh', display:'flex', flexDirection: 'column', justifyContent: 'space-evenly', backgroundColor:'white', border: 'none'}} >
                <Avatar src="/broken-image.jpg"  align="center" />

                <Typography component="h1" variant="h5" align="center">
                    {this.state.tagline}
                </Typography>
                </Paper>
                <Paper style={{backgroundColor:'white', border: 'none'}} elevation={0}>
                <form onSubmit={this.formSub} style={{ paddingTop: '3rem' }} >
                    <TextField id="username" label="Username" fullWidth variant="outlined" onChange={this.changehandler} style={{ marginBottom: '1rem' }} />
                    <TextField id="password" label="Password" type="password" fullWidth variant="outlined" onChange={this.changehandler} style={{ marginBottom: '1rem' }} />

                    {/* <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Username" onChange={this.changehandler} /><br></br>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Password" onChange={this.changehandler}/> */}
                    <Button variant="contained" fullWidth color="primary" type="submit">Submit
                    </Button>
                    {this.state.p}
                </form>
                </Paper>

            </Container>
        );
    }
}
export default Login;