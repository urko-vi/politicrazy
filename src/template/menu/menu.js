import React, { Component } from 'react';
import * as Proptypes from "prop-types";
import {Link} from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem
        } from 'reactstrap';


export default class Menu extends Component  {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    componentWillMount() {
        //const auth= this.props.auth;
        //auth.handleAuthentication(this.props);
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    login() {
        this.props.auth.login();
    }

    logout() {
        this.props.auth.logout();
    }
    render() {
        const { isAuthenticated } = this.props.auth;
        return (
            <Navbar  style={{backgroundColor: '#e3f2fd'}}  light expand="md" sticky='top'>
                <Link className='nav-link' to='/home'>Home</Link>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>

                        {isAuthenticated() ?
                            <React.Fragment>
                                <NavItem>
                                    <Link className='nav-link' to='/parties'>Party List</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className='nav-link' to='/countries'>Country List</Link>
                                </NavItem>
                            </React.Fragment>
                            :<React.Fragment/>}
                        <NavItem >

                            { isAuthenticated() ? (
                                <Link className='nav-link' to='#' onClick={this.logout.bind(this)}>Logout</Link>
                            ):(

                                <Link className='nav-link' to='#' onClick={this.login.bind(this)}>Login</Link>
                            )
                            }
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}


Menu.propTypes = {
    route: Proptypes.object.isRequired,
    auth: Proptypes.object.isRequired,

};