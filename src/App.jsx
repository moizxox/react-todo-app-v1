import Box from "./Components/Box";
import Header from "./Components/Header";
import Modal from "./Components/Modals/Modal";
import { useState, useEffect } from "react";
function App() {
  const [taskData, setTaskData] = useState(() => {
    const storedTasks = localStorage.getItem("taskData");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const getTaskInput = (inputData) => {
    setTaskData([...taskData, inputData]);
  };

  const [modalShow, setModalShow] = useState(false);
  const [editData, setEditData] = useState({});
  const handleEditData = (data) => {
    setEditData(data);
    setModalShow(true);
  };
  const hadleEditSave = ({ editedTitle, editedTaskId }) => {
    console.log(editedTitle, editedTaskId);
    taskData.forEach((dataItem) => {
      if (dataItem.taskID === editedTaskId) {
        console.log(dataItem);
        dataItem.taskTitle = editedTitle;
        console.log(dataItem);
      }
    });
    setTaskData([...taskData]);
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
        getTaskInput={getTaskInput}
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
