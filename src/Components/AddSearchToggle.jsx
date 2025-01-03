import AddTask from "./AddTask";
import SearchTask from "./SerachTask";
import { useState } from "react";
import SearchToggle from "./TaskButtons/SearchToggle";
import AddToggle from "./TaskButtons/AddToggle";

const AddSearchToggle = ({ handleTaskInput }) => {
  const [activeToggle, setActiveToggle] = useState(1);

  return (
    <>
      <div className="flex items-center gap-x-3">
        <AddToggle
          setActiveToggle={setActiveToggle}
          activeToggle={activeToggle}
        />
        <SearchToggle
          setActiveToggle={setActiveToggle}
          activeToggle={activeToggle}
        />
      </div>
      {activeToggle == 1 ? (
        <AddTask handleTaskInput={handleTaskInput} />
      ) : (
        <SearchTask />
      )}
    </>
  );
};

export default AddSearchToggle;
