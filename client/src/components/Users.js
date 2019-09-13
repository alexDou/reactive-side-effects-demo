import React from 'react';
import { connect } from 'react-redux';

import * as actionsCreators from '../store/actions/creators';
import Button from './Button';
import Status from './Status';


export class Users extends React.Component {
    constructor(props) {
        super(props);

        this.handleFetch.bind(this);
        this.handleRemove.bind(this);
    }

    handleFetch() {
        return actionsCreators.fetchUsers();
    }

    handleRemove() {
        return actionsCreators.removeUser(12);
    }

    render() {
        const { status, user, dispatch } = this.props;
        const users = user.users;

        return <>
            <Button onClick={this.handleFetch} name="Fetch Users" dispatch={dispatch} />
            <Button onClick={this.handleRemove} name="Remove Users" dispatch={dispatch} />

            <div style={styles.list}>
                <h4>Users list</h4>
                <ul>
                    {users.length
                        ? users.map(u => <li key={u.user.email}>
                            <div>
                                <h5>
                                    Name: {u.user.username}<br/>
                                    Email: {u.user.email}
                                </h5>
                            </div>
                            <div>
                                <h6>Profile</h6>
                                <p>{u.profile.about}</p>
                                <p>{u.profile.address}</p>
                            </div>
                        </li>)
                        : 'No users yet, make a fetch maybe'}
                </ul>
            </div>
            <Status status={status} />
        </>
    }
}

const styles = {
    list: {
        margin: '20px 40px 20px',
        padding: '10px',
    }
}

export default connect(
    state => { console.log(state); return state }
)(Users);
