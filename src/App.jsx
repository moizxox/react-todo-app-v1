import Box from "./Components/Box";
import Header from "./Components/Header";
import Modal from "./Components/Modals/Modal";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
function App() {
  const [modalShow, setModalShow] = useState(false);

  const [taskData, setTaskData] = useState(() => {
    const storedTasks = localStorage.getItem("taskData");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [editData, setEditData] = useState({});
  const handleEditData = (data) => {
    setEditData(data);
    setModalShow(true);
  };

  const hadleEditSave = ({ editedTitle, editedTaskId }) => {
    console.log(editedTitle, editedTaskId);
    taskData.forEach((dataItem) => {
      if (dataItem.taskID === editedTaskId) {
        dataItem.taskTitle = editedTitle;
      }
    });
    setTaskData([...taskData]);
    toast.info("Task Updated Successfully!");
  };

  const handleDelete = (deleteID) => {
    setTaskData(taskData.filter((dataItem) => dataItem.taskID !== deleteID));
    toast.info("Task Deleted!");
  };
  const handleComplete = (completeID) => {
    taskData.forEach((dataItem) => {
      if (dataItem.taskID === completeID) {
        dataItem.taskStatus = !dataItem.taskStatus;
        toast.info(
          dataItem.taskStatus
            ? "Task set to Completed!"
            : "Task set to Uncompleted!"
        );
      }

      setTaskData([...taskData]);
    });
  };

  useEffect(() => {
    localStorage.setItem("taskData", JSON.stringify(taskData));
  }, [taskData]);
  return (
    <>
      <Header />
      <Box
        editData={handleEditData}
        taskData={taskData}
        setTaskData={setTaskData}
        handleDelete={handleDelete}
        handleComplete={handleComplete}
      />
      <Modal
        modalShow={modalShow}
        modalClose={setModalShow}
        editData={editData}
        hadleEditSave={hadleEditSave}
      />
    </>
  );
}

export default App;
