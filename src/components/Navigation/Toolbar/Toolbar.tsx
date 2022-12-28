import * as React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

interface Props {
    openSidedrawer: any;
}

const Toolbar: React.FunctionComponent<Props> = (props: Props) => {
    return(
        <header className="Toolbar">
            <div className="Hamburger" onClick={props.openSidedrawer}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <Logo />
            <nav className="DesktopOnly">
                <NavigationItems />
            </nav>
        </header>
    );
};

export default Toolbar;