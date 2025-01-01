import AddTask from "./AddTask";
import TodoList from "./TodoList";
import { useEffect, useState } from "react";

function Box({ editData, taskData, setTaskData, handleDelete }) {
  const getTaskInput = (inputData) => {
    setTaskData([...taskData, inputData]);
  };

  return (
    <main>
      <section className="w-full mt-[60px] px-4">
        <div className="max-w-[600px] bg-secondary p-9 rounded-lg flex flex-col gap-y-5 mx-auto">
          <AddTask handleTaskInput={getTaskInput} />
          <TodoList
            taskData={taskData}
            editData={editData}
            handleDelete={handleDelete}
          />
        </div>
      </section>
    </main>
  );
}

export default Box;
