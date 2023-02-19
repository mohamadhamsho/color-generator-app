import { useRef, useState } from "react";
import "./App.css";
import SingleColor from "./SingleColor";
import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f00").all(10));

  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      let colors = new Values(color).all(10);
      setList(colors);
      setColor("");
    } catch (error) {
      setError(true);
      inputRef.current.classList.add("error");
      setTimeout(() => {
        inputRef.current.classList.remove("error");
      }, 2000);
    }
  };

  return (
    <div className="app">
      <header>
        <div className="container app-container">
          <h4 className="title">Color Generator</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="#f15025"
              value={color}
              ref={inputRef}
              onChange={(e) => setColor(e.target.value)}
            />
            <button type="submit" className="btn btn-success">
              Generate
            </button>
          </form>
        </div>
      </header>
      <div className="colors-container ">
        {list.map((color, index) => {
          let hex = color.hex;
          return <SingleColor key={index} {...color} index={index} hex={hex} />;
        })}
      </div>
    </div>
  );
}

export default App;
