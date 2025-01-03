import { IoIosSearch } from "react-icons/io";

function SearchToggle({ setActiveToggle, activeToggle }) {
  return (
    <button
      className={`flex items-center gap-x-2 text-[18px] font-normal bg-slate-300 px-4 py-1 rounded-full ${
        activeToggle !== 2 && "opacity-[0.7]"
      }`}
      onClick={() => setActiveToggle(2)}
    >
      <IoIosSearch size={20} />
      Search Task
    </button>
  );
}

export default SearchToggle;
