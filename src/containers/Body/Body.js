import React , {Component}from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Home from '../Home/Home';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';
import Result from '../../components/Result/Result';
import TestC from '../../components/TestC/TestC'
import Info from '../../components/Info/Info';
import classes from './Body.module.css';

class Body extends Component{
    constructor(props){
        super(props);
        // this.formSub = this.formSub.bind(this);
        // this.db = firebase.firestore();
        // console.log(this.db);
        this.state={
            page: true
        }

    }


   

    componentDidMount(){

    }
    change_page = (e) =>{
        let pg = e.target.value;
        console.log(pg);
        this.setState({modu : pg});
    }
    render(){
        if(this.state.modu == "Login"){
        return(
            <div>
                <Navbar />
                <select className = {classes.sele} onChange={this.change_page}>
                        <option value="Login">Login</option>
                        <option value="Register">Register</option>
                        <option value="Result">Result</option>
                        <option value="TestC">Test</option>
                        <option value="Info">Info</option>
                    </select>
                <Login />
                <Footer />
            </div>
        );
        }

        else if(this.state.modu == "Register"){
            return(
                <div>
                    <Navbar />
                    <select  className = {classes.sele} onChange={this.change_page}>
                            <option value="Login">Login</option>
                            <option value="Register">Register</option>
                            <option value="Result">Result</option>
                            <option value="TestC">Test</option>
                            <option value="Info">Info</option>
                        </select>
                    <Register />
                    <Footer />
                </div>
            );
            }
            else if(this.state.modu == "Result"){
                return(
                    <div>
                        <Navbar />
                        <select  className = {classes.sele} onChange={this.change_page}>
                                <option value="Login">Login</option>
                                <option value="Register">Register</option>
                                <option value="Result">Result</option>
                                <option value="TestC">Test</option>
                                <option value="Info">Info</option>
                            </select>
                        <Result />
                        <Footer />
                    </div>
                );
                }
               else if(this.state.modu == "TestC"){
                    return(
                        <div>
                            <Navbar />
                            <select  className = {classes.sele} onChange={this.change_page}>
                                    <option value="Login">Login</option>
                                    <option value="Register">Register</option>
                                    <option value="Result">Result</option>
                                    <option value="TestC">Test</option>
                                    <option value="Info">Info</option>
                                </select>
                            <TestC />
                            <Footer />
                        </div>
                    );
                    }
                    else if(this.state.modu == "Info"){
                        return(
                            <div>
                                <Navbar />
                                <select  className = {classes.sele} onChange={this.change_page}>
                                        <option value="Login">Login</option>
                                        <option value="Register">Register</option>
                                        <option value="Result">Result</option>
                                        <option value="TestC">Test</option>
                                        <option value="Info">Info</option>
                                    </select>
                                <Info />
                                <Footer />
                            </div>
                        );
                        }

                   else{
                        return(
                            <div>
                                <Navbar />
                                <select className = {classes.sele} onChange={this.change_page}>
                                        <option value="Login">Login</option>
                                        <option value="Register">Register</option>
                                        <option value="Result">Result</option>
                                        <option value="TestC">Test</option>
                                        <option value="Info">Info</option>
                                    </select>
                                <Home />
                                <Footer />
                            </div>
                        );
                        }
    }
}
export default Body;