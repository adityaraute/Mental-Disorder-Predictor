import React , {Component}from 'react';
import Home from '../Home/Home';
import NavbarOne from '../../components/VisitorComponents/Navbarone/Navbarone';
class Visitor extends Component{
    state={
    }
    componentDidMount(){
    }
    render(){
        return(
            <div>
                <NavbarOne />
                <Home />
            </div>
        )}
}

export default Visitor;