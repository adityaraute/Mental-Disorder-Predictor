import React, { Component } from 'react';
import Auxiliary from '../../../containers/Auxiliary/Auxiliary';
import classes from './CB.module.css';

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
    }
    // 0-7 circle, 8-15 diamond, 16-24 rectangle, 25-31 triangle
    changehandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    submitHandler = (e) => {
        this.setState({ answer: this.counter })
    }
    formSub = (e) => {
        e.preventDefault();
    }
    componentDidMount() {

    }
    render() {
        if (this.counter < 10) {
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
                case 0: image = require('../../../Assets/plates/ishihara0.svg');break;
                case 1: image = require('../../../Assets/plates/ishihara1.svg');break;
                case 2: image = require('../../../Assets/plates/ishihara2.svg');break;
                case 3: image = require('../../../Assets/plates/ishihara3.svg');break;
                case 4: image = require('../../../Assets/plates/ishihara4.svg');break;
                case 5: image = require('../../../Assets/plates/ishihara5.svg');break;
                case 6: image = require('../../../Assets/plates/ishihara6.svg');break;
                case 7: image = require('../../../Assets/plates/ishihara7.svg');break;
                case 8: image = require('../../../Assets/plates/ishihara8.svg');break;
                case 9: image = require('../../../Assets/plates/ishihara9.svg');break;
                case 10: image = require('../../../Assets/plates/ishihara10.svg');break;
                case 11: image = require('../../../Assets/plates/ishihara11.svg');break;
                case 12: image = require('../../../Assets/plates/ishihara12.svg');break;
                case 13: image = require('../../../Assets/plates/ishihara13.svg');break;
                case 14: image = require('../../../Assets/plates/ishihara14.svg');break;
                case 15: image = require('../../../Assets/plates/ishihara15.svg');break;
                case 16: image = require('../../../Assets/plates/ishihara16.svg');break;
                case 17: image = require('../../../Assets/plates/ishihara17.svg');break;
                case 18: image = require('../../../Assets/plates/ishihara18.svg');break;
                case 19: image = require('../../../Assets/plates/ishihara19.svg');break;
                case 20: image = require('../../../Assets/plates/ishihara20.svg');break;
                case 21: image = require('../../../Assets/plates/ishihara21.svg');break;
                case 22: image = require('../../../Assets/plates/ishihara22.svg');break;
                case 23: image = require('../../../Assets/plates/ishihara23.svg');break;
                case 24: image = require('../../../Assets/plates/ishihara24.svg');break;
                case 25: image = require('../../../Assets/plates/ishihara25.svg');break;
                case 26: image = require('../../../Assets/plates/ishihara26.svg');break;
                case 27: image = require('../../../Assets/plates/ishihara27.svg');break;
                case 28: image = require('../../../Assets/plates/ishihara28.svg');break;
                case 29: image = require('../../../Assets/plates/ishihara29.svg');break;
                case 30: image = require('../../../Assets/plates/ishihara30.svg');break;
                default: image = require('../../../Assets/plates/ishihara31.svg');break;
            }
            console.log(k, image);
            
            return (
                <Auxiliary>
                    <form onSubmit={this.formSub}>
                        <h5>CB questions</h5>
                        <div>

                            <img src={image} alt={image} className={classes.quesImg}></img>
                        </div>
                        <button onClick={this.submitHandler}>Next!</button>
                    </form>

                    {/* <div style={{backgroundColor:"#000"}}> */}
                    {/* <img src={ require("../../../Assets/plates/ishihara.svg")} alt="rect"></img> */}
                    {/* </div> */}
                </Auxiliary>
            )
        }
        else {
            return (
                <Auxiliary>
                    <h6>Test done</h6>
                </Auxiliary>
            )
        }

    }


}
export default CB;