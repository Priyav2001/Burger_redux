import axios from '../../axios-orders';
import * as actionTypes from './actionTypes';

export const setOrderFailed = () => {
    return {
        type: actionTypes.SET_ORDER_FAILED
    }
}

export const setOrderSuccess = (order) => {
    return {
        type: actionTypes.SET_ORDER_SUCCESS,
        order: order
    }
}

export const setOrder = (order) => {
    return dispatch => {
        axios.post("orders.json", order)
        .then(response => {
            console.log(response);
           })
        .catch(err => dispatch());
    }
}

export const setOrdersSuccess = (fetchedOrders) => {
    return {
        type: actionTypes.SET_ORDERS_SUCCESS,
        orders: fetchedOrders
    }
}

export const setOrdersFailed = () => {
    return {
        type: actionTypes.SET_ORDERS_FAILED
    }
}

export const getOrders = () => {
    return dispatch => {
        axios.get("orders.json")
             .then(response => {
                const fetchedOrders = [];
                for(let order in response.data) {
                   fetchedOrders.push({
                       ...response.data[order],
                       id: order
                   });
                }
                dispatch(setOrdersSuccess(fetchedOrders));
             })
             .catch(err => dispatch(setOrdersFailed()));
    }
}