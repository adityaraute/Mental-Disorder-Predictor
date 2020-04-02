import React, { Component } from 'react';
import axios from 'axios';
import classes from './Autism.module.css';
import firebase from '../../../firebase';
import { Redirect } from 'react-router-dom';

class Autism extends Component {
    constructor(props) {
        super(props);
        this.formSub = this.formSub.bind(this);
        this.formSub2 = this.formSub2.bind(this);

        this.state = {
            user: props.user,
            route: 0,

        };
        this.questions = ["1) Does your child look at you when you call his/her name?", "2) How easy is it for you to get eye contact with your child?",
            "3) Does your child point to indicate that s/he wants something? (e.g. a toy that is out of reach)", "4) Does your child point to share interest with you? (e.g. pointing at an interesting sight)",
            "5) Does your child pretend? (e.g. care for dolls, talk on a toy phone)", "6) Does your child follow where you’re looking?",
            "7) If you or someone else in the family is visibly upset, does your child show signs of wanting to comfort them? (e.g. stroking hair, hugging them)", "8) How often does the child speak meaningful words?",
            "9) Does your child use simple gestures? (e.g. wave goodbye)", "10) Does your child stare at nothing with no apparent purpose?"]
        this.prediction = "";
    }
    formSub = (e) => {

        e.preventDefault();
        // let predict;
        var formData = new FormData();
        for (let i = 0; i < 9; i++) {
            formData.set('q' + (i + 1), this.state[i]);
        }
        formData.append('q10', Math.abs(this.state[9] - 1));
        console.log(formData);
        
        var self = this;
        axios({
            method: 'post',
            url: 'https://gentle-caverns-95040.herokuapp.com/',
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data' }
        }).then(function (response) {
            // console.log("autism prediction", response.data.results.prediction);
            let predict = response.data.results.prediction;
            self.setState({ pred1: predict });
        }).then(function (response) {
            const db = firebase.firestore();
            if (self.state.pred1 === "No") {
                self.setState({ prediction: "No" })
            }
            else if (self.state.complimentary === 0) {
                self.setState({ prediction: "Possible Yes" })
            }
            else {
                self.setState({ prediction: "Yes" })
            }
            let cityRef = db.collection('test').doc(self.state.user);
            let getDoc = cityRef.get()
                .then(doc => {
                    if (!doc.exists) {
                        const docRef = db.collection('test').doc(self.state.user).set(
                            {
                                array: [
                                    {
                                        predictionone: self.state.pred1,
                                        predictiontwo: self.state.complimentary,
                                        prediction: self.state.prediction,
                                        user: self.state.user,
                                        test: 'Autism'
                                    }
                                ]
                            })
                    } else {
                        var newarr = doc.data().array;
                        newarr.push({
                            predictionone: self.state.pred1,
                            predictiontwo: self.state.complimentary,
                            prediction: self.state.prediction,
                            user: self.state.user,
                            test: 'Autism'
                        });
                        const docRef = db.collection('test').doc(self.state.user).set(
                            {
                                array: newarr,
                            })
                    }
                    self.setState({ route: 2 });
                    // console.log(self.state);

                })
                .catch(err => {
                    console.log('Error getting document', err);
                });
        })
            .catch(function (response) {
            });
        console.log(this.state);
    }
    formSub2 = (e) => {

        e.preventDefault();
        // let predict;
        console.log(this.state);
        
        var formData = new FormData();
        formData.set('q1', this.state.one);
        formData.set('q2', this.state.two);
        formData.set('q3', this.state.three);
        formData.set('q4', this.state.four);
        formData.set('q5', this.state.five);
        formData.set('q6', this.state.six);
        var self = this;
        self.setState({ route: 1 });

        axios({
            method: 'post',
            url: 'https://gentle-caverns-95040.herokuapp.com/test2',
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data' }
        }).then(function (response) {
            console.log("autism prediction", response.data.results.prediction);
            let predict = response.data.results.prediction;
            self.setState({ complimentary: predict });
            self.setState({ route: 1 });

        })

            // .then(function (response) {
            //     const db = firebase.firestore();
            //     let cityRef = db.collection('test').doc(self.state.user);
            //     let getDoc = cityRef.get()
            //         .then(doc => {
            //             if (!doc.exists) {
            //                 const docRef = db.collection('test').doc(self.state.user).set(
            //                     {
            //                         array: [
            //                             {
            //                                 prediction2: self.state.prediction,
            //                                 user: self.state.user,
            //                                 test: 'Autism2'
            //                             }
            //                         ]
            //                     })
            //             } else {
            //                 var newarr = doc.data().array;
            //                 newarr.push({
            //                     prediction2: self.state.prediction,
            //                     user: self.state.user,
            //                     test: 'Autism'
            //                 });
            //                 const docRef = db.collection('test').doc(self.state.user).set(
            //                     {
            //                         array: newarr,
            //                     })
            //             }
            //             self.setcState({ route: 0 });

            //         })
            // .catch(err => {
            //     console.log('Error getting document', err);
            // });
            // })
            .catch(function (response) {
                console.log(response);
            });
        console.log(this.state);
    }
    changeRadio = (e) => {
        if (e.target.value === 'always' || e.target.value === 'usually') { this.setState({ [e.target.name]: 0 }); }
        else { this.setState({ [e.target.name]: 1 }); }
    }
    changeform2 = (e) => {
        this.setState({ [e.target.id]:  parseInt(e.target.value )});
    }
    componentDidMount() {
        // console.log(this.state);
    }
    render() {
        if (this.state.route === 0) {
            return (
                <div className={classes.mainDiv}>
                    <form onSubmit={this.formSub2} className={classes.form}>
                        <div className={classes.header}>
                            <h5>Autism Test</h5>
                            <div><img src={require("../../../Assets/autismtest.jpg")} className={classes.medicaltest} alt="autismtest"></img></div>
                            <h6>Kindly Fill Out The Form</h6>
                            <p>>>>></p>
                            <div className={classes.lightsphere}><img src={require("../../../Assets/lightsphere.png")} alt="lightsphere"></img></div>
                            <div className={classes.darksphere}><img src={require("../../../Assets/lightsphere.png")} alt="darksphere"></img>
                            </div>
                        </div>
                        {/* <div className={classes.questionZone}>
                            {this.questions2.map((value, index) => {
                                return (
                                    <div className={classes.ques} key={index} id={index} >
                                        <div className={classes.questions}>{value}</div>
                                        <div><input type="text" name={index} value="" onChange={this.changeform2} style={{ height: "3rem", width: "5rem", float: "left", marginRight: "1rem" }} required /></div>
                                        <br />
                                    </div>)
                            })} */}
                        <div className={classes.formfirst}>
                            <div>
                                <div>Month of Birth (in number)</div>
                                {/* <input id="one" type="number" value={this.state.txtone} onChange={this.changeform2} required/> */}
                                <select onChange={this.changeform2} id ="one" className="Selection">
                                    <option value= "1">January</option>
                                    <option value= "2">February</option>
                                    <option value= "3">March</option>
                                    <option value= "4">April</option>
                                    <option value= "5">May</option>
                                    <option value= "6">June</option>
                                    <option value= "7">July</option>
                                    <option value= "8">August</option>
                                    <option value= "9">September</option>
                                    <option value= "10">October</option>
                                    <option value= "11">November</option>
                                    <option value= "12">December</option>

                                </select>
                            </div>
                            <div>
                                <div>Mother Age at Birth (in years)</div>
                                <input id="two" type="number" value={this.state.txttwo} onChange={this.changeform2} required/>
                            </div>
                            <div>
                                <div>Father Age at Birth(in years)</div>
                                <input id="three" type="number" value={this.state.txtthree} onChange={this.changeform2} required/>
                            </div>
                            <div>
                                <div>Birth Weight (10 grams)</div>
                                <input id="four" type="number" value={this.state.txtfour} onChange={this.changeform2} required/>
                            </div>
                            <div>
                                <div>Gestational Age</div>
                                <input id="five" type="number" value={this.state.txtfive} onChange={this.changeform2} required/>
                            </div>
                            <div>
                                <div>Number of Births</div>
                                <input id="six" type="number" value={this.state.txtsix} onChange={this.changeform2} required/>
                            </div>
                            <input type="submit" title="submit" className={classes.formfirstButton}></input>
                            {/* <h2>{this.state.prediction}
                                {this.state.route}
                            </h2> */}
                        </div>
                    </form>
                </div>
            )
        } else if (this.state.route === 1) {

            return (
                <div className={classes.mainDiv}>
                    <form onSubmit={this.formSub} className={classes.form}>
                        <div className={classes.header}>
                            <h5>Autism Test</h5>
                            <div><img src={require("../../../Assets/autismtest.jpg")} className={classes.medicaltest} alt="autismtest"></img></div>
                            <h6>Kindly Fill Out The Form</h6>
                            <p>>>>></p>
                            <div className={classes.lightsphere}><img src={require("../../../Assets/lightsphere.png")} alt="lightsphere"></img></div>
                            <div className={classes.darksphere}><img src={require("../../../Assets/lightsphere.png")} alt="darksphere"></img>
                            </div>
                        </div>
                        <div className={classes.questionZone}>

                            {this.questions.map((value, index) => {
                                return (
                                    <div className={classes.ques} key={index} id={index} onChange={this.changeRadio}>
                                        <div className={classes.questions}>{value}</div>
                                        <div className={classes.options}>
                                            <div><input type="radio" name={index} value="always" style={{ height: "3rem", width: "1rem", float: "left", marginRight: "1rem" }} required />Always</div>
                                            <div><input type="radio" name={index} value="usually" style={{ height: "3rem", width: "1rem", float: "left", marginRight: "1rem" }} />Usually</div>
                                            <div><input type="radio" name={index} value="sometimes" style={{ height: "3rem", width: "1rem", float: "left", marginRight: "1rem" }} />Sometimes</div>
                                            <div><input type="radio" name={index} value="rarely" style={{ height: "3rem", width: "1rem", float: "left", marginRight: "1rem" }} />Rarely</div>
                                            <div><input type="radio" name={index} value="never" style={{ height: "3rem", width: "1rem", float: "left", marginRight: "1rem" }} />Never</div>
                                        </div>
                                        <br />
                                    </div>)
                            })}
                            <input type="submit" title="submit" ></input>
                            {/* <h2>{this.state.prediction}
                            {this.state.route}
                        </h2> */}
                        </div>
                    </form>
                </div>
            )
        }
        else {
            return (
                <div>
                    <Redirect to="/user/result" />
                </div>)
        }
    }
}
export default Autism;