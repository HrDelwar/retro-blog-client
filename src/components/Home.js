import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import Subscribe from "./Subscribe";
import HomeBanner from "./HomeBanner";
import moment from "moment";
import { Link } from "react-router-dom";

const Home = ({ setBannerTitle, posts }) => {
  document.title = "Home || Retro Blog";
  setBannerTitle("home");

  const firstSixPost = posts.slice(0, 6);
  return (
    <div className="container mx-auto">
      <HomeBanner />
      <h1 className="p-16 text-4xl text-center">Latest Posts</h1>

      <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {firstSixPost.map((post) => (
          <Link
            to={`/single-blog/${post._id}`}
            className="shadow p-2 bg-white justify-self-center rounded-lg"
          >
            <img className="rounded text-center" src={post.coverImage} alt="" />

            <div className="p-5 py-5">
              <h3 className="text-2xl text-gray-800 mb-8">{post.title}</h3>

              <img
                className="w-11  rounded-full"
                src="https://media-exp3.licdn.com/dms/image/C4E03AQHcWzLUqMkhww/profile-displayphoto-shrink_200_200/0/1619714730144?e=1628121600&v=beta&t=zSAI2QEc37ZV3Gcf10IHzWcRrjZpV003v5DzYwT4dH0"
                alt=""
              />

              <div className="ml-16 -mt-11">
                <h6 className="text-sm font-medium text-gray-500">
                  {post.author}
                </h6>
                <span className="text-gray-500 text-sm">
                  {moment(post.created).format("MMMM DD YYYY")}
                </span>
                <span className="ml-2 text-gray-500 text-sm">
                  {" "}
                  <FontAwesomeIcon className="text-indigo-500" icon={faClock} />
                  {moment(post.created).format("HH SS")} min
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center mt-10 ">
        <Link className="btn text-white px-2 py-1" to="/blog">
          See more
        </Link>
      </div>
      <Subscribe />
    </div>
  );
};

export default Home;
