import React, { Fragment } from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import { connect } from 'react-redux';
import { getProductCategoryList } from '../../redux/products/products.action';
import Header from '../../components/Header';

class MaterialTableExample extends React.Component {

  componentDidMount() {
    const { getProductCategoryList } = this.props;
    getProductCategoryList();
  }

  handleSubmit(props) {
    console.log("props are", props);
  }

  render() {
    const { productCategoryList } = this.props;
    console.log("my values are", productCategoryList);
    const columns = [
      {
        Header: "Id",
        accessor: "id", // String-based value accessors!
      },
      {
        Header: "Name",
        accessor: "name", // String-based value accessors!
      },
      {
        Header: "Featured Product",
        accessor: "featured_product",
      },
      {
        Header: "Description",
        accessor: "attr_desc", // Custom value accessors!
        filterable: false,
        sortable: false,
      },
      {
        Header: "Is Sub Category",
        accessor: "is_sub_category",
        filterable: false,
        sortable: false,
        Cell: (props) => {
          let isSubCategoryChecked = false;
          if (props.value == 1) {
            isSubCategoryChecked = true;
          }
          return (
            <span className="button-switch sp-gray">
              <input type="checkbox" id="switch-blue" className="switch" checked={isSubCategoryChecked} />
              <label for="switch-blue" className="lbl-off"></label>
              <label for="switch-blue" className="lbl-on"></label>
            </span>
          );
        }
      },
      {
        Header: "Actions", // Custom header components!
        filterable: false,
        sortable: false,
        width: 150,
        Cell: (props) => {
          return (
            <span className="lst-grid-btn">
              <span className="button-switch">
                <input type="checkbox" id="switch-orange-7" className="switch switch-orange" />
                <label for="switch-orange-7" className="lbl-off"><i className="fa fa-close"></i></label>
                <label for="switch-orange-7" className="lbl-on"><i className="fa fa-check" aria-hidden="true"></i></label>
              </span>
              <span className="edit-icon-grid"><i className="fa fa-pencil" aria-hidden="true"></i></span>
              <span className="del-icon-grid"><i className="fa fa-trash-o" aria-hidden="true"></i></span>
            </span>
          );
        },
      },
    ];

    return (
      <Fragment>
        <Header />
        <div className="bg-lit-gray">
          <div className="container  pt-3 pb-3">
            <div className="edit-product-ctg">
              <div className="top-grid-heading">
                <h5>Product Category listing</h5>
                <div className="top-grid-btns">
                  <button type="button" onclick="location.href='edit-product-category.html';" className="btn red-btn-sec"><i className="fa fa-user-plus" aria-hidden="true"></i> Add New Category</button>
                  <button type="button" className="btn green-btn-sec"><i className="fa fa-file-excel-o" aria-hidden="true"></i> Export</button>
                  <span className="sp-wht-btn">
                    Show All
                                <span className="button-switch sp-gray">
                      <input type="checkbox" id="switch-blue" className="switch" checked="" />
                      <label for="switch-blue" className="lbl-off"></label>
                      <label for="switch-blue" className="lbl-on"></label>
                    </span>
                  </span>

                </div>
              </div>

              <ReactTable
                data={productCategoryList}
                columns={columns}
                filterable
                resizable
                noDataText="No Product Category Found"
                defaultPageSize={10}
                minRows={0}
                pageSizeOptions={[5, 10, 20, 50, 100]}
                defaultFilterMethod={(filter, row) =>
                  String(row[filter.id]).toLowerCase().includes(filter.value.toLowerCase())}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  productCategoryList: state.productCategory.productCategoryList
});

const mapDispatchToProps = dispatch => ({
  getProductCategoryList: () => dispatch(getProductCategoryList())
});

export default connect(mapStateToProps, mapDispatchToProps)(MaterialTableExample);
