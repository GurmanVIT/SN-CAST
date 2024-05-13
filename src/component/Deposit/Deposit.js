import React, { useEffect, useState } from "react";
import back_icon from "../../assets/img/back-icon.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Deposit = () => {

    const navigation = useNavigate();

    // cosnt[depositData, setDepositData] = useState();

    // const depositSuccess = useSelector((state) => state.depositReducer.data);

    // useEffect(() => {
    //     console.log("depositSuccess ===>", depositSuccess)
    //     if (depositSuccess != null && depositSuccess.success === 1) {
    //         setDepositData(depositSuccess.data);
    //     }
    // }, [depositSuccess]);


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
                        <div className="back-icon">
                            <img src={back_icon} alt="back_icon" onClick={() => { scrollToTop(); navigation(-1) }} />
                        </div>
                        <div className="header-title">
                            <h5 className="m-0">Deposit</h5>
                        </div>
                    </header>
                    <div className="bottom-content">
                        <div className="row">
                            <div className="col">
                                <div className="card-custom">
                                    <div className="row">
                                        <div className="col">
                                            <div className="qr-custom">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="qu-code text-center">
                                                <img src="https://pngimg.com/d/qr_code_PNG20.png" />
                                                <p>2x2x1d21dd22224526</p>
                                                <button type="button" className="replace-btn">Copy Address</button>
                                            </div>
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

export default Deposit;
