import React , {Component}from 'react';
import Navbartwo from '../../components/UserComponents/Navbartwo/Navbartwo';
import Board from '../Board/Board';
class User extends Component{
    constructor(props){
        super(props)
        if(props.location.state){
            this.state={
                user: props.location.state.user
            }
        }
        else{
            this.state={
                user: 'wronguser',
            }

        }
        
    }
    render(){        
        return(
            <div>
                <Navbartwo />
                <Board user={this.state.user}/>
            </div>
        )
    }
}
export default User;