import React from "react";
import "./Content.css"

function Content({ posts }) {
  return (
    <div className="content">
      {posts.length ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              {post.name} | <b>{post.category}</b> |{" "}
              {<a href={post.url}>Link</a>}
            </li>
          ))}
        </ul>
      ) : (
        <div>Nothing to Show!</div>
      )}
    </div>
  );
}

export default Content;
