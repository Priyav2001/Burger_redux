import * as React from 'react';
import './Input.css';

interface Props {
    type: string;
    name: string;
    placeholder: string;
}

const Input: React.FunctionComponent<Props> = (props: Props) => {
    return(
        <div className="Input">
            <input type={props.type} placeholder={props.placeholder} name={props.name}/>
        </div>
    );
};

export default Input;