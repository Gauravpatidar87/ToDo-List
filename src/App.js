import "./assets/css/webfonts/all.min.css";
import "./assets/css/style.css";
import { useState } from "react";
import ToDoList from "./ToDoList";

function App() {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);
  const ItemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listOfItmes = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    console.log("delete");
    setItems((oldItems) => {
      return oldItems.filter((arr, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a Items"
            value={inputList}
            onChange={ItemEvent}
          />
          <button onClick={listOfItmes}> + </button>

          <ol>
            {/* <li>{inputList}</li> */}
            {Items.map((itemval, index) => {
              return (
                <ToDoList
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
