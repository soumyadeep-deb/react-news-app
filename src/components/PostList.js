import React, { useState, useEffect } from "react";
import "./PostList.css";
import Dropdown from "./Dropdown";
import Content from "./Content";

function PostList({category}) {

  const [newsID, setNewsID] = useState(0);

  let categories = [
    "",
    "Business",
    "Entertainment",
    "General",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];
  //let category = [Business,Entertainment,General,Health,Science,Sports,Technology];


  

  return (
    <div>
      <Dropdown setNewsID={setNewsID} />
      <div className="headings">Displaying all {categories[newsID]} news.</div>
      <Content posts={category[newsID]} />
    </div>
  );
}

export default PostList;


/*
list-style-type: none;
border: 2px solid black;
margin: 4px;
padding: 5px;
margin-right: 45px;
*/ 