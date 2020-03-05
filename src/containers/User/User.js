import React , {Component}from 'react';
import Navbartwo from '../../components/UserComponents/Navbartwo/Navbartwo';
import Board from '../Board/Board';
class User extends Component{
    state={

    }
    render(){
        return(
            <div>
                <Navbartwo />
                <Board />
            </div>
        )
    }
}
export default User;