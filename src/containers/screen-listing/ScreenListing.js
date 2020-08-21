import React, { Fragment } from 'react';
import Header from '../../components/Header';

function ScreenListing() {
    return (
        <Fragment>
            <Header />
            <div class="bg-lit-gray">
                <div class="container pt-3 pb-3">
                    <div class="edit-product-ctg">
                        <div class="top-grid-heading">
                            <h5>Screen listing</h5>

                        </div>
                        <div class="Set-table-blk">
                            <table id="productlist" class="table table-striped table-bordered borderless wt-100">
                                <thead>
                                    <tr>
                                        <th>Screen Name</th>
                                        <th>Description</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Product Categories</td>
                                        <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </td>
                                        <td>
                                            <span class="edit-icon-grid" data-toggle="modal" data-target="#myModal"><i class="fa fa-pencil" aria-hidden="true"></i></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Home Page</td>
                                        <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </td>
                                        <td>
                                            <span class="edit-icon-grid" data-toggle="modal" data-target="#myModal"><a href="edit-home.html"><i class="fa fa-pencil" aria-hidden="true"></i></a></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>FAQ</td>
                                        <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </td>
                                        <td>
                                            <span class="edit-icon-grid"><i class="fa fa-pencil" aria-hidden="true"></i></span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>Country Tips</td>
                                        <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </td>
                                        <td>
                                            <span class="edit-icon-grid"><i class="fa fa-pencil" aria-hidden="true"></i></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Role Management</td>
                                        <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </td>
                                        <td>
                                            <span class="edit-icon-grid"><i class="fa fa-pencil" aria-hidden="true"></i></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Product</td>
                                        <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </td>
                                        <td>
                                            <span class="edit-icon-grid"><i class="fa fa-pencil" aria-hidden="true"></i></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Insurance</td>
                                        <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </td>
                                        <td>
                                            <span class="edit-icon-grid"><i class="fa fa-pencil" aria-hidden="true"></i></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>MSH Global</td>
                                        <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </td>
                                        <td>
                                            <span class="edit-icon-grid"><i class="fa fa-pencil" aria-hidden="true"></i></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>News &amp; Resources</td>
                                        <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </td>
                                        <td>
                                            <span class="edit-icon-grid"><i class="fa fa-pencil" aria-hidden="true"></i></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>User Management</td>
                                        <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </td>
                                        <td>
                                            <span class="edit-icon-grid"><i class="fa fa-pencil" aria-hidden="true"></i></span>
                                        </td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ScreenListing;