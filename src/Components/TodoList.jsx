import TodoItem from "./TodoItem";

function TodoList({ taskData, editData, handleDelete, handleComplete }) {
  return (
    <>
      <section className="task-list flex flex-col gap-y-4">
        {taskData?.map((taskDataItem, i) => (
          <TodoItem
            key={i}
            taskTitle={taskDataItem.taskTitle}
            taskStatus={taskDataItem.taskStatus}
            editData={editData}
            handleDelete={handleDelete}
            handleComplete={handleComplete}
            id={taskDataItem.taskID}
          />
        ))}
      </section>
    </>
  );
}

export default TodoList;
