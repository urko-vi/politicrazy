import React from "react";
import * as PropTypes from "prop-types";
import { Route, withRouter } from "react-router-dom";
import {useAuth0} from '../../modules/common/auth/Auth';
import PrivateLayout from '../private';
import PublicLayout from '../public';
import {Home} from '../../components/home';
const ViewComponent = ({ component, path, ...rest }) => {
    const { isAuthenticated } = useAuth0();
    const render = props =>{
        if(props.component){
            return isAuthenticated === true ? (<PrivateLayout component={props.component} />) : (<PublicLayout component={props.component}/>)
        } else{
            return (<PublicLayout component={Home}/>)
        }
    };
    return <Route exact path={path} render={render} {...rest} />;
};

ViewComponent.propTypes = {
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
        .isRequired,
    path: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]).isRequired
};

export default withRouter(ViewComponent);