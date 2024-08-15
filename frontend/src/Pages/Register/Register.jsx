import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Toast from "../../Components/Toast";

const Register = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const userData = { email, phone, name, password };

  const handleSignUp = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!email || !phone || !name || !password) {
      setToastMessage("All the input fields are empty!");
      setShowToast(true);
    } else if (phone.length < 10 || phone.length > 10) {
      setToastMessage("Please check phone number!");
      setShowToast(true);
    } else if (password.length < 8) {
      setToastMessage("Password length should be more 7!");
      setShowToast(true);
    } else if (
      name.includes(0) ||
      name.includes(1) ||
      name.includes(2) ||
      name.includes(3) ||
      name.includes(4) ||
      name.includes(5) ||
      name.includes(6) ||
      name.includes(7) ||
      name.includes(8) ||
      name.includes(9)
    ) {
      setToastMessage("Invalid name formate!");
      setShowToast(true);
    } else if (!regex.test(email)) {
      setToastMessage("Eamil doesn't exist!");
      setShowToast(true);
    } else {
      axios
        .post("https://myindiaa-deployement.onrender.com/register", userData)
        .then((res) => {
          console.log(res.data);
          navigate("/login");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };


  const handleCloseToast = () => {
    setShowToast(false);
  };

  return (
    <>
      <Helmet>
        <title>Registration Page</title>
        <meta name="description" content="Registration page description" />
      </Helmet>

      <div className="w-full">
        <h1 className="flex justify-center text-5xl font-bold text-blue-800">
          Sign Up
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
                type="email"
                className="w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
        </div>
        {/* Phone Number */}
        <div className="flex justify-center">
          <div>
            <label
              htmlFor="phone"
              className="text-md font-medium leading-6 text-gray-900"
            >
              Phone
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="number"
                className="w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
        </div>
        {/* Name */}

        <div className="flex justify-center">
          <div>
            <label
              htmlFor="Name"
              className="text-md font-medium leading-6 text-gray-900"
            >
              Name
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                className="w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
            onClick={handleSignUp}
          >
            Sign Up
          </button>


          {showToast && (
            <Toast message={toastMessage} onClose={handleCloseToast} />
          )}
        </div>
      </div>
    </>
  );
};

export default Register;
