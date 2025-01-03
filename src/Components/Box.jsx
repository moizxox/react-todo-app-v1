import AddTask from "./AddTask";
import TodoList from "./TodoList";
import DeleteAllButton from "./TaskButtons/DeleteAllButton";
import FilterButtons from "./TaskButtons/FilterButtons";
import AddSearchToggle from "./AddSearchToggle";

function Box({
  editData,
  taskData,
  setTaskData,
  displayTasks,
  handleDelete,
  handleComplete,
  handleDeleteAll,
  handleActiveNum,
  activeBtn
}) {
  const getTaskInput = (inputData) => {
    setTaskData([...taskData, inputData]);
  };

  return (
    <main>
      <section className="w-full mt-[60px] px-4 ">
        <div className="max-w-[600px] bg-secondary p-9 rounded-lg flex flex-col gap-y-3 mx-auto max-[600px]:px-4">
          <AddSearchToggle handleTaskInput={getTaskInput} />

          <div className="flex justify-between items-center gap-y-2 max-[600px]:flex-col">
            <FilterButtons
              handleActiveNum={handleActiveNum}
              activeBtn={activeBtn}
            />
            {!displayTasks.length == 0 && (
              <DeleteAllButton handleDeleteAll={handleDeleteAll} />
            )}
          </div>

          <TodoList
            taskData={displayTasks}
            editData={editData}
            handleDelete={handleDelete}
            handleComplete={handleComplete}
          />
        </div>
      </section>
    </main>
  );
}

export default Box;
