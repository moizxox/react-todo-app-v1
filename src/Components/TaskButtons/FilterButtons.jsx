function FilterButtons({ handleActiveNum, activeBtn }) {
  return (
    <div className="flex items-center gap-x-1">
      <button
        className={`flex py-2 px-3 justify-between bg-green-400 rounded-full text-white items-center font-medium ${
          activeBtn !== 1 && "opacity-[0.8]"
        }`}
        onClick={() => handleActiveNum(1)}
      >
        All
      </button>
      <button
        className={`flex py-2 px-3 justify-between bg-green-400 rounded-full text-white items-center font-medium ${
          activeBtn !== 2 && "opacity-[0.8]"
        }`}
        onClick={() => handleActiveNum(2)}
      >
        Undo
      </button>
      <button
        className={`flex py-2 px-3 justify-between bg-green-400 rounded-full text-white items-center font-medium ${
          activeBtn !== 3 && "opacity-[0.8]"
        }`}
        onClick={() => handleActiveNum(3)}
      >
        Completed
      </button>
    </div>
  );
}

export default FilterButtons;
