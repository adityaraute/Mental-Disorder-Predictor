import React, {Component} from 'react';
import classes from './Landing.module.css';
class Landing extends Component{
    componentDidMount(){
        console.log('landing');
        
    }
    render(){
        return(
            <div>
                    {/* { this.state.page ?  <Login /> : <Register />}
                    <button onClick={this.change_mode}>Change</button> */}
                    <div className={classes.hero}>
                        "Image & Quote"
                    </div>
                    <div className={classes.flexrow}>
                        <div className={classes.infobox}>
                            I want to know more
                        </div>
                        <div className={classes.testbox}>
                            Take the test
                        </div>
                    </div>
            </div>
        )
    }
}
export default Landing;