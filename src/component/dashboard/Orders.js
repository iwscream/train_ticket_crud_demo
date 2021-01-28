import * as React from 'react';
import {useState} from 'react';
import Link from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import {Button, Container, MenuItem, TextField} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import axios from "axios";
import cookie from "react-cookies";

function createData(id, name, start_station, start_date, middle_station, name2, end_station, end_date) {
    return { id, name, start_station, start_date, middle_station, name2, end_station, end_date };
}

function preventDefault(event) {
    event.preventDefault();
}

const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));

export default function Orders() {
    const classes = useStyles();
    let [rows, setRows] = useState([]);
    const [currency, setCurrency] = React.useState('EUR');
    const handleChange = (event) => {
        setCurrency(event.target.value);
    };
    const [selectedDate, setSelectedDate] = React.useState(new Date('2020-12-15'));
    const handleDateChange = (date) => {
        if (date.getYear() >= new Date().getYear() && date.getDate() >= new Date().getDate())
            setSelectedDate(date);
    };
    const [end, setEnd] = React.useState('北京')
    const handleEndChange = (event) => {
        setEnd(event.target.value);
    }
    const [size, setSize] = React.useState(0);
    const handleSizeChange = () => {
        setSize(size + 1);
        add();
    }
    function add(){
        const tmp = []
        axios.post("http://localhost:8080/order/select_ticket", {token: cookie.load("token")})
            .then(function (response) {
                response.data.data.map((train) => {
                    const sch = JSON.parse(train.content)
                    tmp.push(
                        createData(
                            train.sal_id,
                            sch.name,
                            sch.start_station,
                            sch.start_date,
                            sch.middle_station,
                            sch.name2,
                            sch.end_station,
                            sch.end_date,
                        )
                    )
                })
                rows = []
                // 数组深拷贝，再赋值给原数组，来刷新控件，react似乎是浅监听，内层数据改动不会被监听到的样子
                setRows(rows.concat(tmp));
                // alert(tmp)
            })
            .catch(function (error) {
                alert(error)
            })
    }

    return (
        <React.Fragment>
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Title>订单查询</Title>
                            <Table size="medium">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>列车</TableCell>
                                        <TableCell>上车站点</TableCell>
                                        <TableCell>发车时间</TableCell>
                                        <TableCell>换乘站</TableCell>
                                        <TableCell>换乘列车</TableCell>
                                        <TableCell>下车站点</TableCell>
                                        <TableCell>到达时间</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={row.id}>
                                            <TableCell>{row.name}</TableCell>
                                            <TableCell>{row.start_station}</TableCell>
                                            <TableCell>{row.start_date}</TableCell>
                                            <TableCell>{row.middle_station}</TableCell>
                                            <TableCell>{row.name2}</TableCell>
                                            <TableCell>{row.end_station}</TableCell>
                                            <TableCell>{row.end_date}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <div className={classes.seeMore}>
                                <Link color="primary" onClick={add}>
                                    See more orders
                                </Link>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
}
