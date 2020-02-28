import React from 'react';
import classes from './Navbar.module.css';
import { Link } from 'react-router-dom';

const navbar = () => {
    return (
        <nav className={classes.container}>
            <div className={classes.ul_li}>
                <div>
                    Logo
                </div>
                <div>
                    <div className={classes.Menudiv}>
                        <Link to="/" exact>Home</Link>
                        <Link to="/login" >Login</Link>
                        <Link to="/register" >Register</Link>
                        <Link to="/test" class={classes.span} >Test</Link>
                        <Link to={{
                            pathname: '/result',
                            hash:'#one',
                            search:'?query-param=true'  
                            // Dunno how, but might prove useful
                        }} class={classes.span} >Result</Link>
                        {/* ---Study withRouter, it passes props over hierarchies.
                            ---pathname: this.props.match.url + '/path' gives relative path instead of absolute
                            ---use NavLink instead of Link for active node styling
                        */}


                    </div>
                </div>
                
            </div>
        </nav>
    )
}

export default navbar;