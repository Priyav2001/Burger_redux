import * as React from 'react';
// import './Checkout.scss';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route, RouteComponentProps } from 'react-router-dom'; 
import ContactData from './ContactData/ContactData';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers/burgerBuilderReducer';

interface Props extends RouteComponentProps {
}

const Checkout: React.FunctionComponent<Props> = (props: Props) => {
    const checkoutCancelled = () => {
        props.history.goBack();
    }

    const checkoutContinue = () => {
        props.history.replace('/checkout/contactdata');
    }

    return(
        <div>
            <CheckoutSummary 
                checkoutCancelled={checkoutCancelled}
                checkoutContinue={checkoutContinue}
            />
            <Route 
                path={props.match.url + '/contactdata'}
                render={() => <ContactData {...props}/>}/>
        </div>
    );
};

export default Checkout;