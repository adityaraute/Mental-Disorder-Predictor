import React , {Component}from 'react';
import firebase from '../../../firebase';
import {Redirect} from 'react-router-dom';
class Login extends Component{
    constructor(props){
        super(props);
        this.formSub = this.formSub.bind(this);
        this.db = firebase.firestore();
        // console.log(this.db);
        this.state={
            username :'',
            password :'',
            tagline  :'LOGIN',
            p : ''
        }
    }
    componentDidMount()
    {
        console.log('Login');
    }
    formSub(e){
        let cityRef = this.db.collection('users').doc(this.state.username);
        let getDoc = cityRef.get()
            .then(doc => {
                if (!doc.exists) {
                let string= "Wrong ID or Password";  
                console.log('huh'); 
                this.setState({tagline:string})
            } else {
                console.log('Document data:', doc.data());
                this.setState({p:<Redirect to='/user' />})
                }
            })
            .catch(err => {
                console.log('Error getting document', err);
            });
            e.preventDefault();
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
                <h5>{this.state.tagline}</h5>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Username" onChange={this.changehandler} /><br></br>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Password" onChange={this.changehandler}/>
                    <input type="submit" title="submit"></input>
                    {this.state.p}
                </form>
        );
    }
}
export default Login;