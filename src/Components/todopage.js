import React, { useRef, useState } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { Fragment } from "react";

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
    <Fragment>
      <div className="h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <div className="flex h-screen justify-center items-center">
          <div className=" box-border bg-yellow-100 w-50 p-4 shadow-2xl ...  rounded-xl">
            <div className="flex justify-center m-5 box-border bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-lg ... shadow-2xl">
              <h1 className="text-2xl font-Michroma text-black underline">
                To-do List
              </h1>
            </div>

            <div className="flex flex-wrap justify-between m-4">
              <input
                type="text"
                className="border-4 to-blue-600 rounded-full ... focus:border-blue-400 ... mx-2"
                ref={ref}
              />
              <Stack direction="row" spacing={2} className="m-2">
                <Button
                  type="button"
                  color="success"
                  variant="contained"
                  endIcon={<SendIcon />}
                  onClick={addTask}
                >
                  ADD
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  startIcon={<DeleteIcon />}
                  onClick={() => seTtaskList([])}
                >
                  clear
                </Button>
              </Stack>
            </div>
            <div className="font-Kalam box-border   text-2xl">
              {tastlist.map((todo, index) => (
                <li>{todo}</li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Todopage;
