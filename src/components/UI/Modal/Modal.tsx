import * as React from 'react';
import './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

interface Props {
    show: boolean;
    clicked: any;
    children: React.ReactNode;
}
const Modal: React.FunctionComponent<Props> = (props: Props) => {
    return (
        <React.Fragment>
            <Backdrop show={props.show} clicked={props.clicked}/>
            <div className="Modal">
                {props.children}
            </div>
        </React.Fragment>
    );
};

export default Modal;
