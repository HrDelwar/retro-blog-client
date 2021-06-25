import axios from "axios";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { authContext } from "../../App";
import { IMAGE_BB_KEY } from "../../env";

const AddPost = () => {
  const [success, setSuccess] = useState({});
  const [uploadedImage, setUploadedImage] = useState({});
  const [user, setUser] = useContext(authContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, event) => {
    const { title, description, category } = data;
    const post = {
      title,
      description,
      category,
      coverImage:
        uploadedImage.display_url || "https://i.ibb.co/ryzGS9V/image.webp",
      author: user.firstName + " " + user.lastName,
      email: user.email,
    };
    axios
      .post("https://young-badlands-81640.herokuapp.com/addPost", post)
      .then((result) => {
        if (result.data.success) {
          setSuccess({
            status: true,
            message: "Post publish successful!",
          });
          setUploadedImage({});
          setTimeout(() => setSuccess({ statue: null, message: "" }), 5000);
          event.target.reset();
        } else {
          setSuccess({
            status: false,
            message: result.data?.message,
          });
          setTimeout(() => setSuccess({ statue: null, message: "" }), 5000);
        }
      })
      .catch((err) => {
        setSuccess({
          status: false,
          message: err.message,
        });
        setTimeout(() => setSuccess({ statue: null, message: "" }), 5000);
      });
  };

  const uploadImage = (event) => {
    const imageData = new FormData();
    imageData.set("key", IMAGE_BB_KEY);
    imageData.append("image", event.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (res) {
        setUploadedImage(res.data.data);
      })
      .catch(function (error) {
        // console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="shadow overflow-hidden rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 lg:col-start-2 lg:col-span-4 ">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  {...register("title", {
                    required: {
                      value: true,
                      message: "Title name is required",
                    },
                  })}
                  type="text"
                  name="title"
                  id="title"
                  autoComplete="given-name"
                  className={
                    "form-input " +
                    (errors.title ? " error-input" : "focus-input")
                  }
                />
                <p className="text-red-500  ">
                  {errors.title ? errors.title?.message : ""}
                </p>
              </div>

              <div className="col-span-6 lg:col-start-2 lg:col-span-4">
                <label htmlFor="category" className="form-label">
                  Category
                </label>
                <input
                  {...register("category", {
                    required: {
                      value: true,
                      message: "Category is required",
                    },
                  })}
                  type="text"
                  name="category"
                  id="category"
                  autoComplete="family-name"
                  className={
                    "form-input " +
                    (errors.category ? " error-input" : "focus-input")
                  }
                />
                <p className="text-red-500  ">
                  {errors.category ? errors.category?.message : ""}
                </p>
              </div>

              <div className="col-span-6 lg:col-start-2 lg:col-span-4">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  {...register("description", {
                    required: {
                      value: true,
                      message: "Description is required",
                    },
                  })}
                  type="text"
                  name="description"
                  id="description"
                  rows="10"
                  className={
                    "form-input " +
                    (errors.description ? " error-input" : "focus-input")
                  }
                />
                <p className="text-red-500  ">
                  {errors.description ? errors.description?.message : ""}
                </p>
              </div>

              <div className="col-span-6 lg:col-start-2 lg:col-span-4">
                <label htmlFor="coverImage" className="form-label">
                  Cover Photo
                </label>
                {uploadedImage.display_url && (
                  <div className="container text-left mt-2 w-48 md:w-64 h-auto">
                    <img
                      className="shadow-md rounded-lg "
                      src={uploadedImage.display_url}
                      alt=""
                    />
                  </div>
                )}
                <input
                  {...register("coverImage", {
                    required: {
                      value: true,
                      message: "Cover image a required",
                    },
                  })}
                  type="file"
                  name="coverImage"
                  onChange={uploadImage}
                  id="coverImage"
                  className={
                    "form-input " +
                    (errors.coverImage ? " error-input" : "focus-input")
                  }
                />
                <p className="text-red-500  ">
                  {errors.coverImage ? errors.coverImage?.message : ""}
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mb-10">
            <button type="submit" className="btn text-white uppercase">
              Publish Blog
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

export default AddPost;
