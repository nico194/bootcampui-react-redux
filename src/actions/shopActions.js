import actionTypes from '../constants/actionTypes';

const addProduct = (product) => ({
	type: actionTypes.ADD_TO_SHOP,
	payload: { product }
});

const removeProduct = (product) => ({
	type: actionTypes.REMOVE_FROM_SHOP,
	payload: { product }
});


export default { addProduct, removeProduct };
