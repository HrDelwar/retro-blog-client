import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddPost from "./AdminAction/AddPost";
import SeeAllPost from "./AdminAction/SeeAllPost";
import SeeAllUser from "./AdminAction/SeeAllUser";

const Dashboard = ({ user, setBannerTitle }) => {
  //   const [isAdmin, setIsAdmin] = useState(false);
  const { rule } = user;
  if (rule === "admin") {
    document.title = "Admin Action || Retro Blog";
    setBannerTitle("Admin Dashboard");
    // setIsAdmin(true);
  } else {
    document.title = "User Action || Retro Blog";
    setBannerTitle("User Dashboard");
    // setIsAdmin(false);
  }

  return (
    <>
      <div className="">
        {rule === "admin" ? (
          <Router>
            <div className="text-center my-10 flex justify-around items-center">
              <div className="flex xm:flex-wrap">
                <Link
                  className="nav-link capitalize bg-gray-500 text-white mr-5 px-2"
                  to="/dashboard/addPost"
                >
                  {" "}
                  add post
                </Link>
                <Link
                  className="nav-link capitalize bg-gray-500 text-white mr-5 px-2"
                  to="/dashboard/seeAllPost"
                >
                  {" "}
                  see posts
                </Link>
                <Link
                  className="nav-link capitalize bg-gray-500 text-white px-2"
                  to="/dashboard/seeAllUser"
                >
                  {" "}
                  see users
                </Link>
              </div>
            </div>

            <Switch>
              <Route exact path="/dashboard/addPost">
                <AddPost />
              </Route>
              <Route path="/dashboard/seeAllPost">
                <SeeAllPost />
              </Route>
              <Route path="/dashboard/seeAllUser">
                <SeeAllUser />
              </Route>
            </Switch>
          </Router>
        ) : (
          <div className="h-96 text-center">
            <h3 className="pt-48 text-3xl text-green-600">
              User Activity coming soon...
            </h3>
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
