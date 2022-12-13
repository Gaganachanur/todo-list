import React, { useRef, useState } from "react";
import { Button } from "@mui/material";

const Todopage = () => {
  const [tastlist, seTtaskList] = useState([]);
  const ref = useRef("");
  
  const addTask = () => {
    seTtaskList((old) => {
      return [...old, ref.current.value];
    });
    ref.current.value = "";
  };

  return (
    <div className=" flex h-screen justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
      <div className="box-border bg-slate-300 p-4 rounded-lg ... shadow-2xl">
        <div className="flex justify-center my-8 ">
          <h1 className="text-2xl text-purple-500 underline decoration-wavy ... ">
            To-do List
          </h1>
        </div>
        <input
          type="text"
          className=" border-4 to-blue-600 rounded-full ... focus:border-blue-400 ... mx-2"
          ref={ref}
        />
        <Button onClick={addTask} className="mx-2">
          ADD
        </Button>
        <Button onClick={() => seTtaskList([])} className="mx-2">
          clear
        </Button>
        <div>
          {tastlist.map((todo, index) => (
            <li>{todo}</li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todopage;
