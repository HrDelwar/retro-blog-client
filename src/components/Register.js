import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const Register = ({ setBannerTitle }) => {
  document.title = "Register || Retro Blog";
  setBannerTitle("register");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    const { firstName, lastName, email, password } = data;
    const user = { firstName, lastName, email, password };
    addUser(user, e);
  };
  const history = useHistory();

  const addUser = async (user, e) => {
    try {
      const response = await fetch("https://young-badlands-81640.herokuapp.com/addUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const result = await response.json();
      if (result === true) {
        setSuccess("Register successfully!");
        e.target.reset();
        setTimeout(() => {
          setSuccess("");
          history.push("/login");
        }, 2000);
      } else {
        setError(result.name);
        setTimeout(() => setError(""), 5000);
      }
    } catch (err) {
      setError(err.message);
      setTimeout(() => setError(""), 5000);
    }
  };

  return (
    <div className="mt-10  container mx-auto px-4 ">
      {error && <h3 className="text-red-500 text-center text-xl">{error}</h3>}
      {success && (
        <h3 className="text-green-500 text-center text-xl">{success}</h3>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="shadow overflow-hidden rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 lg:col-start-2 lg:col-span-4 ">
                <label htmlFor="firstName" className="form-label">
                  First name
                </label>
                <input
                  {...register("firstName", {
                    required: {
                      value: true,
                      message: "First name is required",
                    },
                  })}
                  type="text"
                  name="firstName"
                  id="firstName"
                  autoComplete="given-name"
                  className={
                    "form-input " +
                    (errors.firstName ? " error-input" : "focus-input")
                  }
                />
                <p className="text-red-500  ">
                  {errors.firstName ? errors.firstName?.message : ""}
                </p>
              </div>

              <div className="col-span-6 lg:col-start-2 lg:col-span-4">
                <label htmlFor="lastName" className="form-label">
                  Last name
                </label>
                <input
                  {...register("lastName", {
                    required: {
                      value: true,
                      message: "Last name is required",
                    },
                  })}
                  type="text"
                  name="lastName"
                  id="lastName"
                  autoComplete="family-name"
                  className={
                    "form-input " +
                    (errors.lastName ? " error-input" : "focus-input")
                  }
                />
                <p className="text-red-500  ">
                  {errors.lastName ? errors.lastName?.message : ""}
                </p>
              </div>

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

              <div className="col-span-6 lg:col-start-2 lg:col-span-4">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  {...register("confirmPassword", {
                    required: {
                      value: true,
                      message: "Retype password",
                    },
                    validate: (value) => {
                      return (
                        value === watch("password") || "Password did not match"
                      );
                    },
                  })}
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  className={
                    "form-input " +
                    (errors.confirmPassword ? " error-input" : "focus-input")
                  }
                />
                <p className="text-red-500  ">
                  {errors.confirmPassword
                    ? errors.confirmPassword?.message
                    : ""}
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mb-10">
            <button type="submit" className="btn text-white uppercase">
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
