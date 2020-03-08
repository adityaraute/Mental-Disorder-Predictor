import React, { Component } from 'react';
import axios from 'axios';
import classes from './Autism.module.css';
import firebase from '../../../firebase';


class Autism extends Component {
    constructor(props) {
        super(props);
        this.formSub = this.formSub.bind(this);
        this.state = {
            user: props.user

        };
        this.questions = ["1)Does your child look at you when you call his/her name?", "2)How easy is it for you to get eye contact with your child?",
            "3)Does your child point to indicate that s/he wants something? (e.g. a toy that is out of reach)", "4)Does your child point to share interest with you? (e.g. pointing at an interesting sight)",
            "5)Does your child pretend? (e.g. care for dolls, talk on a toy phone)", "6)Does your child follow where you’re looking?",
            "7)If you or someone else in the family is visibly upset, does your child show signs of wanting to comfort them? (e.g. stroking hair, hugging them)", "8)Would you describe your child’s first words as:",
            " 9)Does your child use simple gestures? (e.g. wave goodbye)", "10)Does your child stare at nothing with no apparent purpose?"]
        this.prediction=""
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
                self.setState({prediction: "Result : "+ response.data.results.prediction    })//= "Result : "+ response.data.results.prediction;                
            })
            .catch(function (response) {           
            });
             const db = firebase.firestore();
                const docRef = db.collection('test').doc(this.state.user).set({
                    // prediction:predict,
                    user:this.state.user,
                    test:'1'
                })
                // console.log(predict);
           
    }

    changeRadio = (e) => {
        if (e.target.value == 'always' || e.target.value == 'usually') { this.setState({ [e.target.name]: 0 }); }
        else { this.setState({ [e.target.name]: 1 }); }
    }

    componentDidMount() {
        console.log(this.state);
    }
    render() {
        return (
            <div className={classes.mainDiv}>
                <form onSubmit={this.formSub}>
                    <h5>Autism questions</h5>
                    <div className={classes.questionZone}>
                        {this.questions.map((value, index) => {
                            return (
                                <div className={classes.ques} key={index} id={index} onChange={this.changeRadio}>
                                    <div>{value}</div>
                                    <div>
                                        <input type="radio" name={index} value="always" />Always
                                        <input type="radio" name={index} value="usually" />Usually
                                        <input type="radio" name={index} value="sometimes" />Sometimes
                                        <input type="radio" name={index} value="rarely" />Rarely
                                        <input type="radio" name={index} value="never" />Never
                                    </div>
                                    <br />
                                </div>)
                        })}
                    </div>
                    <input type="submit" title="submit"></input>
                    <h2>{this.state.prediction}</h2>
                </form>
            </div>
        )
    }
}
export default Autism;