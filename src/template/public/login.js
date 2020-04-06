import React, { Component } from 'react';
import { connect } from 'react-redux';


class Login extends Component {


    render() {
        return(
            <React.Fragment/>
        );
    }

}

function mapStateToProps(state, props) { return { user: state } }
function mapDispatchToProps(dispatch) { return { dispatch }; }

export default  connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);