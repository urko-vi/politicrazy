import React from 'react'
import PropTypes from 'prop-types'
import loading from '../../static/images/loading.svg';

const Loading = ({ error, timedOut, pastDelay }) => {
    const style = {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        height: '60vh',
        width: '100vw',
        top: 40,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
    };
    if (error) {
        return <div>Error!</div>
    } else if (timedOut) {
        return <div>Taking a long time...</div>
    } else if (pastDelay) {
        return (<img style={style} src={loading} alt="loading"/>)
    } else {
        return <React.Fragment/>
    }
};
Loading.propTypes = {
    error: PropTypes.bool,
    timedOut: PropTypes.bool,
    pastDelay: PropTypes.bool
};

export default Loading