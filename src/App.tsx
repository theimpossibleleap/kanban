import { useState } from "react";
import "./App.css";
import ItemCard from "./component/ItemCard";

const data = [
  {
    id: 1,
    item: "Build out component for items",
    status: "Not Started",
  },
  {
    id: 2,
    item: "Make reactive.",
    status: "Not Started",
  },
  {
    id: 3,
    item: "Make basic columns using flex.",
    status: "Complete",
  },
];

export interface Item {
  id: number;
  item: string;
  status: string;
}

function App() {
  const [taskData, setTaskData] = useState<Item[]>(data);

  const notStarted = taskData.filter((item) => item.status === "Not Started");

  const inProgress = taskData.filter((item) => item.status === "In Progress");

  const completed = taskData.filter((item) => item.status === "Complete");

  return (
    <>
      <div id="container">
        <div id="board">
          <div className="board-column">
            <div>
              <h1>To Do</h1>
              {notStarted.map((item) => {
                return (
                  <ItemCard
                    key={item.id}
                    item={item}
                    setTaskData={setTaskData}
                  />
                );
              })}
            </div>
            <p className="count">To Do: {notStarted.length}</p>
          </div>
          <div className="board-column">
            <div>
              <h1>In Progress</h1>
              {inProgress.map((item) => {
                return (
                  <ItemCard
                    key={item.id}
                    item={item}
                    setTaskData={setTaskData}
                  />
                );
              })}
            </div>
            <p className="count">In Progress: {inProgress.length}</p>
          </div>
          <div className="board-column">
            <div>
              <h1>Complete</h1>
              {completed.map((item) => {
                return (
                  <ItemCard
                    key={item.id}
                    item={item}
                    setTaskData={setTaskData}
                  />
                );
              })}
            </div>
            <p className="count">Completed: {completed.length}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
