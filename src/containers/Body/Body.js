import React , {Component}from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Home from '../Home/Home';

class Body extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <Home />
                <Footer />
            </div>
        );

        
    }
}
export default Body;