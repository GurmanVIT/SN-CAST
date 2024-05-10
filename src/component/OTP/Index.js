import React from "react";
// import DG from "../../../assets/img/DG.svg";
import OTPInput from "react-otp-input";
// import { useDispatch, useSelector } from "react-redux";
// import { clearOtpData, otpAuth } from "../../../redux/otpSlice";
// import { clearResendData, resendOtpApi } from "../../../redux/resendOtpSlice";
// import { ClipLoader } from "react-spinners";
// import back_back from '../../../assets/img/back_back.svg';
// import fifty_coins2 from "../../../assets/img/fifty_coins2.svg";
// import close from "../../../assets/img/close.svg";
// import Modal from "react-modal";
// import { clearSignUpData } from "../../../redux/signupSlice";


const customStyles = {
  content: {
    top: "initial",
    left: "50%",
    right: "auto",
    bottom: "0",
    marginRight: "-50%",
    transform: "translate(-50%, 0)",
    maxWidth: "100%",
    width: "420px",
    borderRadius: "5px",
    backgroundColor: "#74707008",
    borderRadius: "14px 14px 0 0",
  },
};


const Index = () => {

  // const navigation = useNavigate();

  // const [otp, setOtp] = useState("");
  // const signupSuccess = useSelector((state) => state.signup.data);
  // const loginSuccess = useSelector((state) => state.login.data);
  // const otpSuccess = useSelector((state) => state.otpReducer.data);
  // const resendOtpResponse = useSelector((state) => state.resendOtpReducer.data);
  // const isLoadingResend = useSelector(
  //   (state) => state.resendOtpReducer.isLoading
  // );
  // const isLoading = useSelector((state) => state.otpReducer.isLoading);
  // const userId = localStorage.getItem("userId");

  // const [isWinOpen, setWinOpen] = useState(false);

  // const dispatch = useDispatch();

  // const onOtpClick = () => {
  //   if (otp.length < 6) {
  //     alert("Please enter valid otp");
  //   } else {
  //     const type = signupSuccess != null ? 1 : 3;
  //     const id =
  //       signupSuccess != null ? signupSuccess.data._id : loginSuccess.data._id;
  //     const payload = {
  //       type: type, //1 for user verification and 3 for login verifications
  //       otp: otp,
  //       _id: id,
  //       fcmToken: "Anmol",
  //     };

  //     dispatch(otpAuth(payload));
  //   }
  // };

  // useEffect(() => {
  //   return () => {
  //     dispatch(clearOtpData());
  //     dispatch(clearResendData());
  //     dispatch(clearSponsorData());
  //   };
  // }, []);

  // const onResendClick = () => {
  //   const payload = {
  //     email:
  //       signupSuccess != null
  //         ? signupSuccess.data.email
  //         : loginSuccess.data.email,
  //   };
  //   dispatch(resendOtpApi(payload));
  // };

  // useEffect(() => {
  //   if (otpSuccess != null && otpSuccess.status == 1) {
  //     localStorage.clear();
  //     dispatch(clearOtpData())
  //     setWinOpen(true);

  //   } else if (otpSuccess != null) {
  //     alert(otpSuccess.message);
  //   }
  // }, [otpSuccess]);

  // useEffect(() => {
  //   if (resendOtpResponse != null) {
  //     alert("Please check your mail for verification code");
  //   } else if (resendOtpResponse != null) {
  //     alert(resendOtpResponse.message);
  //   }
  // }, [resendOtpResponse]);

  return (
    <div className="otp">
      <div className="screen_otp">
        <div className="logo">
          <div className="dg_image">
            <h2>Dapic games</h2>
          </div>
        </div>

        <div className="lottery">
          <h5>Enter verification code</h5>
          <p>Enter 6-digit code we just texted to your email address.</p>
        </div>

        <form
          method="get"
          className="digit-group"
          data-group-name="digits"
          data-autosubmit="false"
        >
          <OTPInput
            // value={otp}
            // onChange={(value) => setOtp(value)}
            numInputs={6}
            containerStyle={{ marginTop: 40 }}
            // inputStyle={{ width: "50px", height: "50px" }}
            inputType="number"
            renderSeparator={<span></span>}
          // renderInput={(props) => <input {...props} />}
          />
          <br />
          <br />
          <button
            type="button"
            className="login_button"
          // onClick={() => {
          //   onOtpClick();
          // }}
          >
            Submit
            {/* {isLoading ? <ClipLoader color="#FFF" /> : "Submit"} */}
          </button>

          <button
            type="button"
            className="register"
          // onClick={() => {
          //   onResendClick();
          // }}
          >
            Resend Code
            {/* {isLoadingResend ? <ClipLoader color="#6561C0 " /> : "Resend Code"} */}
          </button>
        </form>

        {/* <Modal
          isOpen={isWinOpen}
          style={customStyles}
          onRequestClose={() => setWinOpen(false)}
        >
          <>
            <div className="you_win">
              <div className="winner_width">
                <div className="winner_reward">
                  <img src={fifty_coins2} alt="fifty_coins2" className="win_img" onClick={() => {
                    setWinOpen(false);
                    navigation("/login");
                  }} style={{ height: "400px", maxWidth: "350px" }} />
                  <div className="close_btn">
                    <img
                      src={close}
                      alt="close"
                      className="close_img"

                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        </Modal> */}
      </div>
    </div>
  );
};

export default Index;
