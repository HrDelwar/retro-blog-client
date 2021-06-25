import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blogs = ({ setBannerTitle }) => {
  document.title = "Blog || Retro Blog";
  setBannerTitle("blog");

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://young-badlands-81640.herokuapp.com/getAllPost")
      .then((response) => setPosts(response.data.reverse()))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="container mx-auto px-4">
      {posts.map((post) => (
        <div className="w-full lg:w-1/2 mx-auto  shadow-xl rounded-md  mt-24  overflow-hidden">
          <Link to={`/single-blog/${post._id}`} className="">
            <img
              src={post.coverImage}
              className="w-full rounded-t-md"
              alt={post.title}
            />
          </Link>
          <div className="px-4 md:px-6 mt-10">
            <span className="bg-indigo-500 text-white px-2 py-1 mt-5 rounded uppercase ">
              {post.category}
            </span>
            <Link
              to={`/single-blog/${post._id}`}
              className=" block py-5 text-2xl border-b border-dashed border-gray-500 mb-5"
            >
              {post.title}
            </Link>
            <span className="text-gray-500">
              {moment(post.created).format("MMMM DD") +
                ", " +
                moment(post.created).format("YYYY")}
            </span>
            <div className="my-5 text-gray-700">
              <p>
                {post.description.length > 200 ? (
                  <>
                    {post.description.slice(0, 200) + "...."}
                    <Link
                      to={`/single-blog/${post._id}`}
                      className="ml-2 text-indigo-500 hover:underline text-lg uppercase"
                    >
                      see more
                    </Link>
                  </>
                ) : (
                  post.description
                )}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
