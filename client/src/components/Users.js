import React from 'react';
import { connect } from 'react-redux';

import * as actionsCreators from '../store/actions/creators';
import Button from './Button';
import Status from './Status';


export class Users extends React.Component {
    render() {
        const { status, user, dispatch } = this.props;
        const users = user.users;

        return <>
            <Status status={status} />

            <Button onClick={actionsCreators.fetchUsers} name="Fetch Users" dispatch={dispatch} />

            <div style={styles.list}>
                <h4>Users list</h4>
                <ul>
                    {users.length
                        ? users.map((u, idx) => <li key={u.user.email}>
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
                            <Button onClick={actionsCreators.removeUser} id={idx} name="Remove User" dispatch={dispatch} />
                        </li>)
                        : 'No users yet, make a fetch maybe'}
                </ul>
            </div>
        </>
    }
}

const styles = {
    list: {
        margin: '20px 40px 20px',
        padding: '10px',
    }
}

export default connect(state => state)(Users);
