import * as React from 'react';
import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducers/rootReducer';

const ingredientTypes = [
    { label: "Salad", type: "salad"},
    { label: "Bacon", type: "bacon"},
    { label: "Meat", type: "meat"},
    { label: "Cheese", type: "cheese"},
];

interface Props {
    addIngredient: any;
    removeIngredient: any;
    disabled: boolean;
    ordered: any;
}

const BuildControls: React.FunctionComponent<Props> = (props) => {
    const ingredients = useSelector((state: RootState) => state.burgerBuilder.ingredients);
    const totalPrice = useSelector((state: RootState) => state.burgerBuilder.totalPrice);

    return(
        <div className="BuildControls">
            <p>Current Price: <strong>{totalPrice.toFixed(2)}</strong></p>
            {ingredientTypes.map(ig => {
                return (
                    <BuildControl
                        key={ig.label + 1}
                        type={ig.type}
                        addIngredient={() => props.addIngredient(ig.type)}
                        removeIngredient={() => props.removeIngredient(ig.type)}
                        disabled={ingredients[ig.type] <= 0}
                    />
                ); 
            })
            }
            <button 
                className="OrderButton"
                disabled={props.disabled}
                onClick={props.ordered}
            >
                ORDER NOW
            </button>
        </div>
    );
};

export default BuildControls;