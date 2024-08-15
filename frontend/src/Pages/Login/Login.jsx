import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Toast from "../../Components/Toast";

const Login = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!email || !password) {
      setToastMessage("Please enter email and password!");
      setShowToast(true);
    } else if (!regex.test(email)) {
      setToastMessage("Invalid email format!");
      setShowToast(true);
    } else if (password.length < 8) {
      setToastMessage("Password should be at least 8 characters long!");
      setShowToast(true);
    } else {
      axios
        .get("https://myindiaa-deployement.onrender.com/register")
        .then((res) => {
          checklogincreds(res.data);
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  };

  const checklogincreds = (creds) => {
    let x = creds.filter((item) => {
      return item.email === email && item.password === password;
    });
    if (x.length > 0) {
      navigate("/");
      localStorage.setItem("username", JSON.stringify(x[0].name));
    } else {
      setToastMessage("Wrong Credentials!");
      setShowToast(true);
    }
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };

  return (
    <>
      <Helmet>
        <title>Login Page</title>
        <meta name="description" content="Login page description" />
      </Helmet>

      <div className="w-full">
        <h1 className="flex justify-center text-5xl font-bold text-blue-800">
          Login
        </h1>
        <div className="flex justify-center mt-10">
          <div>
            <label
              htmlFor="Email"
              className="text-md font-medium leading-6 text-gray-900 ml-auto"
            >
              Email
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                name="price"
                id="price"
                className="w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Password */}
        <div className="flex justify-center">
          <div>
            <label
              htmlFor="Password"
              className="text-md font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                name="price"
                id="price"
                className="w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            className="p-2 bg-black text-white mt-5 rounded-lg"
            onClick={handleLogin}
          >
            Login
          </button>

          {showToast && (
            <Toast message={toastMessage} onClose={handleCloseToast} />
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
