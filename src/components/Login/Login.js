import React , {Component}from 'react';
import firebase from '../../firebase';
class Login extends Component{

    constructor(props){
        super(props);
        this.formSub = this.formSub.bind(this);
        this.db = firebase.firestore();
        // console.log(this.db);
        this.state={
            username :'',
            password :''
        }
    }
    formSub(){
        console.log("submitted");
        //this is the error ! 
        //#lols     
        let docRef = this.db.collection('users').doc('alovelace');
        // console.log(docRef);
        docRef.set({
        username: this.state.username,
        password: this.state.password,
    }, (e)=>{console.log(e);});       
        console.log(this.state);   
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
                    <input type="text" id="username" placeholder="Username" onChange={this.changehandler} />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Password" onChange={this.changehandler}/>
                    <input type="submit" title="submit"></input>
                </form>
        );
    }
}
export default Login;