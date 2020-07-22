import React from 'react'
import { AppBar,  Toolbar } from '@material-ui/core'
import CartComponent from './cart';
import Books from './books'
import Registration from './Registration'
// import SwipeableTemporaryDrawer from './sidebar';
import { withStyles } from '@material-ui/core';
import LockOpenIcon from '@material-ui/icons/LockOpen';
const styles = {
    grow: {
        flexGrow: 1
    }
}
function Header(props) {
    const { classes } = props;
    const [isRegistration, setRegistration] = React.useState(false);
    return (
        <div className={classes.grow}>
            <AppBar position="static" style={{ backgroundColor: 'black' }}>
                <Toolbar>
                    {<LockOpenIcon onClick={() => setRegistration(true)}/>}
                    {<CartComponent />}
                </Toolbar>
            </AppBar>
            {isRegistration? <Registration/>:<Books />}
             
        </div>
    )
}

export default withStyles(styles)(Header)
