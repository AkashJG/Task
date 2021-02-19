import Card1 from "./Card1";
import Commoncard from "./Commoncard";
import Datacard from "./Datacard";
import { useState } from "react";
function Card() {
  const [data, setdata] = useState([]);
  function hndler1() {
    setdata(<Datacard />);
  }
  return (
    <>
      <div className="container">
        <div className="row p-3">
          <Commoncard />
          <Commoncard />
          <Commoncard />
        </div>
        <div className="row p-3">{data}</div>
      </div>
      <button onClick={hndler1} className="btn btn-primary mt-5">
        Load More
      </button>
      <Card1 />
    </>
  );
}

export default Card;
