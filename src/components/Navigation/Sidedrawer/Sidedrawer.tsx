import * as React from 'react';
import './Sidedrawer.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import Backdrop from '../../UI/Backdrop/Backdrop';

interface Props {
    open: boolean;
    closeSideDrawer: any;
}

const Sidedrawer: React.FunctionComponent<Props> = (props: Props) => {

    return(
        <React.Fragment>
            <Backdrop show={props.open} clicked={props.closeSideDrawer}/>
            <div className={`Sidedrawer ${props.open ? "Open" : "Close"} DesktopOnly`}>
                <Logo />
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </React.Fragment>
    );
};

export default Sidedrawer;