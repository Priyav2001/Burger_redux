import * as React from 'react';
import './BuildControl.css';

interface Props {
    type: String;
    addIngredient: any;
    removeIngredient: any;
    disabled: boolean;
}

const BuildControl: React.FunctionComponent<Props> = (props) => {

    return(
        <div className="BuildControl">
            <div className="Label">{props.type}</div>
            <button disabled={props.disabled} className="Less" onClick={props.removeIngredient}>Less</button>
            <button className="More" onClick={props.addIngredient}>More</button>
        </div>
    );
};

export default BuildControl;