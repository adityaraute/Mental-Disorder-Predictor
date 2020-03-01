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
import { Route , Switch} from 'react-router-dom';

// import firebase from '../../firebase';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: true
        }
    }
    componentDidMount() {
    }
    render() {
        return (
            <Auxiliary>
                <Route path="/user/" exact render={()=>  <Dashboard />} />
                <Route path="/user/tests" exact component={Tests} />
                <Route path="/user/result" exact component={Result} />
                <Route path="/user/doc" exact component={Doctor} />
                <Route path="/user/autism" exact component={Autism} />
                <Route path="/user/dyslexia" exact component={Dyslexia} />
                <Route path="/user/colour" exact component={CB} />
            </Auxiliary>
        );
    }
}
export default Board;