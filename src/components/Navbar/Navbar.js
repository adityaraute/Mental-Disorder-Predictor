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
                        <span>Menu 1</span>
                        <span>Menu 2</span>
                        <span>Menu 3</span>

                    </div>
                </div>
                
            </div>
        </nav>
    )
}

export default navbar;