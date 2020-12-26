import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt=""
        />
        <Avatar
          className="sidebar__avatar"
          src="https://avatars0.githubusercontent.com/u/40870043?s=460&u=797867b3813b54bdfd7834ce301100fe9205b484&v=4"
        />
        <h2>Hardeep Gurwara</h2>
        <h4>Hardeepprince007@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber"> 2,500</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber"> 2,500</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("Reactjs")}
        {recentItem("Brexit")}
        {recentItem("WomenInStem")}
        {recentItem("Equality")}
      </div>
    </div>
  );
}

export default Sidebar;
