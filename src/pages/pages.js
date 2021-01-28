import Loadable from 'react-loadable';

const Loading = () => null;

const SignIn = Loadable({
    loader: () => import('./SignIn'),
    loading: Loading,
});
const SignUp = Loadable({
    loader: () => import('./SignUp'),
    loading: Loading,
});
const DashBoard = Loadable({
    loader: () => import('../component/dashboard/Dashboard'),
    loading: Loading,
});
const Table = Loadable({
    loader: () => import('./Tables'),
    loading: Loading,
});
const Login = Loadable({
    loader: () => import('./Login'),
    loading: Loading,
});
const Register = Loadable({
    loader: () => import('./Register'),
    loading: Loading,
});
const Agreement = Loadable({
    loader: () => import('./Agreement'),
    loading: Loading,
});
const TrainSequence = Loadable({
    loader: () => import('./TrainSequence'),
    loading: Loading,
});
const Order = Loadable({
    loader: () => import('../component/dashboard/Orders'),
    loading: Loading,
});

export {
    SignIn, SignUp, DashBoard, Table, Login, Register, Agreement, TrainSequence, Order
}