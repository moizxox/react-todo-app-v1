import AddTask from "./AddTask";
import TodoList from "./TodoList";
import DeleteAllButton from "./TaskButtons/DeleteAllButton";
import FilterButtons from "./TaskButtons/FilterButtons";

function Box({
  editData,
  taskData,
  setTaskData,
  handleDelete,
  handleComplete,
  handleDeleteAll,
  showAllTasks,
  showUndoTasks,
  showCompletedTasks,
  activeBtn
}) {
  const getTaskInput = (inputData) => {
    setTaskData([...taskData, inputData]);
  };

  return (
    <main>
      <section className="w-full mt-[60px] px-4 ">
        <div className="max-w-[600px] bg-secondary p-9 rounded-lg flex flex-col gap-y-5 mx-auto max-[600px]:px-4">
          <AddTask handleTaskInput={getTaskInput} />
          <div className="flex justify-between items-center max-[600px]:flex-col">
            <FilterButtons
              showAllTasks={showAllTasks}
              showUndoTasks={showUndoTasks}
              showCompletedTasks={showCompletedTasks}
              activeBtn={activeBtn}
            />
            {!taskData.length == 0 && (
              <DeleteAllButton handleDeleteAll={handleDeleteAll} />
            )}
          </div>

          <TodoList
            taskData={taskData}
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
