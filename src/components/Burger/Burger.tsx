import * as React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import './Burger.css';

interface Props {
    ingredients: any;
}

const Burger: React.FunctionComponent<Props> = (props: Props) => {

    let transformedIngredients = Object.keys(props.ingredients).map(igkey => {
        return [...Array(props.ingredients[igkey])].map((_, i ) => {
            return <BurgerIngredient key={igkey + i} type={igkey} />
        });
    });

    const size = transformedIngredients.reduce((array, el) => {
        return array.concat(el);
    }, []).length;

    const fillIngredients = <p> Please add ingredients to your burger! </p>;
    return(
        <div className='Burger'>
            <BurgerIngredient type="bread-top"/>
            {size === 0 ? fillIngredients : transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default Burger;