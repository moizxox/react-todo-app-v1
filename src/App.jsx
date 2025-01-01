import Box from "./Components/Box";
import Header from "./Components/Header";
import Modal from "./Components/Modals/Modal";
import { useState, useEffect } from "react";
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
  };

  const handleDelete = (deleteID) => {
    setTaskData(taskData.filter((dataItem) => dataItem.taskID !== deleteID));
  };
  const handleComplete = (completeID) => {
    taskData.forEach((dataItem) => {
      if (dataItem.taskID === completeID) {
        dataItem.taskStatus === true
          ? (dataItem.taskStatus = false)
          : (dataItem.taskStatus = true);
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
