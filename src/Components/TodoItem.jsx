import EditButton from "./TaskButtons/EditButton";
import DeleteButton from "./TaskButtons/DeleteButton";
import CompleteButton from "./TaskButtons/CompleteButton";
function TodoItem({
  taskTitle,
  id,
  editData,
  handleDelete,
  handleComplete,
  taskStatus
}) {
  const handleEdit = () => {
    editData({ toEditTitle: taskTitle, toEditId: id });
  };
  const handleDeleteClick = () => {
    handleDelete(id);
  };
  const handleCompleteClick = () => {
    handleComplete(id);
  };
  return (
    <>
      <div className="todo-item bg-primary p-4 flex flex-col gap-y-[20px] rounded-lg">
        <div className="task-title">
          <input
            type="text"
            className={`text-text ${
              taskStatus && "line-through opacity-50"
            } text-xl w-full font-semibold bg-transparent outline-none`}
            value={taskTitle}
            disabled
          />
        </div>
        <div className="task-btns flex gap-x-2">
          <EditButton handleEdit={handleEdit} />
          <DeleteButton handleDelete={handleDeleteClick} />
          <CompleteButton handleCompleteClick={handleCompleteClick} />
        </div>
      </div>
    </>
  );
}

export default TodoItem;
