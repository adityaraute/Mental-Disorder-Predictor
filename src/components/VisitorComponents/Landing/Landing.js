import React, {Component} from 'react';
import classes from './Landing.module.css';
import {Link } from 'react-router-dom';

class Landing extends Component{
    componentDidMount(){
        console.log('landing'); 
    }
    render(){
        return(
            <div>
                    {/* { this.state.page ?  <Login /> : <Register />}
                    <button onClick={this.change_mode}>Change</button> */}
                    {/* section 1 -------------------------------------------------------------------------------------------------------------------------*/}
                    <div className= {classes.Image}>
                        <div className= {classes.Overlay}></div>
                        <div className={classes.backoverlay}>
                        </div>
                        
                        <div className={classes.text2}>
                       <h1 class="display-1"> Easy Online Prediction for Cognitive Disorders</h1>
                        </div>
                        <div className={classes.text3}>
                        <h3 class="display-4">AUTISM | DYSLEXIA | COLOUR BLINDNESS</h3>
                        </div>
                    </div>
                    {/* section 2 -------------------------------------------------------------------------------------------------------------------------*/}
                    <div className={classes.flexrow}>
                        <div className={classes.infobox}>
                            
                            <div className={classes.backoverlay1}></div>
                            <div className={classes.text1}>
                            Information About The Cause of Symptoms?
                            </div><br></br><br></br><br></br><br></br>
                            <Link to="/info" ><a class={classes.button}><span>Know More</span></a></Link>
                        </div>
                        <div className={classes.testbox}>
                            
                            <div className={classes.backoverlay1}></div>
                            <div className={classes.text1}>
                            You Know The Cause And Want To Be Sure?
                            </div><br></br><br></br><br></br><br></br>
                            <Link to="/login" ><a class={classes.button}><span>Take the Test</span></a></Link>
                        </div>
                        <div className={classes.text}>
                        "Only where children gather is there any real chance of fun."
                        </div>
                    </div>
                    {/* section 3 -------------------------------------------------------------------------------------------------------------------------*/}
                    <div className={classes.flexrow1}>
                        <div className={classes.text4}>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into 
                    electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br></br><br></br></p>
                    </div>
                    </div>
                    {/* section 4 -------------------------------------------------------------------------------------------------------------------------*/}
                    <div>
                        <div className={classes.infobox1}>
                            
                            <div className={classes.backoverlay2}></div>
                            <div className={classes.text1}>
                            AUTISM
                            </div><br></br><br></br><br></br><br></br>
                            <Link to="/info#autism" ><a class={classes.button2}><span>Know More</span></a></Link>
                        </div>
                        <div className={classes.infobox2}>
                            
                            <div className={classes.backoverlay2}></div>
                            <div className={classes.text1}>
                            DYSLEXIA
                            </div><br></br><br></br><br></br><br></br>
                            <Link to="/info#dyslexia" ><a class={classes.button2}><span>Know More</span></a></Link>
                        </div>
                        <div className={classes.infobox3}>
                            
                            <div className={classes.backoverlay2}></div>
                            <div className={classes.text1}>
                            COLOUR BLINDNESS
                            </div><br></br><br></br><br></br><br></br>
                            <Link to="/info#cb" ><a class={classes.button2}><span>Know More</span></a></Link>
                        </div>
                    </div>
            </div>
        )
    }
}
export default Landing;