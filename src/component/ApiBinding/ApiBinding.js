import React, { useState } from "react";
import back_icon from "../../assets/img/back-icon.svg";
import copy_red from "../../assets/img/copy-red.svg";
import { useNavigate } from "react-router-dom";

const ApiBinding = () => {

    const navigation = useNavigate();
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
            /* you can also use 'auto' behaviour 
               in place of 'smooth' */
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <>
            <section>
                <div className="container">
                    <header>
                        <div className="back-icon" onClick={() => { scrollToTop(); navigation(-1) }}>
                            <img src={back_icon} alt="back_icon" />
                        </div>
                        <div className="header-title">
                            <h5 className="m-0">API Binnding</h5>
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
                                        <div className="col-6">
                                            <div className="text-end see-inst">
                                                <a href="#">See the instructions</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="list-custom">
                                                <ul>
                                                    <li>1. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                                    <li>2. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
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
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="">
                                                <div className="form-group  input-ip-cuatom">
                                                    <img src={copy_red} alt="copy_red" />
                                                    <input type="text" placeholder="546.551.252.25" className="form-control form-control-cus" />
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
                                                <input type="text" placeholder="uNkG9856HG5H^6THr5yGtrYyTGyGYGT6RDCNjTR555556Yg&5^%6FGGHttR" className="form-control form-control-cus" />
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
                                                <input type="text" placeholder="**************************************************************" className="form-control form-control-cus" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col">
                                <button type="button" className="replace-btn">Replace</button>
                            </div>
                            <div className="col">
                                <button type="button" className="unbind-btn">Unbind</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ApiBinding;
