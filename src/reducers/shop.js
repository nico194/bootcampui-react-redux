import actionTypes from '../constants/actionTypes';

const initialState = {
    orders: [],
    total: 0
};

const shopReducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.ADD_TO_SHOP: {
          const id = action.payload.product.id;
          const name = action.payload.product.name;
          const description = action.payload.product.description;
          const price = action.payload.product.price;
          const items = [];
          let i = 0;
          state.orders.forEach(product => {
              if(product.id !== id){
                items[i] = product;
                items[i].cant = items[i].cant ? items[i].cant : 1;
                i++;
              }
          });
          items[i] = action.payload.product;
          items[i].cant = items[i].cant === undefined ? 1 : items[i].cant + 1;

          console.log(items);
          return Object.assign({}, state, {
              orders: items,
              total: state.total + action.payload.product.price
          });
        }
        case actionTypes.REMOVE_FROM_SHOP: {
            return Object.assign({}, state, {
                orders: state.orders.filter(product => product.product.id !== action.payload.id),
                total: state.total - action.payload.price
            });
        }

        default:
            return state;
    }

};

export default shopReducer;
