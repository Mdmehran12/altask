import { Grid, TextField } from "@mui/material";
// import Link from "link";
import React, { useState } from "react";
import "animate.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import LogoSrc from "../../assets/images/altask-logo.png";

const Login = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // const handleLogin = (event) => {
  //   if (login === "user" && password === "useradmin") {
  //     navigate("/dashboard");
  //   } else {
  //     toast.error("please fill the required list");
  //     console.log("alert");
  //     alert("wrong");
  //     // alert("please enter correct login credentials");
  //   }
  //   event.preventDefault();
  // };

  const handleLogin = (event) => {
    if (login === "user" && password === "useradmin") {
      // Redirect to "/dashboard" if login is successful
      navigate("/dashboard");
      console.log("hello");
    } else {
      // Display an error message if login fails
      toast.error("Please enter correct login credentials");
      //  alert("please enter correct login credentials");
    }

    // Prevent the default form submission
    event.preventDefault();
  };

  // React.useEffect(() => {
  //   history.pushState(null, null, location.href);
  //   window.onpopstate = function () {
  //     history.go(1);
  //   };
  // }, []);

  return !showSignUp ? (
    <>
      {/* login page starts from here */}
      <div className="login-page-main ">
        <div className="login-box">
          <div className="login-box-in">
            <div className="login-image">
              <div className="login-image-color">
                <div className="logo">
                  {/* <img src="/images/logo-white.png" alt="" /> */}
                  <img src={LogoSrc} alt="" />
                </div>

                <div className="quote-content">
                  <div className="desc ">
                    <h1 style={{ fontWeight: "500", fontSize: "45px" }}>
                      {/* Planz Is streamlined and efficient to-do list app for
                      managing your tasks and staying organized. */}
                      {/* Master your schedule, master your life */}
                      Achieve More, Stress Less with Altask.
                    </h1>
                    {/* <br /> */}
                    {/* <h5 className="pt-3">
                      --Master your schedule, master your life--
                    </h5> */}
                  </div>
                </div>
              </div>
            </div>

            <div
              className="login-content animate__fadeInDown "
              style={{ position: "relative" }}
            >
              <div className="log-phone">
                <img src="/images/logo.png" alt="" />
              </div>
              <h2 className="welcome-text">
                {" "}
                <span>Welcome</span> Back
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: "600",
                  paddingBottom: "45px",
                  color: "#454545",
                }}
              >
                Please Enter Your Details
              </p>
              <form action="">
                <Grid container spacing={2} className="log-list">
                  <Grid item xs={12} md={12}>
                    <TextField
                      id="standard-basic fullWidth"
                      label="Email"
                      variant="standard"
                      style={{ maxWidth: "100%", width: "55%" }}
                      onChange={(e) => {
                        setLogin(e.target.value);
                      }}
                      value={login}
                    />
                  </Grid>

                  <Grid item xs={12} md={12}>
                    <TextField
                      id="standard-basic fullWidth"
                      label="Password"
                      variant="standard"
                      style={{ maxWidth: "100%", width: "55%" }}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      value={password}
                    />
                  </Grid>

                  <Grid item xs={12} md={12}>
                    <div
                      style={{
                        maxWidth: "100%",
                        width: " 55%",
                        margin: "auto",
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <p>Forgot Password?</p>
                    </div>
                  </Grid>

                  <Grid item xs={12} md={12}>
                    <Link>
                      <button
                        className="btn log-btn mt-2"
                        onClick={handleLogin}
                      >
                        log in
                      </button>
                    </Link>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <div
                      className="planz-account"
                      onClick={() => {
                        setShowSignUp(true);
                      }}
                    >
                      <Link href="">
                        Don’t have a ALTASK Account yet?
                        <span> Sign Up Now</span>
                      </Link>
                    </div>
                  </Grid>
                </Grid>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* login page ends here */}
      {/* <button onClick={()=> router.push("/home/main")}>tst</button> */}
    </>
  ) : (
    <>
      {/* signup page starts from here */}
      <div className="login-page-main ">
        <div className="login-box">
          <div className="login-box-in">
            <div className="login-image">
              <div className="login-image-color">
                <div className="logo">
                  {/* <img src="/images/logo-white.png" alt="" /> */}
                  <img src={LogoSrc} alt="" />
                </div>

                <div className="quote-content">
                  <div className="desc ">
                    <h1 style={{ fontWeight: "500", fontSize: "45px" }}>
                      {/* Planz Is streamlined and efficient to-do list app for
                      managing your tasks and staying organized. */}
                      Achieve More, Stress Less with Altask.
                    </h1>
                    {/* <br /> */}
                    {/* <h5 className="pt-3">
                      --Master your schedule, master your life--
                    </h5> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="login-content" style={{ position: "relative" }}>
              <div className="log-phone">
                <img src="/images/logo.png" alt="" />
              </div>
              <h2>Welcome 👋</h2>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: "600",
                  paddingBottom: "45px",
                  color: "#454545",
                }}
              >
                Create your ALTASK Account
              </p>
              <form action="">
                <Grid container spacing={2} className="log-list">
                  <Grid item xs={12} md={12}>
                    <TextField
                      id="standard-basic fullWidth"
                      label="Name"
                      variant="standard"
                      style={{ maxWidth: "100%", width: "55%" }}
                    />
                  </Grid>
                  {/* number */}
                  <Grid item xs={12} md={12}>
                    <TextField
                      id="standard-basic fullWidth"
                      label="Number"
                      variant="standard"
                      style={{ maxWidth: "100%", width: "55%" }}
                    />
                  </Grid>
                  {/* email */}
                  <Grid item xs={12} md={12}>
                    <TextField
                      id="standard-basic fullWidth"
                      label="Email"
                      variant="standard"
                      style={{ maxWidth: "100%", width: "55%" }}
                    />
                  </Grid>
                  {/* password */}
                  <Grid item xs={12} md={12}>
                    <TextField
                      id="standard-basic fullWidth"
                      label="Password"
                      variant="standard"
                      style={{ maxWidth: "100%", width: "55%" }}
                    />
                  </Grid>

                  {/* confirm password */}
                  <Grid item xs={12} md={12}>
                    <TextField
                      id="standard-basic fullWidth"
                      label="Confirm Password"
                      variant="standard"
                      style={{ maxWidth: "100%", width: "55%" }}
                    />
                  </Grid>

                  <Grid item xs={12} md={12}>
                    <div
                      style={{
                        maxWidth: "100%",
                        width: " 55%",
                        margin: "auto",
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <p>Forgot Password?</p>
                    </div>
                  </Grid>

                  <Grid item xs={12} md={12}>
                    <button
                      className="btn log-btn mt-2"
                      onClick={(event) => {
                        // event.preventDefault();
                        // router.push("/home/main");
                      }}
                    >
                      Sign Up
                    </button>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <div
                      className="planz-account"
                      onClick={() => {
                        setShowSignUp(false);
                      }}
                    >
                      <Link href="">
                        Already have a ALTASK Account<span> Login Now</span>
                      </Link>
                    </div>
                  </Grid>
                </Grid>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* signup page ends here */}
    </>
  );
};

export default Login;
