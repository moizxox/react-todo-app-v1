import { MdDelete } from "react-icons/md";
function DeleteButton() {
  return (
    <button className="delete-btn p-2 bg-red-500 rounded-full text-white">
      <MdDelete size={20} />
    </button>
  );
}

export default DeleteButton;
