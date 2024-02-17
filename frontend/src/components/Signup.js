import React, { useState } from "react";
import { Fragment } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [receiveWhatsapp, setReceiveWhatsapp] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:1000/api/v1/register", {
        email,
        username: name,
        password,
      });
      console.log(response.data);
      alert("Sign up successful! You can now log in.");
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Fragment>
      <div className="container ml-4 mx-auto px-4 py-12 flex items-center justify-between ">
        <img src="girl.svg" className="max-h-96 mt-10 " />
        <form className="max-w-xl mx-auto" onSubmit={handleSubmit}>
          <h1 className="text-5xl mb-10 font-extrabold text-orange-600">Sign UP</h1>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-sm text-gray-600"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-orange-300 rounded focus:outline-none focus:border-orange-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm text-gray-600"
            >
              Email ID
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-orange-300 rounded focus:outline-none focus:border-orange-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-orange-300 rounded focus:outline-none focus:border-orange-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="whatsapp"
                className="mr-2 checked:bg-orange-600"
                checked={receiveWhatsapp}
                onChange={(e) => setReceiveWhatsapp(e.target.checked)}
              />
              <label htmlFor="whatsapp" className="text-sm text-gray-600">
                Receive Whatsapp messages
              </label>
            </div>
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-orange-500 text-white rounded-md hover:bg-orange-600"
            >
              Submit
            </button>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <a href="/login" className="text-orange-500">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
      <div className="-mt-10 text-center">
        <Link to="/" className="text-orange-500 hover:text-orange-700 ">Go back to Home →→</Link>
    </div>
    </Fragment>
  );
}

export default SignUp;
