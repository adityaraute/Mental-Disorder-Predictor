import React, { Component } from 'react';
import Login from '../../components/VisitorComponents/Login/Login'
import Register from '../../components/VisitorComponents/Register/Register';
import Auxiliary from '../Auxiliary/Auxiliary';
import Info from '../../components/VisitorComponents/Info/Info';
import Landing from '../../components/VisitorComponents/Landing/Landing';
// import classes from './Home.module.css';
import { Route , Switch} from 'react-router-dom';

// import firebase from '../../firebase';

class Home extends Component {

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
                <Route path="/" exact render={()=>  <Landing />} />
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <Route path="/info" exact component={Info} />
            </Auxiliary>
        );
    }
}
export default Home;