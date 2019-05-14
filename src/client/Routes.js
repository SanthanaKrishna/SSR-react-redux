import React from 'react';
import { Route } from 'react-router-dom';
import Home from './component/Home';
import UsersList from './component/UserList';

// export default () => {
//     return (
//         <div>
//             <Route exact path="/" component={Home} />
//             <Route path="/hi" component={() => 'Hi'} />
//             <Route path="/users" component={UserList} />
//         </div>
//     )
// }

export default[
    {
        path:'/',
        component:Home,
        exact:true
    },
    {
        path:'/users',
        component:UsersList
    }
]