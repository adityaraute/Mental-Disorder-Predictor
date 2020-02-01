import React , {Component}from 'react';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';
import classes from './Home.module.css';
import firebase from '../../Firebase';

class Home extends Component{

    constructor(props){
        super(props);
        // this.formSub = this.formSub.bind(this);
        // this.db = firebase.firestore();
        // console.log(this.db);
        this.state={
            page: true
        }

    }


    change_mode = () =>{
        let page = !this.state.page;
        console.log(this.state, page);
        
        this.setState({page : page});
    }

    componentDidMount(){

    }
    render(){
        return(
            <div className={classes.container}>
                { this.state.page ?  <Login /> : <Register />}
                <button onClick={this.change_mode}>Change</button>
            </div>
        );
    }
}
export default Home;