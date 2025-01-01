import { MdDelete } from "react-icons/md";
function DeleteAllButton({ handleDeleteAll }) {
  return (
    <div>
      <button
        className="flex p-3 justify-between float-right bg-red-500 rounded-lg text-white items-center font-medium "
        onClick={handleDeleteAll}
      >
        <MdDelete size={20} />
        Delete All
      </button>
    </div>
  );
}
export default DeleteAllButton;
