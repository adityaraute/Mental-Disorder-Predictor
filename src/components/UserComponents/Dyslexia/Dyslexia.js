import React, { Component } from 'react';

class Dyslexia extends Component{
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
        console.log('Dys');

    }
    render(){
        return(
        <form onSubmit={this.formSub}>
                    <h5>Dyslexia questions</h5>
                    <p>The test is under development</p>
                </form>
        )
    }
    
}
export default Dyslexia;