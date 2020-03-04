import React , {Component}from 'react';
import firebase from '../../firebase';
class Login extends Component{

    constructor(props){
        super(props);
        this.formSub = this.formSub.bind(this);
        this.db = firebase.firestore();
        let cityRef = firebase.firestore().collection('users').doc('sanika');
            let getDoc = cityRef.get()
            .then(doc => {
                if (!doc.exists) {
                console.log('No such document!');
                } else {
                console.log('Document data:', doc.data());
                }
            })
            .catch(err => {
                console.log('Error getting document', err);
            });
        // console.log(this.db);
        this.state={
            username :'',
            password :''
        }
    }
    componentDidMount()
    {
        console.log('Login');
        
    }
    formSub(){
        console.log(this.state);
        console.log("login");
        console.log(this.state.username);
        
        let cityRef = this.db.collection('users').doc('rj8228');
            let getDoc = cityRef.get()
            .then(doc => {
                if (!doc.exists) {
                console.log('No such document!');
                } else {
                console.log('Document data:', doc.data());
                }
            })
            .catch(err => {
                console.log('Error getting document', err);
            });

    }

    changehandler= (e)=>{
        let value= e.target.value;
        var st = {}
        st[e.target.id]=value;        
        this.setState(st);
    }
    render(){
        return(
            <form onSubmit={this.formSub}>
                
                <h5>LOGIN</h5>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Username" onChange={this.changehandler} /><br></br>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Password" onChange={this.changehandler}/>
                    <input type="submit" title="submit"></input>
                </form>
        );
    }
}
export default Login;