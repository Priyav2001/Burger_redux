import * as React from 'react';
import './Order.css';

interface Props {
    orderDetails: any;
}

const Order: React.FunctionComponent<Props> = (props: Props) => {

    const ingredients = [];
    for(let key in props.orderDetails.ingredients) {
        ingredients.push({
            name: key,
        value: props.orderDetails.ingredients[key]
        });
    }

    const transformedIngredients = ingredients.map(item => {
        return <span key={item.name}>{item.name}: ({item.value}) </span>
    });

    return(
        <div className="Order">
            <p>Ingredients: {transformedIngredients}</p>
            <p>Price: <strong>{props.orderDetails.price}</strong></p>
        </div>
    );
};

export default Order;