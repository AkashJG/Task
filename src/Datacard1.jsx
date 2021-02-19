import React, { useState, useEffect } from "react";
import axios from "axios";

function Datacard1() {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    axios
      .get("https://gorest.co.in/public-api/users")
      .then((res) => {
        setPost(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {posts.map((post, index) => (
        <div name={index} key={post.id} className="col-sm">
          <div className="card">
            <div className="card-body mt-4" style={{ textAlign: "left" }}>
              <div>
                <strong className="font-semibold text-gray-900">Name :</strong>
                {post.name}
              </div>
              <div>
                <strong className="font-semibold text-gray-900">Email :</strong>
                {post.email}
              </div>
              <div>
                <strong className="font-semibold text-gray-900">
                  Gender :
                </strong>
                {post.gender}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Datacard1;
