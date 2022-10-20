import React from "react";
import "./Dropdown.css";

function Dropdown({ setNewsID }) {
  return (
    <div>
      <div className="headings">News List</div>
      <div className="headings2">Filter news by category</div>

      <div className="dropdown">
        <button className="dropbtn">Filter</button>
        <div className="dropdown-content">
          <div onClick={() => setNewsID(0)}>All News</div>
          <div onClick={() => setNewsID(1)}>Business</div>
          <div onClick={() => setNewsID(2)}>Entertainment</div>
          <div onClick={() => setNewsID(3)}>General</div>
          <div onClick={() => setNewsID(4)}>Health</div>
          <div onClick={() => setNewsID(5)}>Science</div>
          <div onClick={() => setNewsID(6)}>Sports</div>
          <div onClick={() => setNewsID(7)}>Technology</div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
/*
let Business = posts.filter((post) => post.category === "business");
let Entertainment = posts.filter((post) => post.category === "entertainment");
let General = posts.filter((post) => post.category === "general");
let Health = posts.filter((post) => post.category === "health");
let Science = posts.filter((post) => post.category === "science");
let Sports = posts.filter((post) => post.category === "sports");
let Technology = posts.filter((post) => post.category === "technology");


[Business,Entertainment,General,Health,Science,Sports,Technology]
*/
