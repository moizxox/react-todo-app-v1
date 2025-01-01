import { MdCheck } from "react-icons/md";
function CompleteButton({ handleCompleteClick }) {
  return (
    <button
      className="complete-btn p-2 bg-green-500 rounded-full text-white"
      onClick={handleCompleteClick}
    >
      <MdCheck size={20} />
    </button>
  );
}

export default CompleteButton;
