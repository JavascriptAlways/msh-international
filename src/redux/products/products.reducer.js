const intialState = {
    productCategoryList: [],
    featuredProductList: [],
    parentCategoryList: []
}

export const productCategoryReducer = (state = intialState, action) => {
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
        case "GET_FEATURED_PRODUCT_SUCCESS":
            return {
                ...state,
                featuredProductList: action.payload
            }
        case "GET_FEATURED_PRODUCT_ERROR":
            return {
                ...state,
                featuredProductList: action.payload
            }
        case "GET_PARENT_CATEGORY_SUCCESS":
            return {
                ...state,
                parentCategoryList: action.payload
            }
        case "GET_PARENT_CATEGORY_ERROR":
            return {
                ...state,
                parentCategoryList: action.payload
            }
        default:
            return state;
    }
}

