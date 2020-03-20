import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Loading from '../loading/';
import { withRouter } from 'react-router-dom';

class Callback extends Component {


    constructor(props) {
        super(props);

        this.state = {
            pastDelay: true
        };
    }
    async componentDidMount() {
        const token= await this.props.auth.handleAuthentication();
       // console.log(token);
        //const token= this.props.auth.idToken;
        localStorage.setItem('id_token',token);
        this.setState({pastDelay:false})
        this.props.history.replace('/home');
    }


    render() {
        return (
            <Loading error={null} pastDelay={this.state.pastDelay} timedOut={null}/>
        )
    };
}
export default withRouter(Callback);

Callback.propTypes = {
    auth: PropTypes.object
}
