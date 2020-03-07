import React, { Component } from 'react';
import Auxiliary from '../../../containers/Auxiliary/Auxiliary';
import { black } from 'material-ui/styles/colors';

class CB extends Component{
    constructor(props) {
        super(props);
        this.state = {
            testid: 0,
            one: '',
            two: '',
            three: '',
            four: ''
        };
    }
    changehandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    formSub = (e) => {
        e.preventDefault();
        console.log(this.state);

    }
    componentDidMount() {
        console.log('CB');

    }
    render(){
        return(
            <Auxiliary>
            <form onSubmit={this.formSub}>
                        <h5>CB questions</h5>

                        <label htmlFor="one">Q1</label>
                        <input type="text" id="one" placeholder="One" onChange={this.changehandler} value={this.state.one} /><br></br>
                        <label htmlFor="two">Q2</label>
                        <input type="text" id="two" placeholder="Two" onChange={this.changehandler} value={this.state.two} /><br></br>
                        <label htmlFor="three">Q3</label>
                        <input type="text" id="three" placeh    older="Three" onChange={this.changehandler} value={this.state.three} /><br></br>
                        <label htmlFor="four">Q4</label>
                        <input type="text" id="four" placeholder="Four" onChange={this.changehandler} value={this.state.four} />
                        <input type="submit" title="submit"></input>
                    </form>
            <div style={{backgroundColor:"#000"}}>
                <img src={ require("../../../Assets/plates/ishihara.svg")} alt="rect"></img>
            </div>
        </Auxiliary>
        )
    }
    
}
export default CB;