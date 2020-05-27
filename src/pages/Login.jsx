import React, { Component } from "react";
import Footer from "../components/Footer";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import { changeInputUser, doLogin } from "../store/action/userAction";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class LoginPage extends Component {
  postLogin = async () => {
    await this.props.doLogin();
    const is_login = this.props.login;
    if (is_login) {
      this.props.history.push("/");
    }
  };
  render() {
    return (
      <div>
        <div className="bg-white">
          <Container className="py-4 px-0 d-flex justify-content-between">
            <div className="d-flex">
              <Link to="/">
                <img
                  style={{ width: "129px", height: "40px" }}
                  src={require("../assets/img/logo-orange.png")}
                  alt=""
                />
              </Link>
              <div className="mt-2">
                <span style={{ fontSize: "24px" }}> Login</span>
              </div>
            </div>
            <div className="mt-2 orange" style={{ fontSize: "1.125rem" }}>
              Butuh Bantuan?
            </div>
          </Container>
          <div className="login-bg">
            <Row className="pt-5">
              <Col md={{ offset: 6, span: 5 }}>
                <Form
                  onSubmit={(e) => e.preventDefault()}
                  className=" p-4 bg-white border"
                >
                  <div className="d-flex justify-content-between mb-4">
                    <span style={{ fontSize: "1.25rem" }}>Login</span>
                    <p className=" in-button">
                      <span className="grey in-button">Baru di shopee?</span>
                      <Link to="/register">
                        <span className="orange">
                          <strong> Daftar</strong>
                        </span>
                      </Link>
                    </p>
                  </div>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    name="username"
                    onChange={(e) => this.props.changeInput(e)}
                  />
                  <br />
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={(e) => this.props.changeInput(e)}
                  />
                  <br />
                  <Button
                    type="submit"
                    onClick={() => this.postLogin()}
                    size="sm"
                    className="py-2 mt-4 bg-button"
                    block
                  >
                    LOGIN
                  </Button>
                  <div className="d-flex justify-content-between mt-3 mb-5 text-login">
                    <span>Lupa Password</span>
                    <span>Log in dengan SMS</span>
                  </div>
                  <div class="separator">ATAU</div>
                  <div className="d-flex justify-content-between my-2">
                    <Button size="sm" className="py-0 mt-4 mr-2" block>
                      <div className="d-flex justify-content-start">
                        <span style={{ fontSize: "24px" }}>
                          <i className="fab fa-facebook mt-1"></i>
                        </span>
                        <span style={{ padding: "5px" }}>
                          &emsp;&emsp;&emsp;&emsp;<strong>Facebook</strong>
                        </span>
                      </div>
                    </Button>
                    <Button size="sm" className="p-0 mt-4 ml-2" block>
                      <div className="d-flex justify-content-start">
                        <img
                          src={require("../assets/img/google-icon.png")}
                          style={{ width: "35px" }}
                          alt=""
                        />
                        <span style={{ padding: "5px" }}>
                          &emsp;&emsp;&emsp;&emsp;<strong>Google</strong>
                        </span>
                      </div>
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.user.username,
    password: state.user.password,
    login: state.user.is_login,
  };
};

const mapDispatchToProps = {
  changeInput: (e) => changeInputUser(e),
  doLogin: doLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
