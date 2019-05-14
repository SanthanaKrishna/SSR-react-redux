import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UsersList extends React.Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    renderUsers(){
        const { users=[] } = this.props;
        return (users && users.map(user => {
            return <li key={user.id}>{user.name}</li>
        })
        )
    }
    render() {
        console.log('users', this.props.users)
        return (
            <div>
                user list Component
                <ul>{this.renderUsers()}</ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { users: state.users };
}
export default connect(mapStateToProps, { fetchUser })(UsersList);