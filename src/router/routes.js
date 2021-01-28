import {
    SignIn,
    SignUp,
    DashBoard,
    Table,
    Login,
    Register,
    Agreement,
    TrainSequence,
    Order,
} from '../pages/pages'

const routes = [{
    path: '/login',
    component: Login
}, {
    path: '/register',
    component: Register
}, {
    path: '/table',
    component: Table
}, {
    path: '/agreement',
    component: Agreement
}, {
    path: '/train_sequence',
    component: TrainSequence
}, {
    path: '/order',
    component: Order
},
];

// {
//     path: '/dashboard',
//         component: DashBoard
// },

export default routes