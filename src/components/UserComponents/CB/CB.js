import React, { Component } from 'react';
import Auxiliary from '../../../containers/Auxiliary/Auxiliary';
import classes from './CB.module.css';
import { Container } from '@material-ui/core';
import firebase from '../../../firebase';

class CB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
            answer: ''
        };
        this.counter = 0;
        this.imgpath = "../../../Assets/plates/ishihara";
        this.attempted = [];
        this.current = 0;
        this.correct = 0;
    }
    // 0-7 circle, 8-15 diamond, 16-24 rectangle, 25-31 triangle
    changehandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    submitHandler = (e) => {
        var ans = e.target.id;
        if (ans == 'circ' && (this.current >= 0 && this.current <= 8)) {
            this.correct += 1
        }
        else if (ans == 'diam' && (this.current >= 8 && this.current <= 15)) {
            this.correct += 1
        }
        else if (ans == 'rect' && (this.current >= 16 && this.current <= 24)) {
            this.correct += 1
        }
        else if (ans == 'tria' && (this.current >= 25 && this.current <= 31)) {
            this.correct += 1
        }
        console.log(this.correct);
        this.setState({ answer: this.counter })
        if (this.counter > 13) {
            if(this.correct>12){
                this.setState({prediction: 'No'})
            }
            else{
                this.setState({prediction: 'Yes'})
            }
            const self = this;
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
                                        correct : this.correct,
                                        user: self.state.user,
                                        test: 'CB'
                                    }
                                ]
                            })
                    } else {
                        var newarr = doc.data().array;
                        newarr.push({
                            prediction: self.state.prediction,
                            correct : this.correct,
                            user: self.state.user,
                            test: 'CB'
                        });
                        const docRef = db.collection('test').doc(self.state.user).set(
                            {
                                array: newarr,
                            })
                    }
                })
                .catch(err => {
                    console.log('Error getting document', err);
                });
        }
    }
    formSub = (e) => {
        e.preventDefault();
    }
    componentDidMount() {
    }
    render() {
        if (this.counter < 14) {
            let k = this.current
            let p = 0
            while (this.attempted.includes(k)) {
                p = Math.random() * 32;
                k = Math.floor(p);
            }
            this.current = k;
            this.attempted.push(k);
            this.counter += 1
            let image;
            switch (k) {
                case 0: image = require('../../../Assets/plates/ishihara0.svg'); break;
                case 1: image = require('../../../Assets/plates/ishihara1.svg'); break;
                case 2: image = require('../../../Assets/plates/ishihara2.svg'); break;
                case 3: image = require('../../../Assets/plates/ishihara3.svg'); break;
                case 4: image = require('../../../Assets/plates/ishihara4.svg'); break;
                case 5: image = require('../../../Assets/plates/ishihara5.svg'); break;
                case 6: image = require('../../../Assets/plates/ishihara6.svg'); break;
                case 7: image = require('../../../Assets/plates/ishihara7.svg'); break;
                case 8: image = require('../../../Assets/plates/ishihara8.svg'); break;
                case 9: image = require('../../../Assets/plates/ishihara9.svg'); break;
                case 10: image = require('../../../Assets/plates/ishihara10.svg'); break;
                case 11: image = require('../../../Assets/plates/ishihara11.svg'); break;
                case 12: image = require('../../../Assets/plates/ishihara12.svg'); break;
                case 13: image = require('../../../Assets/plates/ishihara13.svg'); break;
                case 14: image = require('../../../Assets/plates/ishihara14.svg'); break;
                case 15: image = require('../../../Assets/plates/ishihara15.svg'); break;
                case 16: image = require('../../../Assets/plates/ishihara16.svg'); break;
                case 17: image = require('../../../Assets/plates/ishihara17.svg'); break;
                case 18: image = require('../../../Assets/plates/ishihara18.svg'); break;
                case 19: image = require('../../../Assets/plates/ishihara19.svg'); break;
                case 20: image = require('../../../Assets/plates/ishihara20.svg'); break;
                case 21: image = require('../../../Assets/plates/ishihara21.svg'); break;
                case 22: image = require('../../../Assets/plates/ishihara22.svg'); break;
                case 23: image = require('../../../Assets/plates/ishihara23.svg'); break;
                case 24: image = require('../../../Assets/plates/ishihara24.svg'); break;
                case 25: image = require('../../../Assets/plates/ishihara25.svg'); break;
                case 26: image = require('../../../Assets/plates/ishihara26.svg'); break;
                case 27: image = require('../../../Assets/plates/ishihara27.svg'); break;
                case 28: image = require('../../../Assets/plates/ishihara28.svg'); break;
                case 29: image = require('../../../Assets/plates/ishihara29.svg'); break;
                case 30: image = require('../../../Assets/plates/ishihara30.svg'); break;
                default: image = require('../../../Assets/plates/ishihara31.svg'); break;
            }
            // console.log(k, image);
            return (
                <Container>
                    <form onSubmit={this.formSub}>
                        <h5>CB questions</h5>
                        <div>
                            <img src={image} alt={image} className={classes.quesImg}></img>
                            <button variant="contained" id="rect" color="primary" onClick={this.submitHandler}>Rectangle</button>
                            <button variant="contained" id="circ" color="primary" onClick={this.submitHandler}>Circle</button>
                            <button variant="contained" id="tria" color="primary" onClick={this.submitHandler}>Triangle</button>
                            <button variant="contained" id="diam" color="primary" onClick={this.submitHandler}>Diamond</button>
                            <button variant="contained" id="nope" color="primary" onClick={this.submitHandler}>Cannot Understand</button>
                        </div>
                    </form>

                    {/* <div style={{backgroundColor:"#000"}}> */}
                    {/* <img src={ require("../../../Assets/plates/ishihara.svg")} alt="rect"></img> */}
                    {/* </div> */}
                </Container>
            )
        }
        else {
            return (
                <Container>
                    <h6>Test done</h6>
                    <h4>{this.correct}</h4>
                </Container>
            )
        }

    }


}
export default CB;