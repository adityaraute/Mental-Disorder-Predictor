import React, {Component} from 'react';
import firebase from '../../../firebase';



class Result extends Component{
    componentDidMount()
    {
        console.log('Result');
        const db = firebase.firestore();
        let cityRef = db.collection('test').doc('Tony');
            let getDoc = cityRef.get()
                .then(doc => {
                    if (!doc.exists) {
                        console.log("no data");    
                    } else {
                        var    res=doc.data().array;
                        console.log(doc.data().array);
                        
                        res.forEach(element => {

                            console.log(element);

                            console.log(element.prediction);
                            console.log(element.test);
                            if(element.test=='CB')console.log(element.correct);

                        });
                    }
                })
                .catch(err => {
                    console.log('Error getting document', err);
                });
        
    }
    render(){
        return(
            <div>
                
                Result
            </div>
        )
    }
}

export default Result;