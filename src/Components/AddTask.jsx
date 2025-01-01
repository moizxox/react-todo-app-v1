import { IoIosAddCircle } from "react-icons/io";
import { useState } from "react";

function AddTask({ handleTaskInput }) {
  const [taskInput, setTaskInput] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    if (taskInput.trim()) {
      const inputData = {
        taskTitle: taskInput,
        taskStatus: false,
        taskID: Date.now()
      };
      handleTaskInput(inputData);
      setTaskInput("");
    } else {
      alert("Blank Task Not Work");
    }
  };
  return (
    <>
      <section className="add-task w-full p-2 border-2 border-[#ffffff9c] rounded-lg">
        <form
          className="flex items-center w-full gap-x-2"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="w-full bg-transparent outline-none text-text"
            placeholder="Enter your Task"
            onChange={(e) => setTaskInput(e.target.value)}
            value={taskInput}
          />
          <button type="submit" className="text-yellow-300">
            <IoIosAddCircle size={30} />
          </button>
        </form>
      </section>
    </>
  );
}
export default AddTask;
