import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import './index.css';
import App from "./App";
import {BrowserRouter} from "react-router-dom";

moment.locale('zh-cn');

ReactDOM.render(
    <App />
    , document.getElementById('root')
);
