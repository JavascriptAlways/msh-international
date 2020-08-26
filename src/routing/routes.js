import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import ProductCategoryListing from '../containers/products/ProductCateoryListing';
import AddProductCategory from '../containers/products/AddProductCategory';
import EditProductCategory from '../containers/products/EditProductCategory';
import ScreenListing from '../containers/screen-listing/ScreenListing';
import Login from "../components/auth/Login";

function Routes() {
  return (
    <Fragment>
      <Route exact path="/" component={ScreenListing} />
      <Route
        exact
        path="/product-category-listing"
        component={ProductCategoryListing}
      />
      <Route
        exact
        path="/add-product-category"
        component={AddProductCategory}
      />
      <Route
        exact
        path="/edit-product-category"
        component={EditProductCategory}
      />
      <Route exact path="/login" component={Login} />
    </Fragment>
  );
}

export default Routes;
