import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import axios from "axios";
import SingleBlog from "./components/SingleBlog";

export const authContext = createContext();

function App() {
  const [user, setUser] = useState({});
  const [bannerTitle, setBannerTitle] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://young-badlands-81640.herokuapp.com/getAllPost")
      .then((response) => setPosts(response.data))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <authContext.Provider value={[user, setUser]}>
      <Router>
        <Header bannerTitle={bannerTitle} />
        <Switch>
          <Route exact path="/">
            <Home posts={posts} setBannerTitle={setBannerTitle} />
          </Route>
          <Route path="/home">
            <Home posts={posts} setBannerTitle={setBannerTitle} />
          </Route>
          <Route path="/about">
            <About setBannerTitle={setBannerTitle} />
          </Route>
          <Route path="/blog">
            <Blog setBannerTitle={setBannerTitle} />
          </Route>
          <Route path="/single-blog/:id">
            <SingleBlog setBannerTitle={setBannerTitle} />
          </Route>
          <Route path="/contact">
            <Contact setBannerTitle={setBannerTitle} />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard user={user} setBannerTitle={setBannerTitle} />
          </PrivateRoute>
          <Route path="/login">
            <Login setBannerTitle={setBannerTitle} />
          </Route>
          <Route path="/register">
            <Register setBannerTitle={setBannerTitle} />
          </Route>
          <Route path="*">
            <NotFound setBannerTitle={setBannerTitle} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </authContext.Provider>
  );
}

export default App;
