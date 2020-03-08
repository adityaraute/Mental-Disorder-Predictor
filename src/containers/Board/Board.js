import React, { Component } from 'react';
import Dashboard from '../../components/UserComponents/Dashboard/Dashboard';
import Auxiliary from '../Auxiliary/Auxiliary';
import Tests from '../../components/UserComponents/Tests/Tests';
import Doctor from '../../components/UserComponents/Doctor/Doctor';
import Result from '../../components/UserComponents/Result/Result';
import Autism from '../../components/UserComponents/Autism/Autism';
import Dyslexia from '../../components/UserComponents/Dyslexia/Dyslexia';
import CB from '../../components/UserComponents/CB/CB';
// import classes from './Home.module.css';
import { Route, Switch } from 'react-router-dom';

// import firebase from '../../firebase';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: true,
            user: props.user
        }
    }
    componentDidMount() {
    }
    render() {
        return (
            <Auxiliary>
                <Route path="/user/" exact render={() => <Dashboard user={this.state.user} />} />
                {/* <Route path="/user/tests" exact component={Tests} /> */}
                <Route path="/user/tests" exact render={() => <Tests user={this.state.user} />} />
                <Route path="/user/result" exact render={() => <Result user={this.state.user} />} />
                <Route path="/user/doc" exact render={() => <Doctor user={this.state.user} />} />
                <Route path="/user/autism" exact render={() => <Autism user={this.state.user} />} />
                <Route path="/user/dyslexia" exact render={() => <Dyslexia user={this.state.user} />} />
                <Route path="/user/colour" exact render={() => <CB user={this.state.user} />} />
            </Auxiliary>
        );
    }
}
export default Board;