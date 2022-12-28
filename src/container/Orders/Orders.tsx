import * as React from 'react';
import './Orders.scss';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import { useSelector, useDispatch } from 'react-redux';
import * as actionCreators from '../../store/actions/orderActions'; 
import { RootState } from '../../store/reducers/rootReducer';

interface Props {
}

const Orders: React.FunctionComponent<Props> = (props: Props) => {

    const orders = useSelector((state: RootState) => state.order.orders);
    const dispatch = useDispatch();

    const getOrders = React.useCallback(() => dispatch(actionCreators.getOrders()), []);
    React.useEffect(() => {
        getOrders();
    }, [getOrders]);

    return(
        <div className="Orders">
            {orders != null && orders.length > 0 && orders.map(order => {
                return <Order key={order.id} orderDetails={order}/>
            })
            }
        </div>
    );
};

export default Orders;