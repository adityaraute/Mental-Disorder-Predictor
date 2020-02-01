import React , {Component}from 'react';
import classes from './Home.module.css';
import firebase from '../../firebase';
class Home extends Component{

    constructor(props){
        super(props);
        this.formSub = this.formSub.bind(this);
        this.db = firebase.firestore();
        console.log(this.db);
        

    }

    formSub(){
        console.log("submitted");
        //this is the error ! 
        //#lols     
        let docRef = this.db.collection('users').doc('alovelace');
        console.log(docRef);
        docRef.set({
        first: 'Ada',
        last: 'Lovelace',
        born: 1815
        });
   
    }

    componentDidMount(){

    }
    render(){
        return(
            <div className={classes.container}>
                <form onSubmit={this.formSub}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Username" />
                    <label htmlFor="passwd">Password</label>
                    <input type="password" id="passwd" placeholder="Password" />
                    <input type="submit" title="submit"></input>
                </form>
            </div>
        );
    }
}
export default Home;