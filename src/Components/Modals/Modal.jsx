import { FaSave } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

function Modal({ modalShow, modalClose, editData, hadleEditSave }) {
  const [value, setValue] = useState("");

  const handleClose = () => modalClose(false);
  const handleSave = (e) => {
    e.preventDefault();
    if (value.trim()) {
      hadleEditSave({ editedTitle: value, editedTaskId: editData.toEditId });
      modalClose(false);
      toast.info("Task Updated Successfully!");
    } else {
      toast.error("Blank Task Not Work");
    }
  };
  useEffect(() => {
    setValue(editData.toEditTitle);
  }, [editData]);
  return (
    <form
      className={`fixed top-0 bg-[#0000003a] w-full h-full items-center justify-center backdrop-blur-sm ${
        modalShow === true ? "flex" : "hidden"
      }`}
      onSubmit={handleSave}
    >
      <div className="bg-secondary px-5 py-9 rounded-lg flex flex-col items-start gap-y-3 max-w-[500px] w-[90%] relative">
        <h3 className="text-text text-2xl uppercase font-bold">
          Edit Your Task
        </h3>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="p-2 rounded-lg w-full outline-none"
        />
        <button
          className="flex items-center gap-x-2 bg-blue-400 text-white p-2 rounded-lg font-medium"
          type="submit"
        >
          Save
          <FaSave size={20} />
        </button>
        <button
          className=" text-red-400 absolute top-3 right-2"
          onClick={handleClose}
          type="button"
        >
          <IoIosCloseCircle size={30} />
        </button>
      </div>
    </form>
  );
}
export default Modal;
