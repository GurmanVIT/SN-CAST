import React, { useEffect, useState } from "react";
import logo_login from "../../assets/img/logo-login.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginData } from "../../redux/loginSlice";
import { ClipLoader } from "react-spinners";
import axios from "axios";

const Login = () => {
  const navigation = useNavigate();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // Regular expression for basic email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,4}$/;
    const isValidEmail = emailRegex.test(newEmail);
    setIsValid(isValidEmail);
  };

  const loginSuccess = useSelector((state) => state.loginReducer.data);
  const isLoading = useSelector((state) => state.loginReducer.loading);

  const dispatch = useDispatch();

  const onLoginClick = () => {
    if (email.length == 0) {
      alert("Please enter userId!");
    } else if (password.length == 0) {
      alert("Please enter password");
    } else {
      const payload = {
        user_id: email,
        password: password,
      };

      // const payload = {
      //   device_id: "abc",
      //   email: email,
      //   password: password,
      // };
      dispatch(loginData(payload));
      //   let data = JSON.stringify({
      //     email: "autonuke@gmail.com",
      //     password: 7924,
      //   });

      //   let config = {
      //     method: "post",
      //     maxBodyLength: Infinity,
      //     url: "https://dev.memate.com.au/api/v1/m/login/",
      //     mode: "no-cors",
      //     headers: {
      //       "Content-Type": "application/json",
      //       // "Access-Control-Allow-Origin": "*",
      //     },
      //     data: data,
      //   };

      //   axios
      //     .request(config)
      //     .then((response) => {
      //       console.log(JSON.stringify(response.data));
      //     })
      //     .catch((error) => {
      //       console.log(error);
      //     });
    }
  };

  useEffect(() => {
    if (loginSuccess != null && loginSuccess.success == 1) {
      localStorage.setItem("id", loginSuccess.data.id);
      navigation("/home");
    } else if (loginSuccess != null) {
      alert(loginSuccess.message);
    }
  }, [loginSuccess]);

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <section className="login" id="login">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="content-mid">
                <div className="mng-login-des">
                  <div className="login-bg">
                    <div className="login-text text-center">
                      <img src={logo_login} alt="logo_login" width="100" />
                      <h4 className="mt-3">Sign in to your account</h4>
                      <p>Please sign in to enter</p>
                    </div>
                    <div className="form-style mt-4">
                      <form>
                        <div className="form-group pb-2">
                          <input
                            type="email"
                            disabled={isLoading}
                            placeholder="Enter User Id"
                            className="form-control form-control-cus"
                            value={email}
                            onChange={(e) => {
                              handleEmailChange(e);
                            }}
                            autocomplete="off"
                          />
                        </div>
                        <div className="form-group pb-1 add-icon-input mt-2">
                          <input
                            type="password"
                            disabled={isLoading}
                            placeholder="Password"
                            className="form-control form-control-cus"
                            id="exampleInputPassword1"
                            value={password}
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                            autocomplete="off"
                            required
                          />
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-2">
                          <div className="d-flex align-items-center">
                            <span className="Remember-me"></span>
                          </div>
                          {/* <div className="forgot-pass"><a href="#" className="text-dark">Forgot Password</a></div> */}
                        </div>
                        <div className="pb-3 mt-4">
                          <button
                            type="button"
                            className="btn signin-btn"
                            onClick={() => {
                              onLoginClick();
                              scrollToTop();
                            }}
                          >
                            {isLoading ? (
                              <ClipLoader color={"#fff"} />
                            ) : (
                              "Login"
                            )}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
