import React from "react";
// import DG from "../../../assets/img/DG.svg";
// import FloatingLabel from "react-bootstrap/FloatingLabel";
// import Form from "react-bootstrap/Form";
// import email_icon from "../../../assets/img/email_icon.svg";
// import { useNavigate } from "react-router";
// import { useDispatch, useSelector } from "react-redux";
// import { forgotUser } from "../../../redux/forgotSlice";
// import { ClipLoader } from "react-spinners";
// import back_back from "../../../assets/img/back_back.svg";

const Forgot = () => {

  // const navigation = useNavigate();
  // const [email, setEmail] = useState("");
  // const [isValid, setIsValid] = useState(false);
  // const dispatch = useDispatch();
  // const forgotResponse = useSelector((state) => state.forgotReducer.data);
  // const isLoading = useSelector((state) => state.forgotReducer.isLoading);

  // const handleEmailChange = (e) => {
  //   const newEmail = e.target.value;
  //   setEmail(newEmail);

  //   // Regular expression for basic email validation
  //   const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,4}$/;
  //   const isValidEmail = emailRegex.test(newEmail);
  //   setIsValid(isValidEmail);
  // };

  // const onForgotClick = () => {
  //   if (email.length === 0) {
  //     alert("Please enter email");
  //   } else if (!isValid) {
  //     alert("Please enter valid email");
  //   } else {
  //     const payload = {
  //       email: email,
  //     };
  //     dispatch(forgotUser(payload));
  //   }
  // };

  // useEffect(() => {
  //   if (forgotResponse != null && forgotResponse.status === 1) {
  //     alert("Please check your mail for change password!");
  //     navigation("/login");
  //   } else if (forgotResponse != null) {
  //     alert(forgotResponse.message);
  //   }
  // }, [forgotResponse]);

  return (
    <div className="forgot_sec">
      <div className="screen_forgot">
        <div className="logo">
          <div className="dg_image">
            <h2>Dapic games</h2>
          </div>
        </div>

        <div className="lottery">
          <h5>Forgot</h5>
        </div>

        <div className="inner">
          {/* <FloatingLabel
            controlId="floatingInput"
            label="ENTER YOUR  EMAIL ADDRESS"
            className="mb-3"
          >
            <Form.Control
              type="email"
              placeholder="name@example.com"
              // disabled={isLoading}
              // onChange={(e) => handleEmailChange(e)}
              autocomplete="off"
            />
          </FloatingLabel> */}
          {/* {email.length != 0 && !isValid ? (
            <p style={{ color: "red", fontSize: "14px" }}>Invalid email address</p>
          ) : (
            ""
          )} */}

          <button
            type="button"
            className="login_button mt-4"
          // onClick={() => {
          //   onForgotClick();
          // }}
          >
            Forgot
            {/* {isLoading ? <ClipLoader color="#FFF" /> : "Forgot"} */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
