import * as React from 'react';
import './Button.css';

interface Props {
    type: String;
    clicked?: any;
    children?: React.ReactNode;
}

const Button: React.FunctionComponent<Props> = (props: Props) => {
    return(
        <button 
            className={`Button ${props.type}`}
            onClick={props.clicked}
        >
            {props.children}
        </button>
    );
};

export default Button;