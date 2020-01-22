import React from 'react';
import classes from './Navbar.module.css';

const navbar = () => {
    return (
        <nav className={classes.container}>
            <ul className={classes.ul_li}>
                <li>Home</li>
                <li>Test Page</li>
                <li>Contact us</li>
            </ul>
        </nav>
    )
}

export default navbar;