import React, { Fragment, useState } from "react";
import { useImmer } from "use-immer";
import id from "./id";

const ToDo = () => {
  const [message, setMessage] = useState("");
  const [dataTask, setDataTask] = useImmer([]);
  const [taskDone, setTaskDone] = useImmer([]);

  const addTask = () => {
    if (message) {
      setDataTask((draft) => {
        draft.push({
          id: id(),
          message,
        });
      });
    }
    setMessage("");
  };

  const handleTaskDelete = (id) => {
    const newList = dataTask.filter((item) => item.id !== id);
    setDataTask(newList);
  };

  const handleTaskDone = (id, message) => {
    dataTask.filter((item) => item.id === id);
    setTaskDone((draft) => {
      draft.push({
        id,
        message,
      });
    });
    //console.log(newDone);
    console.log(taskDone);
    handleTaskDelete(id);
  };

  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  return (
    <>
      <div className="input">
        <input autoFocus type="text" value={message} onChange={handleMessage} />
        <input type="submit" value="Add" onClick={addTask} />
      </div>

      <div className="undone">
        {dataTask.map((value) => {
          return (
            <div key={value.id}>
              <p>{value.message}</p>
              <button
                onClick={() => {
                  handleTaskDelete(value.id);
                }}
              >
                Deletar
              </button>
              <button
                onClick={() => {
                  handleTaskDone(value.id, value.message);
                }}
              >
                Feito
              </button>
            </div>
          );
        })}
      </div>

      <div className="done">
        <p>FEITO</p>
        {taskDone.map((value) => {
          return <p key={value.id}>{value.message}</p>;
        })}
      </div>
    </>
  );
};

export default ToDo;
