import React, {Fragment} from 'react';
import ProductCategoryListing from './containers/products/ProductCateoryListing';
import './App.css';
import Header from './components/Header';
import { Route } from 'react-router-dom';
import AddProductCategory from './containers/products/AddProductCategory';
import ScreenListing from './containers/screen-listing/ScreenListing';

function App() {
  return (
    <Fragment>
      <Route exact path = "/" component={ScreenListing} />
      <Route exact path = "/product-category-listing" component={ProductCategoryListing} />
      <Route exact path = "/add-product-category" component = {AddProductCategory} />
    </Fragment>
  );
}

export default App;
