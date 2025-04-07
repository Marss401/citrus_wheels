import { FaRegUser } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import SignUp from "./SignUp";
import { launch, play } from "../assets/images";
import { useState } from "react";

const SignIn = () => {
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive((s) => !s);
  };

  return (
    <div className={active ? "sign-up-mode auth-container" : "auth-container"}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="" className="sign-in-form auth-form">
            <h2 className="title"> Sign in</h2>
            <div className="input-field">
              <FaRegUser className="input-icon" />
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <CiLock className="input-icon" />
              <input placeholder="Password" type="password" />
            </div>
            <button type="submit" className="btn btn-solid">
              {" "}
              Login
            </button>
            <p className="social-text"> Or Sign in with social platforms</p>

            <div className="social-media">
              <a href="#" className="social-icon">
                {" "}
                <FaFacebook />{" "}
              </a>
              <a href="#" className="social-icon">
                {" "}
                <FaGoogle />{" "}
              </a>
              <a href="#" className="social-icon">
                {" "}
                <FaTwitter />{" "}
              </a>
              <a href="#" className="social-icon">
                {" "}
                <FaLinkedin />{" "}
              </a>
            </div>
          </form>
          <SignUp />
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Welcome aboard, explorer! Step into a world where exceptional
              rides spark unforgettable journeys. Sign up now to unleash premium
              cars, tailored for those who dare to drive their dreams. Your
              adventure starts here!
            </p>
            <button
              className="btn transparent"
              id="sign-up-btn"
              onClick={toggle}
            >
              {" "}
              Sign up
            </button>
          </div>

          <img src={launch} className="image" alt="" />
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>
              Welcome back, road warrior! Get behind the wheel of adventure
              where every drive is a statement. Your trusted ride awaits—because
              you know that freedom, style, and thrill come standard. Let’s hit
              the road!{" "}
            </p>
            <button
              className="btn transparent"
              id="sign-in-btn"
              onClick={toggle}
            >
              {" "}
              Sign in
            </button>
          </div>

          <img src={play} className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
