import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import SignIn from "./SignIn";
import * as React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
}));

export default function Login() {
    const classes = useStyles();

    return (
        <Grid item xs={10}>
            <Paper className={classes.paper}>
                <SignIn />
            </Paper>
        </Grid>
    )
}