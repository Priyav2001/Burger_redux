import * as React from 'react';
import './Backdrop.css';

interface Props {
    show: boolean;
    clicked: any;
}

const Backdrop: React.FunctionComponent<Props> = (props: Props) => {
    return (
        <React.Fragment>
            {props.show ? <div className="Backdrop" onClick={props.clicked}></div> : ""}
        </React.Fragment>
    );
};

export default Backdrop;