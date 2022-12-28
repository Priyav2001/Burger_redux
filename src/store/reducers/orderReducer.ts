import * as actionTypes from '../actions/actionTypes';

export interface OrderRootState {
    orders: any;
    error: boolean;
}

const initialState = {
    orders: [],
    error: false
}

const orderReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_ORDER_SUCCESS:
            return {
                ...state,
                orders: state.orders.concat(action.order)
            }
        case actionTypes.SET_ORDER_FAILED:
            return {
                ...state,
                error: true
            }
        case actionTypes.SET_ORDERS_SUCCESS: 
            return {
                ...state,
                orders: action.orders,
                error: false
            }
        case actionTypes.SET_ORDERS_FAILED:
            return {
                ...state,
                error: true
            }
        default:
            return state;
    }
}

export default orderReducer;