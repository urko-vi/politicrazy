import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import _ from 'lodash';
import privateRoutes from './routes/privateRoutes';
import ViewComponent from './routes/viewComponent';
import publicRoutes  from './routes/publicRoutes';
import * as Proptypes from "prop-types";

import {Home} from '../components/home';
import {useAuth0} from '../modules/common/auth/Auth';
import Loading from '../components/loading';



const Template = () => {

    const {loading, isAuthenticated} = useAuth0();

    if (loading) {
        return <Loading error={null} pastDelay={true} timedOut={null}/>;
    }
    /*
    import NotFound from './public/notFound';
    <ViewComponent component={NotFound} />
    */
    const routes = loadRoutes(isAuthenticated);
    return (
        <Router>
            <Switch>
                <ViewComponent component={Home} path="/"/>
                { _.map(routes, (route, key) => {
                    const { component, path } = route;
                    console.log(path);
                    return  <ViewComponent component={component} path={path} key={key}/>
                    })
                }
            </Switch>
        </Router>
    );
};

function loadRoutes(isAutenticated){
    if(isAutenticated){
        return privateRoutes;
    } else{
        return publicRoutes;
    }
}
Template.propTypes = {
    Component: Proptypes.instanceOf(Component)

};
function mapStateToProps(state, props) { return { user: state } }
function mapDispatchToProps(dispatch) { return { dispatch }; }

export default  connect(
    mapStateToProps,
    mapDispatchToProps
)(Template);