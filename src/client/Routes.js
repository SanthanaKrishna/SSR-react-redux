import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UsersListPage, { loadData } from './pages/UserListPage';

/**
 * this formAt from jsx react router  
 */
// export default () => {
//     return (
//         <div>
//             <Route exact path="/" component={Home} />
//             <Route path="/hi" component={() => 'Hi'} />
//             <Route path="/users" component={UserList} />
//         </div>
//     )
// }

/**
 * this fromat is from react router config
 */
export default [
    {
        path: '/',
        component: HomePage,
        exact: true
    },
    {
        loadData,
        path: '/users',
        component: UsersListPage
    }
]