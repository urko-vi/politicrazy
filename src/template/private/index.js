import React, { Component } from 'react';
import * as Proptypes from "prop-types";
import Header  from '../header/AppHeader';
import Footer  from  '../footer/AppFooter';
export default class PrivateLayout extends Component {
    /*
    componentDidMount() {
        const { renewSession } = this.props.auth;
        if (localStorage.getItem('logged') === 'true') {
            renewSession();
        }
    }
    */
    render() {
        const Component = this.props.component;
        const route = this.props.route;
        const auth = this.props.auth;
        return (
            <React.Fragment>
                <Header route={route} auth={auth}/>
                <main className='container-fluid content'>
                    <Component route={route} auth={auth}/>
                </main>
                <Footer/>
            </React.Fragment>

        );
    }
}

PrivateLayout.propTypes = {
    route: Proptypes.object.isRequired,
    auth: Proptypes.object.isRequired
};