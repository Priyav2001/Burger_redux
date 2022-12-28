import * as React from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import { RouteComponentProps } from 'react-router-dom'; 
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/reducers/rootReducer';
import * as actionCreators from '../../store/actions/burgerBuilderActions';

interface Props extends RouteComponentProps {

}

const BurgerBuilder: React.FunctionComponent<Props> = (props: Props) => {
    
    const [ordering, setOrdering] = React.useState(false); 
    const ingredients = useSelector((state: RootState) => state.burgerBuilder.ingredients);
    const error = useSelector((state: RootState) => state.burgerBuilder.error);
    
    const dispatch = useDispatch();
    const addIngredient = ingredientName => dispatch(actionCreators.addIngredient(ingredientName));
    const removeIngredient = ingredientName => dispatch(actionCreators.removeIngredient(ingredientName));
    const initIngredients = React.useCallback(() => dispatch(actionCreators.initIngredients()), []);
    
    React.useEffect(() => {
        initIngredients();
    }, [initIngredients]);

    const updatePurchaseableOrder = () => {
        if(ingredients == null) {
            return;
        }
        const count = Object.keys(ingredients)
                    .map(key => {
                        return ingredients[key];
                    })
                    .reduce((sum, el) => {
                        return sum + el;
                    }, 0);

        return (count > 0);
    }

    const purchaseHandler = () => {
        setOrdering(true);
    }
    
    const purchaseCancel = () => {
        setOrdering(false);
    }

    const purchaseContinue = () => {
        props.history.push('/checkout');
    }

    return (
        <React.Fragment>
            {ordering ? <Modal show={ordering} clicked={purchaseCancel}>
                            <OrderSummary 
                                purchaseCancel={purchaseCancel}
                                purchaseContinue={purchaseContinue}
                            />
                        </Modal> : ""}
            {ingredients != null ? 
            (
                <><Burger ingredients={ingredients}/>
                <BuildControls 
                    addIngredient={addIngredient}
                    removeIngredient={removeIngredient}
                    disabled={!updatePurchaseableOrder()}
                    ordered={purchaseHandler}
                /></>
            )  : <Spinner /> }   
        </React.Fragment>
    );
}

export default BurgerBuilder;