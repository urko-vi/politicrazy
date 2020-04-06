import React, { Component } from 'react';
import * as Proptypes from 'prop-types';
import Header from '../header/AppHeader';
import Footer from '../footer/AppFooter';

export default class PublicLayout extends Component {


    render() {
        const Component = this.props.component;

        return (
            <React.Fragment>
                <Header />
                <main className='container-fluid content'>
                    <Component />
                </main>
                <Footer/>
            </React.Fragment>
        );
    }
}

PublicLayout.propTypes = {
    component: Proptypes.oneOfType([Proptypes.element, Proptypes.func])
        .isRequired
};