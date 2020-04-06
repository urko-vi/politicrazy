import React, { Component } from 'react';
import {Menu} from "../menu/menu"
export default class Header extends Component {
    render() {
        return (
            <header>
                <Menu />
            </header>
        );
    }
}
