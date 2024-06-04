import React, { useEffect, useState } from "react";
import back_icon from "../../assets/img/back-icon.svg";
import copy_red from "../../assets/img/copy-red.svg";
import { useNavigate } from "react-router-dom";
import { profileData } from "../../redux/profileSlice";
import {
  clearUpdateProfile,
  updateProfileData,
} from "../../redux/updateProfileSlice";
import { useDispatch, useSelector } from "react-redux";

const ApiBinding = () => {

  const navigation = useNavigate();
  const dispatch = useDispatch();

  const [profiledata, setProfileData] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [disabled, setDisabled] = useState(false);

  const profileSuccess = useSelector((state) => state.profileReducer.data);
  const updateProfileSuccess = useSelector(
    (state) => state.updateProfileReducer.data
  );

  useEffect(() => {
    const id = localStorage.getItem("id");
    dispatch(profileData(id));
  }, []);

  useEffect(() => {
    console.log("profileSuccessApi ===>", profileSuccess);
    if (profileSuccess != null && profileSuccess.success === 1) {
      setProfileData(profileSuccess.data);
      setApiKey(profileSuccess.data.api_key);
      setSecretKey(profileSuccess.data.secret_key);
    }
  }, [profileSuccess]);

  const handleApiKey = (e) => {
    setApiKey(e.target.value);
  };

  const onBindClick = () => {
    if (apiKey.length == 0) {
      alert("Please enter Api Key");
    } else if (secretKey.length == 0) {
      alert("Please enter Secret Key");
    } else {
      const id = localStorage.getItem("id");
      const payload = {
        user_id: id,
        is_enable: 1,
        api_key: apiKey,
        secret_key: secretKey,
      };
      console.log("Pay;load ===> ", payload);
      dispatch(updateProfileData(payload));
    }
  };

  useEffect(() => {
    console.log("updateProfileSuccess ===> ", updateProfileSuccess);
    if (updateProfileSuccess != null && updateProfileSuccess.success === 1) {
      alert("Key Updated!");
      setDisabled(false);
      dispatch(clearUpdateProfile());
    }
  }, [updateProfileSuccess]);

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
      /* you can also use 'auto' behaviour 
               in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <section>
        <div className="container">
          <header>
            <div
              className="back-icon"
              onClick={() => {
                scrollToTop();
                navigation(-1);
              }}
            >
              <img src={back_icon} alt="back_icon" />
            </div>
            <div className="header-title">
              <h5 className="m-0">API Binding</h5>
            </div>
          </header>
          <div className="bottom-content">
            <div className="row">
              <div className="col">
                <div className="card-custom">
                  <div className="row">
                    <div className="col-6">
                      <div className="">
                        <h6>Precautions</h6>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="list-custom">
                        <ul>
                          <li>
                            1. Please confirm that the API permission has checked Enable Spot And Margin Trading
                          </li>
                          <li>
                            2. Please enter the correct API, please do not enter special characters
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <div className="card-custom">
                  <div className="row">
                    <div className="col-6">
                      <div className="">
                        <h6>Ip Group binding</h6>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="">
                        <p>
                          For security, Binance Exchange recommends binding the server IP address when creating the API. For users who need to bind the IP address, click Edit permissions in the upper right corner after the API is created, and click in the IP address permission column to restrict access to only trusted IPs. (Recommended) option, click the copy button to copy the IP group to the input box and click OK, after adding, click save in the upper right corner.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="">
                        <div className="form-group  input-ip-cuatom">
                          <img src={copy_red} alt="copy_red" onClick={() => {
                            navigator.clipboard.writeText("206.189.132.34"
                            );
                            alert("Address Copy");
                          }} style={{ cursor: "pointer" }} />
                          <p className="form-control form-control-cus">
                            206.189.132.34
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <div className="card-custom">
                  <div className="row">
                    <div className="col-4 d-flex align-items-center justify-content-start">
                      <div className="">
                        <p className="m-0">Api Key</p>
                      </div>
                    </div>
                    <div className="col-8">
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Api Key"
                          className="form-control form-control-cus"
                          disabled={!disabled}
                          value={apiKey}
                          onChange={(e) => {
                            handleApiKey(e);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-4 d-flex align-items-center justify-content-start">
                      <div className="">
                        <p className="m-0">Secret Key</p>
                      </div>
                    </div>
                    <div className="col-8">
                      <div className="form-group">
                        <input
                          type="password"
                          placeholder="*********"
                          className="form-control form-control-cus"
                          disabled={!disabled}
                          value={secretKey}
                          onChange={(e) => {
                            setSecretKey(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {disabled ? (
              <div className="row mt-4">
                <div className="col">
                  <button
                    type="button"
                    className="replace-btn"
                    onClick={() => onBindClick()}
                  >
                    Bind
                  </button>
                </div>
              </div>
            ) : (
              <div className="row mt-4">
                <div className="col">
                  <button
                    type="button"
                    className="replace-btn"
                    onClick={() => setDisabled(true)}
                  >
                    Replace
                  </button>
                </div>
                <div className="col">
                  <button type="button" className="unbind-btn">
                    Unbind
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ApiBinding;
