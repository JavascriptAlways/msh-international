import React, { Fragment, useEffect, useState } from "react";
import Header from "../../components/Header";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  getFeaturedProductList,
  getParentCategoryList,
  addProductCategory,
} from "../../redux/products/products.action";
import { getLanuageList } from "../../redux/languages/language.action";
import isEmpty from "../../isEmpty";

function AddProductCategory(props) {
  const [showLanguage, setShowLanguage] = useState(false);
  const [formData, setFormData] = useState({
    name: null,
    description: null,
    featuredProduct: null,
    isChildCategory: true,
    parentCategory: null,
    anotherLanguage: null,
    lang_eng_name: null,
    lang_eng_description: null,
    lang_french_name: null,
    lang_french_description: null,
    productToCompareArray: [],
  });

  const { featuredProductList, parentCategoryList } = useSelector((state) => {
    return state.productCategory;
  });
  const languageList = useSelector((state) => {
    return state.language.languageList;
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFeaturedProductList());
    dispatch(getParentCategoryList());
    dispatch(getLanuageList());
  }, [dispatch]);

  const featuredProductsListing = featuredProductList.map((products) => {
    return (
      <option key={products.id} value={products.id}>
        {products.name}
      </option>
    );
  });

  const productToCompare = (e) => {
    const { value } = e.target;
    const { productToCompareArray } = formData;
    if (productToCompareArray.includes(Number(value))) {
      const index = productToCompareArray.indexOf(Number(value));
      if (index !== -1) {
        productToCompareArray.splice(index, 1);
      }
    } else {
      productToCompareArray.push(Number(value));
    }
  };

  const addToCompareListing = featuredProductList.map((products) => {
    return (
      <li key={products.id}>
        <input
          className="checkbox-custom"
          onChange={productToCompare}
          value={products.id}
          name="addToCompare"
          type="checkbox"
          id={`product${products.id}`}
        />
        <label
          htmlFor={`product${products.id}`}
          className="checkbox-custom-label checkbox"
        >
          {products.name}
        </label>
      </li>
    );
  });

  const parentCategoryListing = parentCategoryList.map((parentCat) => {
    return (
      <option key={parentCat.id} value={parentCat.id}>
        {parentCat.name}
      </option>
    );
  });
  const languageListing = languageList.map((language) => {
    return (
      <option key={language.id} value={language.id}>
        {language.name}
      </option>
    );
  });

  const handleIsChildCatgory = async () => {
    await setFormData({
      ...formData,
      isChildCategory: !formData.isChildCategory,
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      entity_type_id: 1,
      node_data: [
        {
          attr_id: 1,
          attr_value: formData.name,
          lang_id: 1,
        },
        {
          attr_id: 2,
          attr_value: formData.description,
          lang_id: 1,
        },
        {
          attr_id: 5,
          attr_value: formData.featuredProduct,
          lang_id: 1,
        },
        {
          attr_id: 6,
          attr_value: formData.isSubCategory ? 1 : 0,
          lang_id: 1,
        },
        {
          attr_id: 7,
          attr_value: formData.parentCategory,
          lang_id: 1,
        },
        {
          attr_id: 8,
          attr_value: formData.productToCompareArray
            ? formData.productToCompareArray.toString()
            : "",
          lang_id: 1,
        },
      ],
    };
    dispatch(addProductCategory(data));
  };
  const { history } = props;
  return (
    <Fragment>
      <Header />
      <div className="bg-lit-gray">
        <div className="container  pt-3 pb-3">
          <div className="add-product-ctg">
            <h5>Add Product Category</h5>
            <div className="fom-sec-sp">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group row">
                      <label htmlFor="name" className="col-lg-3 col-form-label">
                        Name <span className="red-star">*</span>
                      </label>
                      <div className="col-lg-9">
                        <input
                          type="text"
                          className="form-control"
                          onChange={handleChange}
                          name="name"
                          id="name"
                          placeholder="Name"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="description"
                        className="col-lg-3 col-form-label"
                      >
                        Description <span className="red-star">*</span>
                      </label>
                      <div className="col-lg-9">
                        <textarea
                          className="form-control sp-ht-72"
                          onChange={handleChange}
                          name="description"
                          id="description"
                          placeholder="Description"
                          required="required"
                        ></textarea>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-lg-12">
                        <label className="chk-box">
                          Is Child category
                          <input
                            type="checkbox"
                            checked={formData.isChildCategory}
                            name="isChildCategory"
                            onChange={handleIsChildCatgory}
                          />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group row">
                      <label
                        htmlFor="featured-product"
                        className="col-lg-3 pr-0 col-form-label"
                      >
                        Featured Product <span className="red-star">*</span>
                      </label>
                      <div className="col-lg-9">
                        <select
                          id="featured-product"
                          name="featuredProduct"
                          onChange={handleChange}
                          className="form-control"
                          required="required"
                        >
                          <option>Select Featured Products</option>
                          {featuredProductsListing}
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputDescription"
                        className="col-lg-3 pr-0 col-form-label"
                      >
                        Product to Compare
                      </label>
                      <div className="col-lg-9">
                        <div className="selectbox-content">
                          <ul className="ul-list">{addToCompareListing}</ul>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="parent-category"
                        className="col-lg-3 pr-0 col-form-label"
                      >
                        Parent Category
                      </label>
                      <div className="col-lg-9">
                        <select
                          id="parent-category"
                          name="parentCategory"
                          onChange={handleChange}
                          className="form-control"
                        >
                          <option>Select Parent Category</option>
                          {parentCategoryListing}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-12">
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label for="upload-banner-image">
                            Upload Large Logo Image <br />
                            <span class="set-label-ext">
                              (Please Use image of formet .jpg/.png of maximum
                              size 10mb and dimension 300px x 300px)
                            </span>
                          </label>
                          <input
                            type="file"
                            class="form-control ht-40"
                            name="upload-banner-image"
                            id="upload-banner-image"
                            placeholder="Upload Banner Image"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="upload-banner-image">
                            Upload Small Logo Image <br />
                            <span className="set-label-ext">
                              (Please Use image of formet .jpg/.png of maximum
                              size 5mb and dimension 80px x 80px)
                            </span>
                          </label>
                          <input
                            type="file"
                            className="form-control ht-40"
                            name="upload-banner-image"
                            id="upload-banner-image"
                            placeholder="Upload Banner Image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group row">
                      <label
                        htmlFor="another-language"
                        className="col-lg-4 col-form-label"
                      >
                        Add Another language
                      </label>
                      <div className="col-lg-8">
                        <select
                          id="another-language"
                          onChange={handleChange}
                          name="anotherLanguage"
                          className="form-control"
                          onChange={(e) => {
                            !isEmpty(e.target.value)
                              ? setShowLanguage(true)
                              : setShowLanguage(false);
                          }}
                        >
                          <option value="">Select Your Language</option>
                          {languageListing}
                        </select>
                      </div>
                    </div>
                  </div>
                  {showLanguage && (
                    <div className="col-lg-12 table-responsive">
                      <table className="table table-bordered hd-bg-gry ">
                        <thead>
                          <tr>
                            <th scope="col">Field Name</th>
                            <th scope="col">English</th>
                            <th scope="col">French</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Name</td>
                            <td>
                              <input
                                type="email"
                                className="form-control"
                                id="lang_eng_name"
                                name="lang_eng_name"
                                placeholder="Name"
                              />
                            </td>
                            <td>
                              <input
                                type="email"
                                className="form-control"
                                id="lang_french_name"
                                name="lang_french_name"
                                placeholder="Name"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>Description</td>
                            <td>
                              <textarea
                                className="form-control"
                                id="lang_eng_description"
                                name="lang_eng_description"
                                placeholder="Description"
                                rows="2"
                              ></textarea>
                            </td>
                            <td>
                              <textarea
                                className="form-control"
                                id="lang_french_description"
                                name="lang_french_description"
                                placeholder="Description"
                                rows="2"
                              ></textarea>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                  <div className="bt-rt-btn col-lg-12 pt-2">
                    <button className="btn green-btn" name="save" type="submit">
                      Save
                    </button>
                    <button
                      type="reset"
                      name="reset"
                      className="btn blue-btn"
                      data-dismiss="modal"
                    >
                      Reset
                    </button>
                    <button
                      className="btn red-btn"
                      onClick={() => history.push("/product-category-listing")}
                      type="cancel"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default withRouter(AddProductCategory);
