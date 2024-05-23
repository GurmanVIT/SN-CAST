import React, { useEffect, useState } from "react";
import logo_main from "../../assets/img/logo-main.svg";
import logout_img from "../../assets/img/Logout.svg";
import api_img from "../../assets/img/api.svg";
import copy from "../../assets/img/copy.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { profileData } from "../../redux/profileSlice";
import { getAllOpenOrdersData } from "../../redux/getAllOpenOrdersSlice";
import { cancelOrderData } from "../../redux/cancelOrderSlice";
import { closeTradeData } from "../../redux/closeTradeSlice";
import { getAllOrdersData } from "../../redux/getAllOrdersSlice";
import { ClipLoader } from "react-spinners";


const Home = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const [profiledata, setProfileData] = useState("");
  const [openOrder, setOpenOrder] = useState(null);
  const [getAllOrders, setGetAllOrders] = useState(null);
  const [active, setInActive] = useState(1);
  const [activeWallet, setActiveWallet] = useState(0);
  const [earningWallet, setEarningWallet] = useState(0);

  const profileSuccess = useSelector((state) => state.profileReducer.data);
  const openOrdersSuccess = useSelector((state) => state.getAllOpenOrdersReducer.data);
  const getAllOrdersSuccess = useSelector((state) => state.getAllOrdersReducer.data);
  const closeTradeReducer = useSelector((state) => state.closeTradeReducer.data);
  const isLoading = useSelector((state) => state.closeTradeReducer.isLoading);
  const cancelOrderReducer = useSelector((state) => state.cancelOrderReducer.data);
  const isLoadingCancel = useSelector((state) => state.cancelOrderReducer.isLoading);

  useEffect(() => {
    const id = localStorage.getItem("id");
    dispatch(profileData(id));
  }, []);

  useEffect(() => {
    const id = localStorage.getItem("id");
    dispatch(getAllOpenOrdersData(id));
  }, [active]);

  useEffect(() => {
    const id = localStorage.getItem("id");
    dispatch(getAllOrdersData(id));
  }, [active]);

  useEffect(() => {
    console.log("Profile Data ===> ", profileSuccess);
    if (profileSuccess != null && profileSuccess.success === 1) {
      setProfileData(profileSuccess.data);
      const actWallet = parseFloat(profileSuccess.data.balance);
      const roundedNumber = actWallet.toFixed(3);
      console.log("Balance ===> ", roundedNumber);
      setActiveWallet(roundedNumber);
      if (
        profileSuccess.data.earning_wallet != null &&
        profileSuccess.data.earning_wallet != 0
      ) {
        const earnWallet = parseFloat(profileSuccess.data.earning_wallet);
        const earning_wallet = earnWallet.toFixed(3);
        setEarningWallet(earning_wallet);
      }
    }
  }, [profileSuccess]);

  useEffect(() => {
    console.log("openOrdersSuccess ===>", openOrdersSuccess);
    if (openOrdersSuccess != null && openOrdersSuccess.success === 1) {
      setOpenOrder(openOrdersSuccess.data);
    }
  }, [openOrdersSuccess]);

  useEffect(() => {
    console.log("getAllOrdersSuccess ===>", getAllOrdersSuccess);
    if (getAllOrdersSuccess != null && getAllOrdersSuccess.success === 1) {
      setGetAllOrders(getAllOrdersSuccess.data);
    }
  }, [getAllOrdersSuccess]);

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

  const onCancelClick = (item) => {
    const id = localStorage.getItem("id");
    const payload = {
      orderId: item.orderId,
      userId: id,
      symbol: item.symbol,
      type: "1",
      tradeType: item.type,
    };

    dispatch(cancelOrderData(payload));
  };


  const onCloseClick = (item) => {
    const id = localStorage.getItem("id");
    const payload = {
      orderId: item.orderId,
      userId: id,
      type: "1",
    };

    dispatch(closeTradeData(payload));
  };

  useEffect(() => {
    if (closeTradeReducer != null && closeTradeReducer.success === 1) {
      const id = localStorage.getItem("id");
      dispatch(getAllOrdersData(id));
    }
  }, [closeTradeReducer]);
  useEffect(() => {
    if (cancelOrderReducer != null && cancelOrderReducer.success === 1) {
      const id = localStorage.getItem("id");
      dispatch(getAllOpenOrdersData(id));
    }
  }, [cancelOrderReducer]);

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <section className="" id="">
        <div className="container">
          <div className="content-mid-index">
            {profiledata != null && (
              <div className="row">
                <div className="col-lg-12">
                  <div className="logo-top text-center">
                    <img
                      src={logo_main}
                      width="300"
                      className="img-fluid"
                      alt="logo_main"
                      draggable="false"
                    />
                  </div>
                  <div className="logout-btn">
                    <a href="/login">
                      <img
                        src={logout_img}
                        width="25"
                        className="img-fluid"
                        alt="logout_img"
                        draggable="false"
                      />
                    </a>
                  </div>
                  <div className="user-details">
                    <div className="row">
                      <div className="col-6 d-flex align-items-center justify-content-start">
                        <div className="line-right">
                          <h3>{profiledata.name}</h3>
                          <p>{profiledata.user_id}</p>
                          <p>
                            <span>Rank :</span> {profiledata.rankName}
                          </p>
                          <p className="m-0">
                            <span>My Cource Package :</span>
                            {profiledata.package_amount}
                          </p>
                        </div>
                      </div>
                      <div className="col-6 d-flex align-items-center justify-content-start">
                        <div className="">
                          <p>Earning Wallet</p>
                          <h3>{earningWallet}</h3>
                          <p>Activation Wallet</p>
                          <h3>{activeWallet}</h3>
                        </div>
                      </div>
                    </div>
                    <div className="line"></div>
                    <div className="row">
                      <div className="col text-end d-flex align-items-center justify-content-end">
                        <div className="copy-link">
                          <p className="m-0">
                            Copy refferal link <img src={copy} alt="copy" />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="bottom-content">
              <div className="row">
                <div className="col-6">
                  <div className="api-bind">
                    <a href="#">
                      <img
                        src={api_img}
                        className="img-fluid"
                        alt="api_img"
                        draggable="false"
                        onClick={() => {
                          scrollToTop();
                          navigation("/api_binding");
                        }}
                      />
                    </a>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-end">
                    <button
                      type="button"
                      className="btn-new"
                      onClick={() => {
                        scrollToTop();
                        navigation("/deposit");
                      }}
                    >
                      Deposit
                    </button>
                  </div>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col">
                  <div className="nav nav-tabs border-0 " role="tablist">
                    <button
                      type="button"
                      style={{
                        backgroundColor: active === 1 ? "transparent" : "#fff",
                        color: "#000",
                        border: "none",
                        borderBottom:
                          active === 1
                            ? "2px solid #000"
                            : "2px solid transparent",
                        padding: "7px 10px",
                      }}
                      onClick={() => setInActive(1)}
                    >
                      Open Orders
                    </button>
                    <button
                      type="button"
                      style={{
                        backgroundColor: active === 2 ? "transparent" : "#fff",
                        color: "#000",
                        border: "none",
                        borderBottom:
                          active === 2
                            ? "2px solid #000"
                            : "2px solid transparent",
                        padding: "7px 10px",
                      }}
                      onClick={() => setInActive(2)}
                    >
                      Position
                    </button>
                  </div>


                  {active === 1 ? (
                    <div className="tab-content pt-4" id="tab-content">
                      {openOrder != null &&
                        openOrder.map((item) => (
                          <div
                            className="tab-pane active mb-3"
                            id="simple-tabpanel-0"
                            role="tabpanel"
                            aria-labelledby="simple-tab-0"
                          >
                            <div className="row">
                              <div className="col">
                                <div className="card-custom">
                                  <div className="card-header-inner">
                                    <h4>
                                      {item.symbol}
                                    </h4>
                                  </div>
                                  <div className="row">
                                    <div className="col-6">
                                      <div className="">
                                        <p>
                                          <span>Quantity :</span>
                                          {item.origQty}
                                        </p>
                                        <p>
                                          <span>Price :</span>
                                          {item.price}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="col-6">
                                      <div className="">
                                        <p>
                                          <span>Order Id :</span>
                                          {item.orderId}
                                        </p>
                                        <p>
                                          <span>Order Type :</span>
                                          {item.origType}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col">
                                      <button
                                        type="button"
                                        className="cancel-btn"
                                        onClick={() => onCancelClick(item)}
                                      >
                                        {isLoadingCancel ? (
                                          <ClipLoader color={"#000"} />
                                        ) : (
                                          "CANCEL"
                                        )}
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      <div
                        className="tab-pane"
                        id="simple-tabpanel-1"
                        role="tabpanel"
                        aria-labelledby="simple-tab-1"
                      >
                        Tab 2 selected
                      </div>
                    </div>
                  ) : (
                    ""
                  )}

                  {active === 2 ? (
                    <div className="tab-content pt-4 " id="tab-content">
                      {getAllOrders != null &&
                        getAllOrders.map((item) => (
                          <div
                            className="tab-pane active mb-3"
                            id="simple-tabpanel-0"
                            role="tabpanel"
                            aria-labelledby="simple-tab-0"
                          >
                            <div className="row">
                              <div className="col">
                                <div className="card-custom">
                                  <div className="card-header-inner">
                                    <h4>
                                      {item.symbol}
                                    </h4>
                                  </div>
                                  <div className="row">
                                    <div className="col-6">
                                      <div className="">
                                        <p>
                                          <span>Quantity :</span>
                                          {item.origQty}
                                        </p>
                                        <p>
                                          <span>Price :</span>
                                          {item.price}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="col-6">
                                      <div className="">
                                        <p>
                                          <span>Order Id :</span>
                                          {item.orderId}
                                        </p>
                                        <p>
                                          <span>Order Type :</span>
                                          {item.origType}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col">
                                      <button
                                        type="button"
                                        className="cancel-btn"
                                        onClick={() => onCloseClick(item)}
                                      >
                                        {isLoading ? (
                                          <ClipLoader color={"#000"} />
                                        ) : (
                                          "CLOSE"
                                        )}
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      <div
                        className="tab-pane"
                        id="simple-tabpanel-1"
                        role="tabpanel"
                        aria-labelledby="simple-tab-1"
                      >
                        Tab 2 selected
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;