import React , {Component}from 'react';
import firebase from '../../firebase';

class Register extends Component{

    constructor(props){
        super(props);
        this.formSub = this.formSub.bind(this);
        this.state={
            username :'',
            password :'',
            name:'',
            phone:''
        }
        }

        componentDidMount()
        {
            console.log('Register');
            
        }

    formSub = (e) =>{
        
        e.preventDefault();

        console.log("submitted");
        //this is the error ! 
        console.log(this.state);
        //#lols     
        const db = firebase.firestore();
        const docRef = db.collection('users').add({
            username:this.state.username,
            phone:this.state.phone,
            password:this.state.password,
            name:this.state.name
        })
        //.doc(this.state.username);
        

        // let setDoc = docRef.set({
        // name: this.state.name,
        // phone: this.state.phone,
        // username: this.state.username,
        // password: this.state.password,
        // registeredAt: Date.now()
        // }, (e)=>{console.log(e);
        // });
        this.setState({
            name:"",
            username:"",
            phone:"",
            password:""
        })
   
    }

    changehandler= (e)=>{
        // let value= e.target.value;
        // var st = {}
        // st[e.target.id]=value;        
        // this.setState(st);
        this.setState({
            [e.target.id]: e.target.value
          });
    }
    
    render(){
        return(
            <form onSubmit={this.formSub}>
                <h5>Register</h5>

                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" placeholder="Name"  onChange={this.changehandler}  value={this.state.name}/><br></br>
                    <label htmlFor="phone">Phone No</label>
                    <input type="number" id="phone" placeholder="Phone"  onChange={this.changehandler} value={this.state.phone}/><br></br>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Username"  onChange={this.changehandler} value={this.state.username}/><br></br>
                    <label htmlFor="passwd">Password</label>
                    <input type="password" id="password" placeholder="Password"  onChange={this.changehandler} value={this.state.password}/>
                    <input type="submit" title="submit"></input>
                </form>
        );
    }
}
export default Register;



