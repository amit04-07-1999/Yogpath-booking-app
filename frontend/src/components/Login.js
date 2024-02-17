import React, { useState } from "react";
import { Fragment } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:1000/api/v1/signin", {
                email,
                password,
            });
            console.log(response.data);
            alert("Login Successfully ");
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Fragment>
            <div className="container ml-4 mx-auto px-4 py-12 flex items-center justify-between ">
                <img src="girl.svg" className="max-h-96 mt-10 " />
                <form className="max-w-xl mx-auto" onSubmit={handleSubmit}>
                    <h1 className="text-5xl mb-20 font-extrabold text-orange-600">Login</h1>
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
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-orange-500 text-white rounded-md hover:bg-orange-600"
                        >
                            Login
                        </button>
                    </div>
                    <div className="text-center">
                        <p className="text-sm text-gray-600">
                            Don't have an account yet?{" "}
                            <a href="/signup" className="text-orange-500">
                                Sign Up
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        <div className="mt-auto text-center">
        <Link to="/" className="text-orange-500 hover:text-orange-700 ">Go back to Home →→</Link>
    </div>
        </Fragment>
    );
}

export default Login;
