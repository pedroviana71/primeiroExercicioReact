import React, { useState } from "react";
import { useImmer } from "use-immer";
import id from "./id";
import styles from "./toDo.module.css";


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
      
      <div className={styles.outer_container}>
        <div className={styles.inner_container}>
          <div className={styles.input}>
            <div className={styles.inner_input}>
              <input
                className={styles.btn_input}
                autoFocus
                type="text"
                value={message}
                onChange={handleMessage}
              />
              <input
                type="submit"
                value="Add"
                className={styles.btn_add}
                onClick={addTask}
              />
            </div>
            <p className={styles.title}>POR FAZER</p>
          </div>
          <div className={styles.undone}>
            {dataTask.map((value) => {
              return (
                <div className={styles.outer_task} key={value.id}>
                  <p className={styles.p_task}>{value.message}</p>
                  <button
                    className={styles.btn_delete}
                    onClick={() => {
                      handleTaskDelete(value.id);
                    }}
                  >
                    Del
                  </button>
                  <button
                    className={styles.btn_done}
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
          <div className={styles.done}>
            <p className={styles.p_title_done}>FEITO</p>
            {taskDone.map((value) => {
              return (
                <p className={styles.p_done} key={value.id}>
                  {value.message}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDo;
