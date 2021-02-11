import "./css/App.css";
import "./css/index.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";


function App() {

  const [list, setList] = useState([]);
  const [task, setTask] = useState("");

  return (
    <div className="container">
      <h1>ToDos</h1>
      <form
        onSubmit={(event) => {
          list.push(task);
          setTask("");
          event.preventDefault();
        }}
      >
        <input
          type="text"
          value={task}
          onChange={(event) => {
            setTask(event.target.value);
          }}
          className="input"
          placeholder="Add a new task">
        </input>
      </form>
      <div className="task-list">
        <hr></hr>
        <ul className="list-group list-group-flush">
          {list.map((item, index) => {
            return (
              <li key={index} className="list-group-item">
                {item}
                <a type="button"
                  onClick={() => setList(list.filter((i) => i !== item))}>
                  <i className="fa fa-times" />
                </a>
              </li>
            );
          })}
        </ul>
        <hr></hr>
        <div className="last" style={{fontSize: "20px"}}>
          <strong>{list.length}</strong>{" "}
          {`${list.length === 1 ? "Element" : "Elements"} left`}
        </div>
      </div>
    </div>
  );
}

export default App;