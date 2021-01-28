import Paper from "@material-ui/core/Paper";
import * as React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import SignUp from "./SignUp";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
}));

export default function Register() {
    const classes = useStyles();

    return (
        <Grid item xs={10}>
            <Paper className={classes.paper}>
                <SignUp />
            </Paper>
        </Grid>
    )
}