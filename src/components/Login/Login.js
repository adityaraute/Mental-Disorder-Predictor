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
            password :'',
            tagline  :'LOGIN'
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
                this.setState({tagline: string});
                } else {
                console.log('Document data:', doc.data());
                let string= "HI, "+ this.state.username;
                this.setState({tagline: string});
                }
            })
            .catch(err => {
                console.log('Error getting document', err);
            });
            e.preventDefault();
    }
//   let cityRef = firebase.firestore().collection('users').doc('sanika');
//             let getDoc = cityRef.get()
//             .then(doc => {
//                 if (!doc.exists) {
//                 console.log('No such document!');
//                 } else {
//                 console.log('Document data:', doc.data());
//                 }
//             })
//             .catch(err => {
//                 console.log('Error getting document', err);
//             });

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
                </form>
        );
    }
}
export default Login;