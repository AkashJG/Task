import Datacard1 from "./Datacard1";
import Commooncard1 from "./Commooncard1";
import { useState } from "react";

function Card1() {
  const [data, setdata] = useState([]);
  function hndler() {
    setdata(<Datacard1 />);
  }
  return (
    <>
      <div className="container">
        <h1 className="mt-5">
          Our <strong style={{ color: "#5a67d8" }}>Users</strong>
        </h1>
        <div className="row p-3">
          <Commooncard1 />
          <Commooncard1 />
          <Commooncard1 />
        </div>
        <div className="row p-3">
          <Commooncard1 />
          <Commooncard1 />
          <Commooncard1 />
        </div>
        <div className="row p-3">{data}</div>
      </div>

      <button onClick={hndler} className="btn btn-primary mt-5">
        Load More
      </button>
    </>
  );
}

export default Card1;
