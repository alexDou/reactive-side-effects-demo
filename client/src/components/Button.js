import React, { useCallback } from 'react';


const styles = {
    button: {
        margin: '20px 40px 0 40px',
        paddingLeft: '10px',
        width: '200px',
        height: '26px',
        background: '#cda',
        textAlign: 'left',
    },
}

const Button = React.memo(({ onClick, name, dispatch }) => {

    const handleOneClick = useCallback(() => {
        return dispatch(onClick())
    }, [onClick, dispatch]);

    return (
        <div>
            <button style={styles.button} onClick={handleOneClick}>{name}</button>
        </div>
    );
});

export default Button;
