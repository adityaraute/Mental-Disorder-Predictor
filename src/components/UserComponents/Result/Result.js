import React, {Component} from 'react';
import firebase from '../../../firebase';
import classes from './Result.module.css';

class Result extends Component{
    constructor(props){
        super(props)
        this.state={
            user: props.user,
        }
    }
    componentDidMount()
    {
        console.log('Result', this.state.user);
        const db = firebase.firestore();
        let cityRef = db.collection('test').doc(this.state.user);
            let getDoc = cityRef.get()
                .then(doc => {
                    if (!doc.exists) {
                        console.log("no data");    
                    } else {
                        var res=doc.data().array;
                        this.setState({results: doc.data().array});                        
                        res.forEach(element => {
                            // console.log(element);
                            // console.log(element.prediction);
                            // console.log(element.test);
                            if(element.test=='CB')console.log(element.correct);
                        });
                    }
                })
                .catch(err => {
                    console.log('Error getting document', err);
                });
    }
    render(){
        if(this.state.results){
            this.autism=this.state.results.map((el,index)=>
                <div>{el.test} - {el.prediction}</div>
                )
            return(
                <div>
                    Result
                    <div className={classes.card}>
                        {this.autism}
                    </div>
                </div>
            )
        }
        else{
            return(
                <div>Joek</div>
            )
        }
        
    }
}

export default Result;