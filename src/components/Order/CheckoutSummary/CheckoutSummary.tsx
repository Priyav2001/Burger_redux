import * as React from 'react';
import './CheckoutSummary.css';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducers/rootReducer';

interface Props {
    checkoutCancelled: any;
    checkoutContinue: any;
}

const CheckoutSummary: React.FunctionComponent<Props> = (props: Props) => {
    const ingredients = useSelector((state: RootState) => state.burgerBuilder.ingredients);

    return(
        <div className="CheckoutSummary">
            <p>Your burger is ready!</p>
            <div><Burger ingredients={ingredients} /></div>
            <Button type="Danger" clicked={props.checkoutCancelled}>CANCEL</Button>
            <Button type="Success" clicked={props.checkoutContinue}>CONTINUE</Button>
        </div>
    );
};

export default CheckoutSummary;