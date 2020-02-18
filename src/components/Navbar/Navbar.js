import React from 'react';
import classes from './Navbar.module.css';

const navbar = () => {
    return (
        <nav className={classes.container}>
            <div className={classes.ul_li}>
                <div>
                    Logo
                </div>
                <div>
                    <div className={classes.Menudiv}>
                        <a class={classes.span} href="/" >Home</a>
                        <a href="/login" class={classes.span}>Login</a>
                        <a href="/register" class={classes.span}>Register</a>
                        <a href="/test" class={classes.span}>Test</a>
                        <a href="/result" class={classes.span}>Result</a>
                    </div>
                </div>
                
            </div>
        </nav>
    )
}

export default navbar;