import React, { useState } from "react";
import "../Styles/auth.css";
// import logo from "../asset/Image/logo.png";
// import logoBlack from "../asset/Image/logo1.png";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
// import axios from "axios";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  window.localStorage.clear();

  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  const [sign, setSign] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ target: { name, value } }: any) => {
    setSign({ ...sign, [name]: value });
  };

  //   const handleSubmit = (e: any) => {
  //     setLoading(true);
  //     e.preventDefault();

  //     axios
  //       .post("https://apibiz.oneflaretech.com/api/auth/login/business", {
  //         email: sign.email,
  //         password: sign.password,
  //       })
  //       .then((res) => {
  //         toast.success(res.data.message);
  //         // console.log(res.data.data);
  //         window.localStorage.setItem("token", res.data.data.token);
  //         window.localStorage.setItem(
  //           "userData",
  //           JSON.stringify(res.data.data.data)
  //         );
  //         setLoading(false);
  //         navigate("/dashboard");
  //       })
  //       .catch((err) => {
  //         console.log(err);

  //         toast.error(err?.response?.data?.message);
  //         setLoading(false);
  //       });
  //   };

  return (
    <div className="auth">
      <div className="left">
        <div className="leftCon">
          <h2>Login</h2>
          <p>Welcome to Trakker</p>
          <form>
            <div className="input">
              <label>Email</label>
              <input
                className="inputField"
                type="email"
                placeholder="Test2@test"
                name="email"
                value={sign.email}
                onChange={handleChange}
              />
            </div>
            <div className="input">
              <label>Password</label>
              <div className="inputPass">
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="********"
                  name="password"
                  value={sign.password}
                  onChange={handleChange}
                />
                {passwordVisible ? (
                  <AiFillEyeInvisible
                    className="loginEye"
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <AiFillEye
                    className="loginEye"
                    onClick={togglePasswordVisibility}
                  />
                )}
              </div>
              <Link to="/reset" className="forget">
                Forget Password
              </Link>
            </div>

            <button type="submit">
              {/* {loading ? (
                  <CircularProgress
                    style={{ color: "#fff", width: "25px", height: "25px" }}
                  />
                ) : (
                  "Login"
                )} */}

              <Link to="/dashboard" className="staff">
                Login
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
