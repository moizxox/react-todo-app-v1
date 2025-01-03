import { IoIosAddCircle } from "react-icons/io";

const AddToggle = ({ setActiveToggle, activeToggle }) => {
  return (
    <button
      className={`flex items-center gap-x-2 text-[18px] font-normal bg-slate-300 px-4 py-1 rounded-full ${
        activeToggle !== 1 && "opacity-[0.7]"
      }`}
      onClick={() => setActiveToggle(1)}
    >
      <IoIosAddCircle size={20} />
      Add Task
    </button>
  );
};

export default AddToggle;
