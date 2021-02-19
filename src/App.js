import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <h1 className="mt-5">
        Our <strong style={{ color: "#5a67d8" }}>Posts</strong>
      </h1>
      <Card />
    </div>
  );
}

export default App;
