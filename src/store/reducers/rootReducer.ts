import burgerBuilderReducer from '../../store/reducers/burgerBuilderReducer';
import orderReducer from '../../store/reducers/orderReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    burgerBuilder: burgerBuilderReducer,
    order: orderReducer
});

export type RootState = ReturnType<typeof rootReducer>
