import React, { Component } from 'react';
import classes from './Dashboard.module.css';
class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: props.user
        }
    }

    render() {
        return (
            <div>
                {/* { this.state.page ?  <Login /> : <Register />}
                    <button onClick={this.change_mode}>Change</button> */}
                <div className={classes.hero}>
                    "Dashboard"
                <h5>Welcome, {this.state.user}</h5>

                </div>

            </div>
        )
    }
}
export default Dashboard;