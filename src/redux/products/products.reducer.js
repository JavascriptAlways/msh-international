const intialState = {
    productCategoryList: []
}

const productCategoryReducer = (state = intialState, action) => {
    switch (action.type) {
        case "GET_PRODUCT_CATGORY_LISTING_SUCCESS":
            return {
                ...state,
                productCategoryList: action.payload
            }
        case "GET_PRODUCT_CATGORY_LISTING_ERROR":
            return {
                ...state,
                productCategoryList: action.payload
            }
        default:
            return state;
    }
}

export default productCategoryReducer;