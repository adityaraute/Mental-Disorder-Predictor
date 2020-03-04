import React from 'react';
import classes from './Navbarone.module.css';
import { Link } from 'react-router-dom';

const navbarone = () => {
    return (
        <nav className={classes.container}>
            <div className={classes.ul_li}>
                <div>
                    Logo
                </div>
                <div>
                    <div className={classes.Menudiv}>
                        <Link to="/" >Home</Link>
                        <Link to="/login" >Login</Link>
                        <Link to="/register" >Register</Link>
                        <Link to={{
                            pathname: '/info',
                            hash:'#one',
                            search:'?query-param=true'  
                            // Dunno how, but might prove useful
                        }} >Get Info</Link>
                        {/* }} class={classes.span} >Get Info</Link> */}

                        {/* 
                            ---Study withRouter, it passes props over hierarchies.
                            ---pathname: this.props.match.url + '/path' gives relative path instead of absolute
                            ---use NavLink instead of Link for active node styling
                        */}
                    </div>
                </div>                
            </div>
        </nav>
    )
}

export default navbarone;