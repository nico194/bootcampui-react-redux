import actionTypes from '../constants/actionTypes';

const addProduct = (product) => ({
	type: actionTypes.ADD_TO_SHOP,
	payload: { product }
});

const removeProduct = (id, price) => ({
	type: actionTypes.REMOVE_FROM_SHOP,
	payload: { id,
							price
	 					}
});


export default { addProduct, removeProduct };
