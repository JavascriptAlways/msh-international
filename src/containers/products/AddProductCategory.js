import React, { Fragment, useEffect, useState } from 'react';
import Header from '../../components/Header';
import { useSelector, useDispatch } from 'react-redux';
import { getFeaturedProductList, getParentCategoryList } from '../../redux/products/products.action';
import { getLanuageList } from '../../redux/languages/language.action';
import isEmpty from '../../isEmpty';

function AddProductCategory() {

    const [showLanguage, setShowLanguage] = useState(false);

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
            <option key={products.id} value={products.id}>{products.name}</option>
        );
    });
    const addToCompareListing = featuredProductList.map((products) => {
        return (
            <li key={products.id}><input className="checkbox-custom" name="checkAll" type="checkbox" id={`product${products.id}`} /><label htmlFor={`product${products.id}`} className="checkbox-custom-label checkbox">{products.name}</label></li>
        );
    });
    const parentCategoryListing = parentCategoryList.map((parentCat) => {
        return (
            <option key={parentCat.id} value={parentCat.id}>{parentCat.name}</option>
        );
    });
    const languageListing = languageList.map((language) => {
        return (
            <option key={language.id} value={language.id}>{language.name}</option>
        );
    });
    return (
        <Fragment>
            <Header />
            <div className="bg-lit-gray">
                <div className="container  pt-3 pb-3">
                    <div className="add-product-ctg">
                        <h5>Add Product Category</h5>
                        <div className="fom-sec-sp">
                            <form>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group row">
                                            <label htmlFor="name" className="col-lg-3 col-form-label">Name <span className="red-star">*</span></label>
                                            <div className="col-lg-9">
                                                <input type="text" className="form-control" name="name" id="name" placeholder="Name" required="required" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="description" className="col-lg-3 col-form-label">Description <span className="red-star">*</span></label>
                                            <div className="col-lg-9">
                                                <textarea className="form-control sp-ht-72" name="description" id="description" placeholder="Description" required="required"></textarea>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-lg-12">
                                                <label className="chk-box">
                                                    Is Child category
                                                <input type="checkbox" checked="checked" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group row">
                                            <label htmlFor="featured-product" className="col-lg-3 pr-0 col-form-label">Featured Product <span className="red-star">*</span></label>
                                            <div className="col-lg-9">
                                                <select id="featured-product" name="featured-product" className="form-control" required="required">
                                                    <option>Select Featured Products</option>
                                                    {featuredProductsListing}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="inputDescription" className="col-lg-3 pr-0 col-form-label">Product to Compare</label>
                                            <div className="col-lg-9">
                                                <div className="selectbox-content">
                                                    <ul className="ul-list">
                                                        {addToCompareListing}
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="parent-category" className="col-lg-3 pr-0 col-form-label">Parent Category</label>
                                            <div className="col-lg-9">
                                                <select id="parent-category" name="parent-category" className="form-control">
                                                    <option>Select Parent Category</option>
                                                    {parentCategoryListing}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-6">
                                        <div className="form-group row">
                                            <label htmlFor="another-language" className="col-lg-4 col-form-label">
                                                Add Another language
                                        </label>
                                            <div className="col-lg-8">
                                                <select id="another-language" name="another-language" className="form-control" onChange={(e) => { !isEmpty(e.target.value) ? setShowLanguage(true) : setShowLanguage(false) }}>
                                                    <option value=''>Select Your Language</option>
                                                    {languageListing}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    {showLanguage &&
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
                                                        <td><input type="email" className="form-control" id="name1" name="editname-1" placeholder="Name" /></td>
                                                        <td><input type="email" className="form-control" id="name2" name="editname-2" placeholder="Name" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Description</td>
                                                        <td>
                                                            <textarea className="form-control" id="description" name="description-1" placeholder="Description" rows="2"></textarea>
                                                        </td>
                                                        <td>
                                                            <textarea className="form-control" id="description" name="description-2" placeholder="Description" rows="2"></textarea>
                                                        </td>
                                                    </tr>


                                                </tbody>
                                            </table>
                                        </div>
                                    }
                                    <div className="bt-rt-btn col-lg-12 pt-2">
                                        <button className="btn green-btn" name="save" type="submit">Save</button>
                                        <button type="reset" name="reset" className="btn blue-btn" data-dismiss="modal">Reset</button>
                                        <button className="btn red-btn" name="cancel" type="submit">Cancel</button>
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

export default AddProductCategory;