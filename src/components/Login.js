import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import { authContext } from "../App";

const Login = ({setBannerTitle}) => {
  document.title = "Login || Retro Blog";
  setBannerTitle('login');
  const [message, setMessage] = useState("");
  const [user, setUser] = useContext(authContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    handleLogin(data, e);
  };

  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: "/" } };

  const handleLogin = async (data, e) => {
    try {
      const response = await fetch("https://young-badlands-81640.herokuapp.com/handleLogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.status) {
        setUser(result);
        history.replace(from);
        e.target.reset();
      } else {
        setMessage(result.message);
        setTimeout(() => setMessage(""), 5000);
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <>
      <div className="mt-10  container mx-auto px-4">
        {message && (
          <h3 className="text-red-500 text-center text-xl">{message}</h3>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="shadow overflow-hidden rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 lg:col-start-2 lg:col-span-4">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    {...register("email", {
                      required: {
                        value: true,
                        message: "You must enter a email",
                      },
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Enter correct email address",
                      },
                    })}
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className={
                      "form-input " +
                      (errors.email ? " error-input" : "focus-input")
                    }
                  />
                  <p className="text-red-500  ">
                    {errors.email ? errors.email?.message : ""}
                  </p>
                </div>

                <div className="col-span-6 lg:col-start-2 lg:col-span-4">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Specify a password",
                      },
                      minLength: {
                        value: 6,
                        message: "Password must have at least 6 characters",
                      },
                    })}
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="password"
                    className={
                      "form-input " +
                      (errors.password ? " error-input" : "focus-input")
                    }
                  />
                  <p className="text-red-500  ">
                    {errors.password ? errors.password?.message : ""}
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mb-10">
              <button type="submit" className="btn text-white uppercase">
                login
              </button>
            </div>
          </div>
        </form>
        <div className="mt-10 justify-center flex mb-10 items-center">
          <h3 className="text-2xl ">
            You have not account? First{" "}
            <Link
              to="/register"
              className=" uppercase text-green-500 underline"
            >
              Register
            </Link>{" "}
            a account.
          </h3>
        </div>
      </div>
    </>
  );
};

export default Login;
