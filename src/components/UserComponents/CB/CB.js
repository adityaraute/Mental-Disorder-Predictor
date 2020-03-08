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
        const logo8=require('../../../Assets/plates/ishihara8.svg');
        const logo9=require('../../../Assets/plates/ishihara9.svg');
        const logo10=require('../../../Assets/plates/ishihara10.svg');
        const logo11=require('../../../Assets/plates/ishihara11.svg');
        const logo12=require('../../../Assets/plates/ishihara12.svg');
        const logo13=require('../../../Assets/plates/ishihara13.svg');
        const logo14=require('../../../Assets/plates/ishihara14.svg');
        const logo15=require('../../../Assets/plates/ishihara15.svg');
        const logo16=require('../../../Assets/plates/ishihara16.svg');
        const logo17=require('../../../Assets/plates/ishihara17.svg');
        const logo18=require('../../../Assets/plates/ishihara18.svg');
        const logo19=require('../../../Assets/plates/ishihara19.svg');
        const logo20=require('../../../Assets/plates/ishihara20.svg');
        const logo21=require('../../../Assets/plates/ishihara21.svg');
        const logo22=require('../../../Assets/plates/ishihara22.svg');
        const logo23=require('../../../Assets/plates/ishihara23.svg');
        const logo24=require('../../../Assets/plates/ishihara24.svg');
        const logo25=require('../../../Assets/plates/ishihara25.svg');
        const logo26=require('../../../Assets/plates/ishihara26.svg');
        const logo27=require('../../../Assets/plates/ishihara27.svg');
        const logo28=require('../../../Assets/plates/ishihara28.svg');
        const logo29=require('../../../Assets/plates/ishihara29.svg');
        const logo30=require('../../../Assets/plates/ishihara30.svg');
        const logo31=require('../../../Assets/plates/ishihara31.svg');
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