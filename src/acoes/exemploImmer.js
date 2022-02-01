import React, { useState, useEffect, useCallback }  from "react";
import { useImmer } from "use-immer";



const App = () => {
  const [data, setData] = useImmer([{}]);

//   const addName = (id) => {
//     setData((draft)=>{
//         draft.id = id        
//     })    
//   };
  
   const handleAdd = useCallback(() => {
     setData((draft) => {
       draft.push({
         id: "todo_" + Math.random(),
         title: "A new todo",
         done: false,
       });
     });
   }, []);

  useEffect(()=>{
    // addName("Pedro");
    // addName("Amora")
    handleAdd()

  },[])


  console.log(data);

  return (
    <div>
      <p>{data.id}</p>
      <p>{data.title}</p>
    </div>
  );
};
export default App;
