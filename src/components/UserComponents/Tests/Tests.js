import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Tests extends Component {
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
        console.log('Test');

    }
    render() {
        return (
            <div>
                <h2>Tests</h2>
                <div>
                    <Link to="/user/autism">Autism</Link>
                    <Link to="/user/dyslexia">Dyslexia</Link>
                    <Link to="/user/colour">Colour Blindness</Link>
                </div>
            </div>
        );
    }

}
export default Tests;