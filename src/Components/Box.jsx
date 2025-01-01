import AddTask from "./AddTask";
import TodoList from "./TodoList";
import DeleteAllButton from "./TaskButtons/DeleteAllButton";

function Box({
  editData,
  taskData,
  setTaskData,
  handleDelete,
  handleComplete,
  handleDeleteAll
}) {
  const getTaskInput = (inputData) => {
    setTaskData([...taskData, inputData]);
  };

  return (
    <main>
      <section className="w-full mt-[60px] px-4 ">
        <div className="max-w-[600px] bg-secondary p-9 rounded-lg flex flex-col gap-y-5 mx-auto max-[600px]:px-4">
          <AddTask handleTaskInput={getTaskInput} />
          <DeleteAllButton handleDeleteAll={handleDeleteAll} />
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
