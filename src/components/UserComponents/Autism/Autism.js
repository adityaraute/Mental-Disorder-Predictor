import React, { Component } from 'react';
import axios from 'axios';
import classes from './Autism.module.css';
import firebase from '../../../firebase';
import {Redirect} from 'react-router-dom';



class Autism extends Component {
    constructor(props) {
        super(props);
        this.formSub = this.formSub.bind(this);
        this.state = {
            user: props.user,
            route: false
        };
        this.questions = ["1) Does your child look at you when you call his/her name?", "2) How easy is it for you to get eye contact with your child?",
            "3) Does your child point to indicate that s/he wants something? (e.g. a toy that is out of reach)", "4) Does your child point to share interest with you? (e.g. pointing at an interesting sight)",
            "5) Does your child pretend? (e.g. care for dolls, talk on a toy phone)", "6) Does your child follow where you’re looking?",
            "7) If you or someone else in the family is visibly upset, does your child show signs of wanting to comfort them? (e.g. stroking hair, hugging them)", "8) Would you describe your child’s first words as:",
            " 9) Does your child use simple gestures? (e.g. wave goodbye)", "10) Does your child stare at nothing with no apparent purpose?"]
        this.prediction = "";
    }
    formSub = (e) => {

        e.preventDefault();
        let predict;
        var formData = new FormData();
        for (let i = 0; i < 9; i++) {
            formData.append('q' + (i + 1), this.state[i]);
        }
        formData.append('q10', Math.abs(this.state[9] - 1));
        var self = this;
        axios({
            method: 'post',
            url: 'https://gentle-caverns-95040.herokuapp.com/',
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data' }
        }).then(function (response) {
            console.log("autism prediction", response.data.results.prediction);
            predict = response.data.results.prediction;
            self.setState({ prediction: predict });
        }).then(function (response) {
            const db = firebase.firestore();
            let cityRef = db.collection('test').doc(self.state.user);
            let getDoc = cityRef.get()
                .then(doc => {
                    if (!doc.exists) {
                        const docRef = db.collection('test').doc(self.state.user).set(
                            {
                                array: [
                                    {
                                        prediction: self.state.prediction,
                                        user: self.state.user,
                                        test: 'Autism'
                                    }
                                ]
                            })
                    } else {
                        var newarr = doc.data().array;
                        newarr.push({
                            prediction: self.state.prediction,
                            user: self.state.user,
                            test: 'Autism'
                        });
                        const docRef = db.collection('test').doc(self.state.user).set(
                            {
                                array: newarr,
                            })
                    }
                    self.setState({route: true});
                    console.log(self.state);
                    
                })
                .catch(err => {
                    console.log('Error getting document', err);
                });
        })
            .catch(function (response) {
            });
        console.log(this.state);
    }
    changeRadio = (e) => {
        if (e.target.value == 'always' || e.target.value == 'usually') { this.setState({ [e.target.name]: 0 }); }
        else { this.setState({ [e.target.name]: 1 }); }
    }
    componentDidMount() {
        console.log(this.state);
    }
    render() {
        if(!this.state.route){
            return (
                <div className={classes.mainDiv}>
                    <form onSubmit={this.formSub} className={classes.form}>
                        <div className={classes.header}>
                        <h5>Autism Test</h5>
                        <div><img src={require("../../../Assets/autismtest.jpg")} className={classes.medicaltest}></img></div>
                        <h6>Kindly Fill Out The Form</h6>
                        <p>>>>></p>
                        <div className={classes.lightsphere}><img src={require("../../../Assets/lightsphere.png")}></img></div>
                        <div className={classes.darksphere}><img src={require("../../../Assets/lightsphere.png")}></img>
                        </div>
                        </div>
                        <div className={classes.questionZone}>
                            {this.questions.map((value, index) => {
                                return (
                                    <div className={classes.ques} key={index} id={index} onChange={this.changeRadio}>
                                        <div className={classes.questions}>{value}</div>
                                        <div className={classes.options}>
                                            <div><input type="radio" name={index} value="always" style={{height:"3rem", width:"1rem", float:"left", marginRight:"1rem"}} />Always</div>
                                            <div><input type="radio" name={index} value="usually" style={{height:"3rem", width:"1rem", float:"left", marginRight:"1rem"}} />Usually</div>
                                            
                                            <div><input type="radio" name={index} value="sometimes"  style={{height:"3rem", width:"1rem", float:"left", marginRight:"1rem"}}/>Sometimes</div>
                                            <div><input type="radio" name={index} value="rarely"  style={{height:"3rem", width:"1rem", float:"left", marginRight:"1rem"}}/>Rarely</div>
                                            <div><input type="radio" name={index} value="never" style={{height:"3rem", width:"1rem", float:"left", marginRight:"1rem"}} />Never</div>
                                        </div>
                                        <br />
                                    </div>)
                            })}
                            
                        <input type="submit" title="submit" ></input>
                        <h2>{this.state.prediction}
                        {this.state.route}
                        </h2>
                        </div>
                        
                    </form>
                </div>
            )
        }else{
            return(
            <div>
            <Redirect to="/user/result" />
            </div>)
        }
        
    }
}
export default Autism;