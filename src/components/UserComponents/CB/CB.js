import React, { Component } from 'react';
import Auxiliary from '../../../containers/Auxiliary/Auxiliary';

class CB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
            answer:''
        };
        this.counter= 0;
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
    submitHandler=(e)=>{
        
        this.setState({answer: this.counter})
    }
    formSub = (e) => {
        e.preventDefault();
    }
    componentDidMount(){
        const logo0=require('../../../Assets/plates/ishihara0.svg');
        const logo1=require('../../../Assets/plates/ishihara1.svg');
        const logo2=require('../../../Assets/plates/ishihara2.svg');
        const logo3=require('../../../Assets/plates/ishihara3.svg');
        const logo4=require('../../../Assets/plates/ishihara4.svg');
        const logo5=require('../../../Assets/plates/ishihara5.svg');
        const logo6=require('../../../Assets/plates/ishihara6.svg');
        const logo7=require('../../../Assets/plates/ishihara7.svg');


    }
    render() {
        if (this.counter < 10) {
            let k = this.current
            let p =0
            while (this.attempted.includes(k)) {
                p=Math.random() * 32;
                k = Math.floor(p);
            }            
            this.current=k;
            this.attempted.push(k);
            const logo =require('../../../Assets/plates/ishihara0.svg')
            this.counter+=1
            
            return (
                <Auxiliary>
                    <form onSubmit={this.formSub}>
                        <h5>CB questions</h5>
                        <div >
                            <img src={logo} alt={logo}></img>
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