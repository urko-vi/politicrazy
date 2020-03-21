import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import _ from 'lodash';
import PrivateLayout from './private';
import PublicLayout  from './public';
import history from '../components/auth/History';
import privateRoutes from './routes/privateRoutes';
import publicRoutes  from './routes/publicRoutes';
import sessionRoutes from './routes/sessionRoutes';
import * as Proptypes from "prop-types";
import NotFound from './public/notFound';
import {Home} from '../components/home/index';
import Auth from '../components/auth/Auth';



class Template extends Component {

    constructor(props) {
        super(props);
        this.auth = new Auth(this.props.dispatch);
    }

    render() {
        const { isAuthenticated } = this.auth;

        return (
            <Router history={history}>
                <Switch>

                    { _.map(publicRoutes, (route, key) => {
                        const { component, path } = route;
                        return (
                            <Route
                                exact
                                path={path}
                                key={key}
                                render={ (route) => <PublicLayout component={component} route={route} auth={this.auth}/>}
                            />
                        )
                    }) }

                    { _.map(privateRoutes, (route, key) => {
                        const { component, path } = route;
                        return (
                            <Route
                                exact
                                path={path}
                                key={key}
                                render={ (route) =>
                                    isAuthenticated()? (
                                        <PrivateLayout component={component} route={route}  auth={this.auth}/>
                                    ) : (
                                        <PublicLayout auth={this.auth} component={Home} route={route} />
                                    )
                                }
                            />
                        )
                    }) }

                    { _.map(sessionRoutes, (route, key) => {
                        const { component, path } = route;
                        return (
                            <Route
                                exact
                                path={path}
                                key={key}
                                render={ (route) =>
                                    isAuthenticated() ? (
                                        <Redirect to="/"/>
                                    ) : (
                                        <PublicLayout auth={this.auth} component={component} route={route} />
                                    )
                                }
                            />
                        )
                    }) }

                    <Route component={ NotFound } />
                </Switch>
            </Router>
        );
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