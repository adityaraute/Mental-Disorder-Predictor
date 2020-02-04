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
        console.log(this.state);
    }
    formSub(){

        let docRef = this.db.collection('users').doc(this.state.username);
        docRef.get().then(documentSnapshot => {
            let data = documentSnapshot.data();
            console.log(JSON.parse(JSON.stringify(data)));

            //converting into dict from promise/object
            var dict =JSON.parse(JSON.stringify(data));
                    
                if(dict.password==this.state.password){
                    alert("password is correct");   }
                    else{   alert("password is incorrect");     }

          }).catch(err => {
            alert('Error getting document', err);
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