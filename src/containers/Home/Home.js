import React , {Component}from 'react';
import classes from './Home.module.css';
class Home extends Component{
    render(){
        return(
            <div className={classes.container}>
                <form>
                    <label for="username">Username</label>
                    <input type="text" id="username" placeholder="Username" />
                    <label for="passwd">Password</label>
                    <input type="password" id="passwd" placeholder="Password" />

                </form>
            </div>
        );

        
    }
}
export default Home;