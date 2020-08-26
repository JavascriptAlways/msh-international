import { ToastsStore } from "react-toasts";
const intialState = {
  productCategoryList: [],
  featuredProductList: [],
  parentCategoryList: [],
};

export const productCategoryReducer = (state = intialState, action) => {
  switch (action.type) {
    case "GET_PRODUCT_CATGORY_LISTING":
      return {
        ...state,
        productCategoryList: action.payload,
      };
    case "GET_FEATURED_PRODUCT":
      return {
        ...state,
        featuredProductList: action.payload,
      };
    case "GET_PARENT_CATEGORY":
      return {
        ...state,
        parentCategoryList: action.payload,
      };
    case "GET_ADD_PRODUCT_CATEGORY":
      ToastsStore.success("Success! product category added successfully");
      return {
        ...state,
      };
    default:
      return state;
  }
};
