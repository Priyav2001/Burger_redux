import * as React from 'react';
import Button from '../../UI/Button/Button';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducers/rootReducer';

interface Props {
    purchaseContinue: any;
    purchaseCancel: any;
}

const OrderSummary: React.FunctionComponent<Props> = (props) => {
    const ingredients = useSelector((state: RootState) => state.burgerBuilder.ingredients);
    const totalPrice = useSelector((state: RootState) => state.burgerBuilder.totalPrice);
    const tranformedIngredients = Object.keys(ingredients)
                              .map(key => {
                                  return <li key={key}><span>{key}: </span>{ingredients[key]}</li>
                              });

    return (
        <React.Fragment>
            <h3>Your Order</h3>
 
            <ul>
                {tranformedIngredients}
            </ul>
            <p><strong>Total Price: {totalPrice.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button type="Danger" clicked={props.purchaseCancel}>Cancel</Button>
            <Button type="Success" clicked={props.purchaseContinue}>Continue</Button>
        </React.Fragment>
    );
};

export default OrderSummary;
