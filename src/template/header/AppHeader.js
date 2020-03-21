import React, { Component } from 'react';
import Menu from "../menu/menu"
import * as Proptypes from "prop-types";
export default class Header extends Component {
    render() {
        const route = this.props.route;
        const auth = this.props.auth;
        return (
            <header>
                <Menu route={route} auth={auth}/>
            </header>
        );
    }
}

Header.propTypes = {
    route: Proptypes.object.isRequired,
    auth: Proptypes.object.isRequired
};
