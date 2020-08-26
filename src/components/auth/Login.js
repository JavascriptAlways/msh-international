import React, { Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { login } from "../../redux/auth/auth.actions";
import { clearErrors } from "../../redux/errors.actions";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from "react-toasts";
import isEmpty from "../../isEmpty";

class Login extends React.Component {
  state = {
    username: "",
    password: "",
    msg: null,
  };

  componentDidMount() {
    document.body.className += "bg-log";
  }

  componentWillUnmount() {
    //document.body.className += "";
    document.body.className = document.body.className.replace("bg-log","");
  }

  componentDidUpdate() {
    const { isAuthenticated, clearErrors, history } = this.props;
    if (isAuthenticated) {
      clearErrors();
      history.push("/product-category-listing");
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    const { login } = this.props;
    const user = {
      username,
      password,
    };
    if (isEmpty(username)) {
      ToastsStore.error("Username should not be empty!");
    } else if (isEmpty(password)) {
      ToastsStore.error("Password should not be empty!");
    } else {
      this.setState({ username: "", password: "" });
      await login(user);
    }
  };
  render() {
    const { username, password } = this.state;
    return (
      <Fragment>
        <ToastsContainer
          store={ToastsStore}
          position={ToastsContainerPosition.TOP_RIGHT}
        />
        <div className="log-main">
          <div className="log-logo">
            <img src="images/logo.png" alt="logo" />
          </div>
          <div className="log-head">Enter your login details</div>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group login-form">
              <i className="fa fa-user-o"></i>
              <input
                type="text"
                className="form-control"
                placeholder="username"
                name="username"
                id="username"
                value={username}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group login-form">
              <i className="fa fa-lock"></i>
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label className="form-check-label" htmlFor="defaultCheck1">
                Remember Me
              </label>
              <span
                className="set-rht"
                data-toggle="modal"
                data-target="#myModal"
              >
                <Link href="#">Forgot Password?</Link>
              </span>
            </div>
            <div className="form-group sub-btn">
              <input
                type="submit"
                className="btn btn-block btn-lg"
                value="Sign in"
              />
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { login, clearErrors })(
  withRouter(Login)
);
