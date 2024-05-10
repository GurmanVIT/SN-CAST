import React from "react";
// import Form from "react-bootstrap/Form";
// import group from "../../../assets/img/group.svg";
// import email_icon from "../../../assets/img/email_icon.svg";
// import password_icon from "../../../assets/img/password_icon.svg";
// import FloatingLabel from "react-bootstrap/FloatingLabel";
// import { useNavigate } from "react-router-dom";
// import support from "../../../assets/img/support.svg";
// import DG from "../../../assets/img/DG.svg";
// import back_back from "../../../assets/img/back_back.svg";
import { VisibilityTwoTone } from "@mui/icons-material";
// import { useDispatch, useSelector } from "react-redux";
// import { signupUser } from "../../../redux/signupSlice";
// import { checkSponsor } from "../../../redux/checkSponsorIdSlice";
// import { ClipLoader } from "react-spinners";
// import { myColors } from "../../../utils/Colors";


const Register = () => {

  // const navigation = useNavigate();

  // const [searchParams, setSearchParams] = useSearchParams();

  // const [showPassword, setShowPassword] = useState(false);
  // const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [firsName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [sponsorId, setSponsorId] = useState("");
  // const [position, setPosition] = useState();


  // const [isValid, setIsValid] = useState(false);


  // const handleEmailChange = (e) => {
  //   const newEmail = e.target.value;
  //   setEmail(newEmail);

  //   // Regular expression for basic email validation
  //   const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,4}$/;
  //   const isValidEmail = emailRegex.test(newEmail);
  //   setIsValid(isValidEmail);
  // };

  // const [checked, setChecked] = useState(false);

  // const handleChange = () => {
  //   setChecked(!checked);
  // };

  // const signupSuccess = useSelector((state) => state.signup.data);
  // const sponsorResponse = useSelector((state) => state.sponsorReducer.data);
  // const isLoading = useSelector((state) => state.signup.isLoading);

  // const dispatch = useDispatch();

  // const [selectedOption, setSelectedOption] = useState("");

  // const handleOptionChange = (event) => {
  //   setSelectedOption(event.target.value);
  // };

  // const onSignUpClick = () => {
  //   if (!isValid) {
  //     alert("Email not valid");
  //   } else if (firsName.length == 0) {
  //     alert("Please enter first name");
  //   } else if (lastName.length == 0) {
  //     alert("Please enter last name");
  //   } else if (password != confirmPassword) {
  //     alert("Your confirm password not matched");
  //   } else if (sponsorId.length == 0) {
  //     alert("Please enter sponsor id");
  //   } else if (selectedOption == null) {
  //     alert("Please select position");
  //   } else if (!checked) {
  //     alert("Please select privacy policies");
  //   } else {
  //     const payload = sponsorId;
  //     dispatch(checkSponsor(payload));
  //   }
  // };

  // useEffect(() => {
  //   if (searchParams.size > 0) {
  //     setSponsorId(searchParams.get("sponser_id"));
  //     setSelectedOption(searchParams.get("position"));
  //   }
  //   if (signupSuccess !== null && signupSuccess.status === 1) {
  //     localStorage.clear()
  //     localStorage.setItem("token", signupSuccess.token);
  //     localStorage.setItem("userId", signupSuccess.data._id);
  //     navigation("/otp");
  //   } else if (signupSuccess != null) {
  //     alert(signupSuccess.message);
  //   }
  // }, [signupSuccess]);

  // useEffect(() => {
  //   if (sponsorResponse != null && sponsorResponse.status == 1) {
  //     const payload = {
  //       email: email,
  //       firstName: firsName,
  //       lastName: lastName,
  //       password: password,
  //       sponserId: sponsorId,
  //       position: selectedOption,
  //     };
  //     dispatch(signupUser(payload));
  //   } else if (sponsorResponse != null) {
  //     alert("Invalid Sponsor ID");
  //   }
  // }, [sponsorResponse]);

  return (
    <div className="home_page">
      <div className="register login">
        <div className="register_section login_section">
          <div className="logo">
            <div className="dg_image">
              <h2>Dapic games</h2>
            </div>
          </div>

          <div className="lottery">
            <h5>Register</h5>
            <p>Please register by email</p>
          </div>

          <div className="secound_section">
            <div className="inner">
              <div className="flex_input d-flex gap-3">
                {/* <FloatingLabel
                  controlId="floatingInput"
                  label="FIRST NAME"
                  className="mb-3 "
                >
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    className="first_name"
                    // disabled={isLoading}
                    // onChange={(e) => setFirstName(e.target.value)}
                    autocomplete="off"
                  />
                </FloatingLabel>

                <FloatingLabel
                  controlId="floatingInput"
                  label="LAST NAME"
                  className="mb-3"
                >
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    // disabled={isLoading}
                    // onChange={(e) => setLastName(e.target.value)}
                    autocomplete="off"
                  />
                </FloatingLabel> */}
              </div>

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

              {/* {email.length !== 0 && !isValid ? (
                <p style={{ color: "red" }}>Invalid email address</p>
              ) : (
                ""
              )} */}

              {/* <FloatingLabel
                controlId="floatingPassword"
                label="PASSWORD"
                className="mb-3"
              >
                <Form.Control
                  // type={showPassword ? "text" : "password"}
                  placeholder="PASSWORD"
                  name="Password"
                  // disabled={isLoading}
                  // value={password}
                  // onChange={(e) => {
                  //   setPassword(e.target.value);
                  // }}
                  autocomplete="off"
                  required
                /> */}
              <button
                type="button"
                className="passwod_btn"
              // onClick={() => {
              //   setShowPassword(!showPassword);
              // }}
              >
                <VisibilityTwoTone />
                {/* {showPassword ? (
                    <VisibilityTwoTone />
                  ) : (
                    <VisibilityOffTwoTone />
                  )} */}
              </button>
              {/* </FloatingLabel> */}

              {/* <FloatingLabel
                controlId="floatingPassword"
                label="CONFIRM PASSWORD"
              >
                <Form.Control
                  // type={showConfirmPassword ? "text" : "password"}
                  placeholder="CONFIRM PASWORD"
                  name="Password"
                  // value={confirmPassword}
                  // disabled={isLoading}
                  // onChange={(e) => {
                  //   setConfirmPassword(e.target.value);
                  // }}
                  autocomplete="off"
                  required
                /> */}
              <button
                type="button"
                className="passwod_btn"
              // onClick={() => {
              //   setShowConfirmPassword(!showConfirmPassword);
              // }}
              >
                <VisibilityTwoTone />

                {/* {showConfirmPassword ? (
                    <VisibilityTwoTone />
                  ) : (
                    <VisibilityOffTwoTone />
                  )} */}
              </button>
              {/* </FloatingLabel> */}

              {/* <FloatingLabel
              controlId="floatingInput"
              label="ENTER SPONSOR ID"
              className="mb-3 mt-3"
            >
              <Form.Control
                type="email"
                placeholder="name@example.com"
                // disabled={isLoading || searchParams.size > 0}
                // value={sponsorId}
                // onChange={(e) => setSponsorId(e.target.value)}
                autocomplete="off"
              />
            </FloatingLabel> */}

              <h6 className="select_position">Select Position</h6>

              <div className="position_left_right">
                <label className="left">
                  <input
                    type="radio"
                  />
                  {"  "}Left
                </label>

                <label className="left">
                  <input
                    className="ms-3"
                    type="radio"
                  />
                  {"   "}Right
                </label>
              </div>

              <div className="checkbox">
                <label>
                  <input
                    type="checkbox"
                  // checked={checked}
                  // onChange={handleChange}
                  />
                  <p>
                    By Logging / SigningUp in, you agree to our{" "}
                    <span>Terms of Services</span> and
                    <span> Privacy Policy</span>
                  </p>
                </label>
              </div>

              <div className="login_link mt-3">
                <button
                  className="login_button"
                // onClick={() => {
                //   onSignUpClick();
                // }}
                >
                  Register
                  {/* {isLoading ? (
                    <ClipLoader color={myColors.txtWhite} />
                  ) : (
                    "Register"
                  )} */}
                </button>
              </div>

              <div className="register_link">
                <button
                  className="register_button"
                // onClick={() => {
                //   navigation("/login");
                // }}
                >
                  I have an account <span>Login</span>
                </button>
              </div>

              <div className="upper">
                <h5>Customer Support</h5>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Register;
