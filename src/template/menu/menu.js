import React,{useState}  from 'react';
import {Link} from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem
        } from 'reactstrap';
import {useAuth0} from '../../modules/common/auth/Auth';

export const Menu = () => {
         const [isOpen, setIsOpen] = useState(false);


        const toggle = () => setIsOpen(!isOpen);

        const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
        const logoutWithRedirect = () =>
            logout({
                returnTo: window.location.origin
            });
        return (
            <Navbar  style={{backgroundColor: '#e3f2fd'}}  light expand="md" sticky='top'>

                <Link className='nav-link' to='/home'>Home</Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>

                        {isAuthenticated ?
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

                            { !isAuthenticated ? (
                                <Link className='nav-link' to='#'
                                        onClick={() => loginWithRedirect({})}>Login</Link>
                            ):(
                                <Link className='nav-link' to='#'
                                        onClick={() => logoutWithRedirect({})}>Logout</Link>
                            )
                            }
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
};



Menu.propTypes = {


};