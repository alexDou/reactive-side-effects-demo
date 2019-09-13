import React from 'react';


const styles = {
    status: {
        width: '200px',
        margin: '0 40px 0 40px',
        padding: '6px',
        boxSizing: 'border-box',
        background: 'rgb(255, 160, 78)',
        textAlign: 'center',
    }
}

const Status = ({ status }) => {
    return (
        <div style={styles.status}>
            App status: { status.pending ? 'Pending' : status.failure ? 'Failed' : 'OK' }
        </div>
    );
};

export default Status;
