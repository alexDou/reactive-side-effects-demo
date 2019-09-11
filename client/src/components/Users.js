import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionsCreators from '../store/actions/creators'


export class Users extends Component {
    constructor(props) {
        super(props);

        this.handleFetch.bind(this);
        this.handleRemove.bind(this);
    }

    handleFetch() {
        return this.props.dispatch(actionsCreators.fetchUsers());
    }

    handleRemove() {
        return this.props.dispatch(actionsCreators.removeUser(12));
    }

    render() {
        const { status, user } = this.props;
        const users = user.users;

        return <>
            <div>
                <button style={styles.button} onClick={() => this.handleFetch()}>fetch users</button>
            </div>
            <div>
                <button style={styles.button} onClick={() => this.handleRemove()}>remove users</button>
            </div>
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
            <div style={styles.status}>
                App status: { status.pending ? 'Pending' : status.failure ? 'Failed' : 'OK' }
            </div>
        </>
    }
}

const styles = {
    button: {
        margin: '20px 40px 0 40px',
        width: '200px',
        height: '26px',
        background: '#cda',
    },
    list: {
        margin: '20px 40px 20px',
        padding: '10px',
    },
    status: {
        width: '200px',
        margin: '0 40px 0 40px',
        padding: '6px',
        boxSizing: 'border-box',
        background: 'rgb(255, 160, 78)',
        textAlign: 'center',
    }
}

export default connect(state => { console.log(state); return state })(Users);
