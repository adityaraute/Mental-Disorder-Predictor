import React from 'react';
import classes from './Navbartwo.module.css';
import { Link } from 'react-router-dom';

const navbartwo = () => {
    return (
        <nav className={classes.container}>
            <div className={classes.ul_li}>
                <div>
                    Logo
                </div>
                <div>
                    <div className={classes.Menudiv}>
                        <Link to="/user" exact>Dashboard</Link>
                        <Link to="/user/tests" >Tests</Link>
                        <Link to={{
                            pathname: '/user/result',
                            hash:'#one',
                            search:'?query-param=true'  
                            // Dunno how, but might prove useful
                        }} class={classes.span} >Result</Link>
                        <Link to="/user/doc" >Doctor</Link>
                        <Link to="/">Logout</Link>

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

export default navbartwo;