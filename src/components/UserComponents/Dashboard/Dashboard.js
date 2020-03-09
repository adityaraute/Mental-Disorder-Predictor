import React, { Component } from 'react';
import classes from './Dashboard.module.css';
import {Container} from '@material-ui/core';
class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: props.user
        }
    }

    render() {
        return (
            <Container style={{marginTop: '2rem'}}>
                {/* { this.state.page ?  <Login /> : <Register />}
                    <button onClick={this.change_mode}>Change</button> */}
                <div className={classes.hero}>
                <h5>Welcome, {this.state.user}</h5>
                    <div>
                    <h6>Our application focusses on providing an estimate of whether or not the candidate is suffering from any of the said disorders.
                        We suggest you that if the result is given as positive, you must seek medical advice at the earliest.
                    </h6>
                    </div>
                </div>

            </Container>
        )
    }
}
export default Dashboard;