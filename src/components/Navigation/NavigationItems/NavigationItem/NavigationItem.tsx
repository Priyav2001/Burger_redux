import * as React from 'react';
import './NavigationItem.css';
import { NavLink } from 'react-router-dom';

interface Props {
    children: React.ReactNode;
    active?: boolean;
    link: string;
}

const NavigationItem: React.FunctionComponent<Props> = (props: Props) => {
    return(
        <li className="NavigationItem">
            <NavLink
                to={props.link}
                exact
            >{props.children}
            </NavLink>
            {/* <a href="/" className={`${props.active ? "active" : ""}`}> {props.children} </a> */}
        </li>
    );
};

export default NavigationItem;