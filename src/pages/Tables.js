import * as React from 'react';
import {useState} from 'react';
import Link from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '.././component/dashboard/Title';
import {Button, Container, MenuItem, TextField} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
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
        value: '北京',
        label: '北京',
    },
    {
        value: '上海',
        label: '上海',
    },
    {
        value: '天津',
        label: '天津',
    },
    {
        value: '重庆',
        label: '重庆',
    },
    {
        value: '长沙',
        label: '长沙',
    },
    {
        value: '长春',
        label: '长春',
    },
    {
        value: '成都',
        label: '成都',
    },
    {
        value: '广州',
        label: '广州',
    },
    {
        value: '贵阳',
        label: '贵阳',
    },
    {
        value: '呼和浩特',
        label: '呼和浩特',
    },
    {
        value: '哈尔滨',
        label: '哈尔滨',
    },
    {
        value: '合肥',
        label: '合肥',
    },
    {
        value: '杭州',
        label: '杭州',
    },
    {
        value: '济南',
        label: '济南',
    },
    {
        value: '兰州',
        label: '兰州',
    },
    {
        value: '南宁',
        label: '南宁',
    },
    {
        value: '南京',
        label: '南京',
    },
    {
        value: '南昌',
        label: '南昌',
    },
    {
        value: '沈阳',
        label: '沈阳',
    },
    {
        value: '石家庄',
        label: '石家庄',
    },
    {
        value: '太原',
        label: '太原',
    },
    {
        value: '乌鲁木齐',
        label: '乌鲁木齐',
    },
    {
        value: '武汉',
        label: '武汉',
    },
    {
        value: '郑州',
        label: '郑州',
    },
    {
        value: '深圳',
        label: '深圳',
    },
    {
        value: '厦门',
        label: '厦门',
    },
]

const ends = [
    {
        value: '北京',
        label: '北京',
    },
    {
        value: '上海',
        label: '上海',
    },
    {
        value: '天津',
        label: '天津',
    },
    {
        value: '重庆',
        label: '重庆',
    },
    {
        value: '长沙',
        label: '长沙',
    },
    {
        value: '长春',
        label: '长春',
    },
    {
        value: '成都',
        label: '成都',
    },
    {
        value: '广州',
        label: '广州',
    },
    {
        value: '贵阳',
        label: '贵阳',
    },
    {
        value: '呼和浩特',
        label: '呼和浩特',
    },
    {
        value: '哈尔滨',
        label: '哈尔滨',
    },
    {
        value: '合肥',
        label: '合肥',
    },
    {
        value: '杭州',
        label: '杭州',
    },
    {
        value: '济南',
        label: '济南',
    },
    {
        value: '兰州',
        label: '兰州',
    },
    {
        value: '南宁',
        label: '南宁',
    },
    {
        value: '南京',
        label: '南京',
    },
    {
        value: '南昌',
        label: '南昌',
    },
    {
        value: '沈阳',
        label: '沈阳',
    },
    {
        value: '石家庄',
        label: '石家庄',
    },
    {
        value: '太原',
        label: '太原',
    },
    {
        value: '乌鲁木齐',
        label: '乌鲁木齐',
    },
    {
        value: '武汉',
        label: '武汉',
    },
    {
        value: '郑州',
        label: '郑州',
    },
    {
        value: '深圳',
        label: '深圳',
    },
    {
        value: '厦门',
        label: '厦门',
    },
]

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

export default function Tables() {
    const classes = useStyles();
    let [rows, setRows] = useState([]);
    const [currency, setCurrency] = React.useState('北京');
    const handleChange = (event) => {
        setCurrency(event.target.value);
    };
    const [selectedDate, setSelectedDate] = React.useState(new Date('2020-12-15'));
    const handleDateChange = (date) => {
        if (date.getYear() >= new Date().getYear() && date.getDate() >= new Date().getDate())
            setSelectedDate(date);
    };
    const [end, setEnd] = useState('北京')
    const handleEndChange = (event) => {
        setEnd(event.target.value);
    }
    const [size, setSize] = React.useState(0);
    const handleSizeChange = () => {
        setSize(size + 1);
        add();
    }
    function add(){
        let tmp = []
        const data = {
            start: currency,
            end: end,
            date: selectedDate.getFullYear() + ":" +
                selectedDate.getMonth() + ":" +
                selectedDate.getDate() + ":" +
                new Date().getHours(),
            size: size,
        }
        axios.post("http://localhost:8080/train/select", data)
            .then(function (response) {
                response.data.data.map((train) => {
                    axios.post("http://localhost:8080/train/chair", {tid: train.tid})
                        .then(function (response1) {
                            if (response1.data.data > 0) {
                                tmp.push(
                                    createData(
                                        train.tid,
                                        train.name,
                                        train.arr[0].name,
                                        train.arr[0].begin === "null" ?
                                            train.arr[0].end : train.arr[0].begin,
                                        train.arr[1].name,
                                        train.name2,
                                        train.arr[2].name,
                                        train.arr[2].end === "null" ?
                                            train.arr[2].begin : train.arr[2].end,
                                    )
                                )
                                // 数组深拷贝，再赋值给原数组，来刷新控件，react似乎是浅监听，内层数据改动不会被监听到的样子
                                setRows(rows.concat(tmp));
                            }
                        })
                })
                rows = []
            })
            .catch(function (error) {
                alert(error)
            })
    }
    function createOrder(row){
        alert(row.id)
        // const row = e.target.row.value
        const data = {
            token: cookie.load("token"),
            status: row.middle_station === "" ? 1 : 5,
            tid: row.id,
            name: row.name,
            start_station: row.start_station,
            start_date: row.start_date,
            middle_station: row.middle_station,
            name2: row.name2,
            end_station: row.end_station,
            end_date: row.end_date,
        }
        axios.post("http://localhost:8080/order/create_order", data)
            .then(function (response) {
                alert("创建订单成功")
            })
            .catch(function (error) {
                alert(error)
            })
    }

    return(
        <React.Fragment>
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                    <Grid item xs={4} md={4} lg={3}>
                        <Paper className={classes.paper}>
                            <TextField
                                id="start"
                                select
                                size='small'
                                value={currency}
                                onChange={handleChange}
                                helperText="选择上车站点"
                                variant="outlined"
                            >
                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Paper>
                    </Grid>
                    <Grid item xs={4} md={4} lg={3}>
                        <Paper className={classes.paper}>
                            <TextField
                                id="end"
                                select
                                variant="outlined"
                                size="small"
                                value={end}
                                onChange={handleEndChange}
                                helperText="选择下车站点"
                            >
                                {ends.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Paper>
                    </Grid>
                    <Grid item xs={4} md={4} lg={3}>
                        <Paper className={classes.paper}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container justify="space-around">
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </Grid>
                            </MuiPickersUtilsProvider>
                        </Paper>
                    </Grid>
                    <Grid item xs={4} md={4} lg={3}>
                        <Paper className={classes.paper}>
                            <Button onClick={add} variant="outlined">
                                查&emsp;询
                            </Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Title>余票查询</Title>
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
                                        <TableCell>订票</TableCell>
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
                                            <Button onClick={() => createOrder(row)}>
                                                订&emsp;票
                                            </Button>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <div className={classes.seeMore}>
                                <Link color="primary" onClick={handleSizeChange}>
                                    See more
                                </Link>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
}