import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

function SerachTask() {
  const [searchInput, setSearchInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    console.log(searchInput);
  };
  return (
    <div
      className={`add-task w-full p-2 border-2 border-green-200 flex items-center  gap-x-2 ${
        searchInput.trim() && "border-green-400"
      } rounded-lg`}
    >
      <input
        type="text"
        className="w-full bg-transparent outline-none text-green-300 placeholder:text-green-100"
        placeholder="Search your Task"
        onChange={handleSubmit}
        //   value={taskInput}
      />
      <button
        className={`${
          searchInput.trim() ? "text-green-400" : "text-green-200"
        }`}
      >
        <IoIosSearch size={30} />
      </button>
    </div>
  );
}

export default SerachTask;
