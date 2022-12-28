import * as React from 'react';
import './ContactData.scss';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-orders';
import { RouteComponentProps } from 'react-router-dom';
import Input from '../../../components/UI/Input/input';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/reducers/rootReducer';
import { setOrder } from '../../../store/actions/orderActions';

interface Props extends RouteComponentProps {
}

const ContactData: React.FunctionComponent<Props> = (props: Props) => {
    const ingredients = useSelector((state: RootState) => state.burgerBuilder.ingredients);
    const totalPrice = useSelector((state: RootState) => state.burgerBuilder.totalPrice);
    
    const dispatch = useDispatch();
    const sendOrder = (order) => dispatch(setOrder(order));

    const orderHandler = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const order = {
            ingredients: ingredients,
            price: totalPrice,
            name: data.get('name'),
            email: data.get('email'),
            state: data.get('state'),
            zip: data.get('zip')
        }

        sendOrder(order);
        props.history.replace("/");
    }

    return(
        <div className="ContactData">
            <h4>Enter your contact details:</h4>
            <form onSubmit={orderHandler}>
                <Input type="text" placeholder="Your name" name="name"/>
                <Input type="text" placeholder="Your email" name="email"/>
                <Input type="text" placeholder="Your state" name="state"/>
                <Input type="text" placeholder="Your zip" name="zip"/>
                <Button type="Success">ORDER</Button>
            </form>
        </div>
    );
};

export default ContactData;