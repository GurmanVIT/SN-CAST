import React, { useEffect, useState } from "react";
import logo_main from "../../assets/img/logo-main.svg";
import logout_img from "../../assets/img/Logout.svg";
import api_img from "../../assets/img/api.svg";
import copy from "../../assets/img/copy.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { profileData } from "../../redux/profileSlice";

const Home = () => {

    const navigation = useNavigate();
    const dispatch = useDispatch();

    const [profiledata, setProfileData] = useState("");

    const profileSuccess = useSelector((state) => state.profileReducer.data);

    useEffect(() => {
        const id = localStorage.getItem("id")
        dispatch(profileData(id))
    }, [])

    useEffect(() => {
        console.log("profileSuccess ===>", profileSuccess)
        if (profileSuccess != null && profileSuccess.success === 1) {
            setProfileData(profileSuccess.data);
        }
    }, [profileSuccess]);

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <>
            <section className="" id="">
                <div className="container">
                    {profiledata != null &&
                        <div className="content-mid-index">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="logo-top text-center">
                                        <img src={logo_main} width="300" className="img-fluid" alt="logo_main" draggable="false" />
                                    </div>
                                    <div className="logout-btn">
                                        <a href="#"><img src={logout_img} width="25" className="img-fluid" alt="logout_img" draggable="false" onClick={() => navigation('/login')} /></a>
                                    </div>
                                    <div className="user-details">
                                        <div className="row">
                                            <div className="col-6 d-flex align-items-center justify-content-start">
                                                <div className="line-right">
                                                    <h3>{profiledata.name}</h3>
                                                    <p>{profiledata.user_id}</p>
                                                    <p><span>Rank :</span> {profiledata.rankName}</p>
                                                    <p className="m-0"><span>My Cource Package :</span>{profiledata.package_amount}</p>
                                                </div>
                                            </div>
                                            <div className="col-6 d-flex align-items-center justify-content-start">
                                                <div className="">
                                                    <p>Earning Wallet</p>
                                                    <h3>{profiledata.earning_wallet}</h3>
                                                    <p>Activation Wallet</p>
                                                    <h3>{profiledata.balance}</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="line"></div>
                                        <div className="row">
                                            <div className="col text-end d-flex align-items-center justify-content-end">
                                                <div className="copy-link">
                                                    <p className="m-0">Copy refferal link <img src={copy} alt="copy" /></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom-content">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="api-bind">
                                            <a href="#">
                                                <img src={api_img} className="img-fluid" alt="api_img" draggable="false" onClick={() => { scrollToTop(); navigation('/api_binding') }} />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="text-end">
                                            <button type="button" className="btn-new" onClick={() => { scrollToTop(); navigation('/deposit') }}>Deposit</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <div className="col">
                                        <ul className="nav nav-tabs border-0" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link tabs-link-custom " id="simple-tab-0" data-bs-toggle="tab"
                                                    href="#simple-tabpanel-0" role="tab" aria-controls="simple-tabpanel-0" aria-selected="true">Open
                                                    Orders
                                                </a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link tabs-link-custom" id="simple-tab-1" data-bs-toggle="tab" href="#simple-tabpanel-1"
                                                    role="tab" aria-controls="simple-tabpanel-1" aria-selected="false">
                                                    Position
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="tab-content pt-4" id="tab-content">
                                            <div className="tab-pane active" id="simple-tabpanel-0" role="tabpanel" aria-labelledby="simple-tab-0">
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="card-custom">
                                                            <div className="card-header-inner">
                                                                <h4>BNBUSDT</h4>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-6">
                                                                    <div className="">
                                                                        <p><span>Quantity :</span> 0.07</p>
                                                                        <p><span>Price :</span> $5.99</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-6">
                                                                    <div className="">
                                                                        <p><span>Order Id :</span> 56546544</p>
                                                                        <p><span>Order Type :</span> STOP_MARKET</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col">
                                                                    <button type="button" className="cancel-btn">Cancel</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane" id="simple-tabpanel-1" role="tabpanel" aria-labelledby="simple-tab-1">Tab 2
                                                selected
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </section>
        </>
    );
};

export default Home;
