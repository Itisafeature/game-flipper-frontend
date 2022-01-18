import React from "react";
import {Link} from 'react-router-dom'
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    navlinks: {
        marginLeft: theme.spacing(10),
        display: "flex",
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
    },
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        marginLeft: theme.spacing(20),
        "&:hover": {
            color: "yellow",
            borderBottom: "1px solid white",
        },
    },
}));

const Navbar = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <CssBaseline />
            <Toolbar>
                <Typography variant="h4" className={classes.logo}>
                    <a href="#">Game-Flipper</a>
                </Typography>
                <div className={classes.navlinks}>
                    <Link to="/">Root</Link>
                    <Link to="home">Home</Link>
                </div>
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;