import React, { useState, useEffect } from "react";
import axios from "axios";

function Datacard() {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    axios
      .get("https://gorest.co.in/public-api/posts")
      .then((res) => {
        console.log(res.data.data);
        setPost(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {posts.map((post, index) => (
        <div name={index} key={post.id} className="col-4">
          <div className="card">
            <div className="card-body mt-4">
              <h4>{post.title}</h4>
              <p className="card-text">{post.body}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Datacard;
