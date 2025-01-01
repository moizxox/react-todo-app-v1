import { IoIosAddCircle } from "react-icons/io";
import { toast } from "react-toastify";
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
      toast.success("Task Added Successfully!");
    } else {
      toast.error("Blank Task not allowed!");
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
          <button
            type="submit"
            className={`${
              taskInput.trim() ? "text-yellow-300" : "text-gray-400"
            }`}
            disabled={!taskInput.trim()}
          >
            <IoIosAddCircle size={30} />
          </button>
        </form>
      </section>
    </>
  );
}
export default AddTask;
