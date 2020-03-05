import React , {Component}from 'react';
import Visitor from '../Visitor/Visitor';
import User from '../User/User';
// import classes from './Body.module.css';
import { Route, Switch } from 'react-router-dom';
class Body extends Component{
    constructor(props){
        super(props);
        // this.formSub = this.formSub.bind(this);
        // this.db = firebase.firestore();
        // console.log(this.db);
        this.state={
            page: true
        }
    }
    componentDidMount(){
    }
    change_page = (e) =>{
        let pg = e.target.value;
        console.log(pg);
        this.setState({modu : pg});
    }
      render(){
            return(
            <Switch>
                <Route path="/user" component={User} />
                <Route path="/"  render={()=>  <Visitor />} />
                {/* Both render and component properties can be used interchangeably */}
            </Switch>)
        }   
}
export default Body;