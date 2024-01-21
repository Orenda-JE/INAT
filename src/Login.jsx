// src/LoginPage.js
import React, { useState } from "react";
import { supabase } from './supaBaseClient';



const LoginPage = () => {
    var user;
    var error;
    var session

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
        userType: "student",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setLoginData((prevLoginData) => ({
            ...prevLoginData,
            [name]: value,
        }));
    };

    const handleLogin = async (event) => {
        event.preventDefault();


        // Use Supabase auth.signIn to log in the user
        await supabase.auth.signInWithPassword({
            email: loginData.email,
            password: loginData.password,
        }).then(({ data, error }) => {
            if (error) {
                alert('cant login ' + error.message);
            }
            else
                if (data.user) {
                    user = data.user;
                    session = data.session;
                    console.log(user);
                    console.log(session);
                    supabase.from(loginData.userType).select().eq('id', user.id)
                        .then((data) => {
                            console.log(data);

                            if (error) {
                                alert("please check your role ");
                            } else {

                                localStorage.setItem("user", user);
                            }

                        })

                }

        });


    };

    return (
        <div className="min-h-screen flex items-center justify-center overflow-y-auto">
            <div className="bg-white p-8 rounded-md shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

                <form onSubmit={handleLogin} method="POST">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={loginData.email}
                            onChange={handleChange}
                            className="mt-1 p-3 w-full border rounded-md text-sm focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={loginData.password}
                            onChange={handleChange}
                            className="mt-1 p-3 w-full border rounded-md text-sm focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter your password"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="userType" className="block text-sm font-medium text-gray-600">
                            User Type
                        </label>
                        <select
                            id="userType"
                            name="userType"
                            value={loginData.userType}
                            onChange={handleChange}
                            className="mt-1 p-3 w-full border rounded-md text-sm focus:outline-none focus:ring focus:border-blue-300"
                        >
                            <option value="admin">Admin</option>
                            <option value="student">Student</option>
                            <option value="enterprise">Enterprise</option>
                        </select>
                    </div>

                    <div className="mt-4">
                        <button
                            type="submit"
                            className="bg-green-800 text-white text-sm py-3 px-6 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
