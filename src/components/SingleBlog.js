import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleBlog = ({ setBannerTitle }) => {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get(`https://young-badlands-81640.herokuapp.com/singleBlog/${id}`)
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  document.title = "Single Blog || Retro Blog";
  setBannerTitle("single blog");
  return (
    <div className="container mx-auto px-4 mt-24">
      <div className="  ">
        <div className="sm:w-4/5 w-full lg:w-9/12 xl:w-7/12 overflow-hidden mx-auto">
          <img src={post.coverImage} className="w-full" alt={post.title} />
          <div className="px-4 md:px-6 mt-10">
            <span className="bg-indigo-500 text-white px-2 py-1 mt-5 rounded uppercase ">
              {post.category}
            </span>
            <h2 className=" block py-5 text-2xl border-b border-dashed border-gray-500 mb-5">
              {post.title}
            </h2>
            <span className="text-gray-500 ">
              {moment(post.created).format("MMMM DD") +
                ", " +
                moment(post.created).format("YYYY")}
            </span>
            <p className="my-5 text-gray-700">{post.description}</p>
            <p className="my-5 text-gray-700"> Created by <span className="text-lg capitalize text-indigo-500">{post.author}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
