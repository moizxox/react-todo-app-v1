import { MdCheck, MdClose } from "react-icons/md";
function CompleteButton({ handleCompleteClick, taskStatus }) {
  return (
    <button
      className={`complete-btn p-2 ${
        taskStatus === false ? "bg-green-500" : "bg-orange-500"
      } rounded-full text-white`}
      onClick={handleCompleteClick}
    >
      {taskStatus === false ? <MdCheck size={20} /> : <MdClose size={20} />}
    </button>
  );
}

export default CompleteButton;
