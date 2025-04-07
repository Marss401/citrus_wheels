import { CiLock } from "react-icons/ci";
import {
  FaFacebook,
  FaGoogle,
  FaLinkedin,
  FaRegUser,
  FaTwitter,
} from "react-icons/fa";
import { BsEnvelopeAt } from "react-icons/bs";

export default function SignUp() {
  return (
    <form action="" className="sign-up-form auth-form">
      <h2 className="title"> Sign up</h2>
      <div className="input-field"> 
        <FaRegUser className="input-icon" />
        <input type="text" placeholder="Username" />
      </div>
      <div className="input-field">
        <BsEnvelopeAt className="input-icon" />
        <input type="email" placeholder="Email" />
      </div>
      <div className="input-field">
        <CiLock className="input-icon" />
        <input placeholder="Password" type="password" />
      </div>
      <button type="submit" className="btn btn-solid">
        {" "}
        Sign Up
      </button>
      <p className="social-text"> Or Sign up with social platforms</p>

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
  );
}
