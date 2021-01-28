import './App.css';
import {Col, DatePicker, Row} from 'antd';
import 'antd/dist/antd.css';
import Dashboard from "./component/dashboard/Dashboard";
import {SignIn} from "./pages/pages";
import {BrowserRouter as Router, Route, Switch, Redirect, Link} from "react-router-dom"
import routes from "./router/routes";

function App() {
  return (
    <div className="App">
      <Row gutter="32px">
        <Col span={24}>
            {/*<SignIn/>*/}
            <Dashboard/>
        </Col>
      </Row>
    </div>
  );
}

export default App;
