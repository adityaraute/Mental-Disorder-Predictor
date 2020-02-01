import React , {Component}from 'react';
import firebase from '../../Firebase';

class Register extends Component{

    constructor(props){
        super(props);
        this.formSub = this.formSub.bind(this);
        this.db = firebase.firestore();
        this.state={
            username :'',
            password :'',
            name:'',
            phone:''
        }
        }

    

    formSub = () =>{
        console.log("submitted");
        //this is the error ! 
        //#lols     
        let docRef = this.db.collection('users').doc('register');
        console.log(docRef);
        docRef.set({
        name: this.state.name,
        phone: this.state.phone,
        username: this.state.username,
        password: this.state.password,
        born: 1815
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
                <h5>Register</h5>

                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" placeholder="Name"  onChange={this.changehandler}/>
                    <label htmlFor="phone">Phone No</label>
                    <input type="number" id="phone" placeholder="Phone"  onChange={this.changehandler}/>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Username"  onChange={this.changehandler}/>
                    <label htmlFor="passwd">Password</label>
                    <input type="password" id="passwd" placeholder="Password"  onChange={this.changehandler} />
                    <input type="submit" title="submit"></input>
                </form>
        );
    }
}
export default Register;



