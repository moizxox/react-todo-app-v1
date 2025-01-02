function FilterButtons({
  showAllTasks,
  showUndoTasks,
  showCompletedTasks,
  activeBtn
}) {
  return (
    <div className="flex items-center gap-x-1">
      <button
        className={`flex py-2 px-3 justify-between bg-green-400 rounded-full text-white items-center font-medium ${
          activeBtn !== "1" && "opacity-[0.8]"
        }`}
        onClick={showAllTasks}
      >
        All
      </button>
      <button
        className={`flex py-2 px-3 justify-between bg-green-400 rounded-full text-white items-center font-medium ${
          activeBtn !== "2" && "opacity-[0.8]"
        }`}
        onClick={showUndoTasks}
      >
        Undo
      </button>
      <button
        className={`flex py-2 px-3 justify-between bg-green-400 rounded-full text-white items-center font-medium ${
          activeBtn !== "3" && "opacity-[0.8]"
        }`}
        onClick={showCompletedTasks}
      >
        Completed
      </button>
    </div>
  );
}

export default FilterButtons;
