import React from "react";
import Input from "./Input";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

function Login() {
  return (
    <div className="loginContainer">
      <div className="loginChildContainer">
        <h1>Welcome Back!</h1>
        <button className={"loginButtonIcons"}>
          <FacebookIcon />
        </button>
        <button className={"loginButtonIcons"}>
          <GoogleIcon />
        </button>
        <button className={"loginButtonIcons"}>
          <TwitterIcon />
        </button>
        <p className={"pLogin"}>or use your email account</p>
        <Input type="text" placeholder="Email" icon={<EmailIcon />} />
        <Input type="password" placeholder="Password" icon={<LockIcon />} />
        <button className={"custom-btn btn-3"} type="submit">
          <span>Sign In</span>
        </button>
      </div>
    </div>
  );
}

export default Login;
