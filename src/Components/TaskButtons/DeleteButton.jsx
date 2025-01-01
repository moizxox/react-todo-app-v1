import { MdDelete } from "react-icons/md";
function DeleteButton({ handleDelete }) {
  return (
    <button
      className="delete-btn p-2 bg-red-500 rounded-full text-white"
      onClick={handleDelete}
    >
      <MdDelete size={20} />
    </button>
  );
}

export default DeleteButton;
