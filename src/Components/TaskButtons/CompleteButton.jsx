import { MdCheck } from "react-icons/md";
function CompleteButton() {
  return (
    <button className="complete-btn p-2 bg-green-500 rounded-full text-white">
      <MdCheck size={20} />
    </button>
  );
}

export default CompleteButton;
