import TodoItem from "./TodoItem";

function TodoList({ taskData, editData }) {
  return (
    <>
      <section className="task-list flex flex-col gap-y-4">
        {taskData?.map((taskDataItem, i) => (
          <TodoItem
            key={i}
            taskTitle={taskDataItem.taskTitle}
            editData={editData}
            id={taskDataItem.taskID}
          />
        ))}
      </section>
    </>
  );
}

export default TodoList;