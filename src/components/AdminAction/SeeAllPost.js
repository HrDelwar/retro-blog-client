import { faClock, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import moment from "moment";
import React, { useState, useEffect } from "react";

const SeeAllPost = () => {
  const [posts, setPosts] = useState([]);
  const [success, setSuccess] = useState({});
  useEffect(() => {
    axios
      .get("https://young-badlands-81640.herokuapp.com/getAllPost")
      .then((response) => setPosts(response.data.reverse()))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleDeletePost = (id) => {
    console.log(id);
    axios
      .delete(`https://young-badlands-81640.herokuapp.com/deletePost/${id}`)
      .then((response) => {
        console.log(response.data);
        setSuccess({ status: true, message: "Delete Successfully" });
        setTimeout(() => setSuccess({ statue: null, message: "" }), 1000);
        axios
          .get("https://young-badlands-81640.herokuapp.com/getAllPost")
          .then((response) => setPosts(response.data.reverse()))
          .catch((err) => {
            console.log(err.message);
          });
      })
      .catch((err) => {
        setSuccess({ status: false, message: err.message });
        setTimeout(() => setSuccess({ statue: null, message: "" }), 3000);
        console.log("urlErr", err.message);
      });
  };

  return (
    <>
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 col-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {posts.map((post) => (
            <div
              className="rounded-md border-b-2 border-gray-300 shadow-sm md:w-64 justify-self-center  text-center "
              key={post._id}
            >
              <img
                src={post.coverImage}
                className="rounded-t-md  mx-auto text-center"
                alt={post.title}
              />
              <h3 className="text-lg">{post.title}</h3>
              <div className="sm:text-left mb-2 px-2">
                <h6 className="text-sm font-medium text-gray-500">
                  {post.name}
                </h6>
                <span className="text-gray-500 text-sm">
                  {moment(post.created).format("MMMM DD YYYY")}
                </span>
                <span className="ml-2 text-gray-500 text-sm">
                  {" "}
                  <FontAwesomeIcon className="text-indigo-500" icon={faClock} />
                  {moment(post.created).format("HH:mm")} min
                </span>
                <div className="inline ml-5 text-center">
                  <button
                    onClick={() => handleDeletePost(post._id)}
                    className="text-red-500 hover:bg-red-500 hover:text-white py-1 px-2 rounded"
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={
          "flex  justify-center items-center" +
          (success.message ? "" : " hidden")
        }
      >
        <h2
          className={
            " top-1/2 fixed rounded-md  px-4 py-2 text-lg text-white " +
            (success.status ? " bg-green-500" : " bg-red-500 ")
          }
        >
          {success.message}
        </h2>
      </div>
    </>
  );
};

export default SeeAllPost;
