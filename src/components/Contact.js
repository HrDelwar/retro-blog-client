import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Contact = ({ setBannerTitle }) => {
  document.title = "Contact || Retro Blog";
  setBannerTitle("contact");
  const [success, setSuccess] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    if (data) {
      setSuccess({
        status: true,
        message: "Message send successful!",
      });
      setTimeout(() => setSuccess({ statue: null, message: "" }), 1000);
      e.target.reset();
    }
    e.target.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="shadow overflow-hidden rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 lg:col-start-2 lg:col-span-4 ">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Enter your full name",
                    },
                  })}
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="given-name"
                  className={
                    "form-input " +
                    (errors.name ? " error-input" : "focus-input")
                  }
                />
                <p className="text-red-500  ">
                  {errors.name ? errors.name?.message : ""}
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
                      message: "You email please.",
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
                <label htmlFor="message" className="form-label">
                  Your Message
                </label>
                <textarea
                  {...register("message", {
                    required: {
                      value: true,
                      message: "Tell your message for me.",
                    },
                  })}
                  type="text"
                  name="message"
                  id="message"
                  rows="10"
                  className={
                    "form-input " +
                    (errors.message ? " error-input" : "focus-input")
                  }
                />
                <p className="text-red-500  ">
                  {errors.message ? errors.message?.message : ""}
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mb-10">
            <button type="submit" className="btn text-white uppercase">
              Submit
            </button>
            <h2
              className={
                "text-xl capitalize text-center" +
                (success.status ? " text-green-500" : " text-red-500")
              }
            >
              {success.message}
            </h2>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
