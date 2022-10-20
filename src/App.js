import "./App.css";
import PostList from "./components/PostList";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines/sources?apiKey=03040e2bb8f04361beda92c70cfb1db5"
      )
      .then((res) => {
        console.log(res.data);
        console.log(res.data.sources);
        setPosts(res.data.sources);
      })
      .catch((err) => console.log(err));
  }, []);

  let allNews = posts;
  let Business = posts.filter((post) => post.category === "business");
  let Entertainment = posts.filter((post) => post.category === "entertainment");
  let General = posts.filter((post) => post.category === "general");
  let Health = posts.filter((post) => post.category === "health");
  let Science = posts.filter((post) => post.category === "science");
  let Sports = posts.filter((post) => post.category === "sports");
  let Technology = posts.filter((post) => post.category === "technology");

  let category = [allNews,Business,Entertainment,General,Health,Science,Sports,Technology];

  return (
    <div className="App">
      <PostList category={category}/>
    </div>
  );
}

export default App;
