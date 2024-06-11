import React, { useEffect, useState } from "react";
import back_icon from "../../assets/img/back-icon.svg";
import binance from "../../assets/img/binance_img.jfif";
import bybit from "../../assets/img/bybit_img.jfif";
import { useNavigate } from "react-router-dom";

const BindExchange = () => {

    const navigation = useNavigate();

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

                    <div>
                        <div className="binacne_img">
                            <img src={binance} alt="binance" onClick={() => navigation('/api_binding')} />
                        </div>
                        {/* <div className="bybit_img">
                            <img src={bybit} alt="bybit" onClick={() => navigation('/bybit_api_binding')} />
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    );
};

export default BindExchange;
