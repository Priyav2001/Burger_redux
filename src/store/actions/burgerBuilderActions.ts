import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';
import { ThunkAction } from 'redux-thunk'
import { Dispatch } from "redux";

export const addIngredient = (ingredientName) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: ingredientName
    }
}

export const removeIngredient = (ingredientName) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: ingredientName
    }
}

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENT,
        ingredients: ingredients
    }
}

export const setIngredientsFailed = () => {
    return {
        type: actionTypes.SET_INGREDIENT_FAILED
    }
}

export const initIngredients = () => {
    return dispatch => {
        axios.get("ingredients.json")
            .then(response => {
                dispatch(setIngredients(response.data));
            })
            .catch(error => { 
                dispatch(setIngredientsFailed());
            });
    }
}