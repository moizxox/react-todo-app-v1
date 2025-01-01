import EditButton from "./TaskButtons/EditButton";
import DeleteButton from "./TaskButtons/DeleteButton";
import CompleteButton from "./TaskButtons/CompleteButton";
function TodoItem({ taskTitle, id, editData }) {
  const handleEdit = () => {
    editData({ toEditTitle: taskTitle, toEditId: id });
  };
  return (
    <>
      <div className="todo-item bg-primary p-4 flex flex-col gap-y-[20px] rounded-lg">
        <div className="task-title">
          <input
            type="text"
            className="text-text text-xl w-full font-semibold bg-transparent outline-none"
            value={taskTitle}
            disabled
          />
        </div>
        <div className="task-btns flex gap-x-2">
          <EditButton handleEdit={handleEdit} />
          <DeleteButton />
          <CompleteButton />
        </div>
      </div>
    </>
  );
}

export default TodoItem;
