import React, { Component } from 'react';
import axios from 'axios';

class Autism extends Component{
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

        var formData = new FormData();
        formData.append('q1',1);
        formData.append('q2',0);
        formData.append('q3',0);
        formData.append('q4',0);
        formData.append('q5',0);
        formData.append('q6',0);
        formData.append('q7',0);
        formData.append('q8',0);
        formData.append('q9',0);
        formData.append('q10',0);

        axios({
            method: 'post',
            url: 'https://gentle-caverns-95040.herokuapp.com/',
            data: formData,
            headers: {'Content-Type': 'multipart/form-data' }
            })
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });

        // axios.post('https://gentle-caverns-95040.herokuapp.com/',JSON.stringify({
                    
        //             'q2':0,
        //             'q3':1,
        //             'q4':0,
        //             'q5':1,
        //             'q6':0,
        //             'q7':1,
        //             'q8':0,
        //             'q9':1,
        //             'q10':0
        //     	})).then( response => {
        //             console.log(response);
        //         }).catch( error => {
        //             console.log(error);
        //         })

       

    }
    componentDidMount() {
        console.log('Aut');

    }
    render(){
        return(
        <form onSubmit={this.formSub}>
                    <h5>Autism questions</h5>

                    <label htmlFor="one">Q1</label>
                    <input type="text" id="one" placeholder="One" onChange={this.changehandler} value={this.state.one} /><br></br>
                    <label htmlFor="two">Q2</label>
                    <input type="text" id="two" placeholder="Two" onChange={this.changehandler} value={this.state.two} /><br></br>
                    <label htmlFor="three">Q3</label>
                    <input type="text" id="three" placeholder="Three" onChange={this.changehandler} value={this.state.three} /><br></br>
                    <label htmlFor="four">Q4</label>
                    <input type="text" id="four" placeholder="Four" onChange={this.changehandler} value={this.state.four} />
                    <input type="submit" title="submit"></input>
                    
                </form>
        )
    }
    
}
export default Autism;