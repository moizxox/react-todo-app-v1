import { MdModeEdit } from "react-icons/md";
function EditButton({ handleEdit }) {
  const handleClick = () => {
    handleEdit();
  };
  return (
    <button
      className="edit-btn p-2 bg-yellow-500 rounded-full text-white"
      onClick={handleClick}
    >
      <MdModeEdit size={20} />
    </button>
  );
}

export default EditButton;
