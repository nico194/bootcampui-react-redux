import actionTypes from '../constants/actionTypes';

const initialState = {
    orders: [],
    total: 0
};

const shopReducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.ADD_TO_SHOP: {
            return Object.assign({}, state, {
                orders: [...state.orders, action.payload],
                total: state.total + action.payload.product.price
            });
        }
        case actionTypes.REMOVE_FROM_SHOP: {
            return Object.assign({}, state, {
                orders: state.orders.filter(product => product.id !== action.payload.product.id),
                total: state.total - action.payload.product.price
            });
        }

        default:
            return state;
    }

};

export default shopReducer;
