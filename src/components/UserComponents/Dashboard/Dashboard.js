import React, {Component} from 'react';
import classes from './Dashboard.module.css';
class Dashboard extends Component{
    componentDidMount(){
        console.log('dashboard');
    }
    render(){
        return(
            <div>
                    {/* { this.state.page ?  <Login /> : <Register />}
                    <button onClick={this.change_mode}>Change</button> */}
                    <div className={classes.hero}>
                        "Dashboard"
                    </div>
                   
            </div>
        )
    }
}
export default Dashboard;