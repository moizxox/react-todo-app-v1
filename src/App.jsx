import { useState, useEffect } from "react";
import Box from "./Components/Box";
import Header from "./Components/Header";
import Modal from "./Components/Modals/Modal";
import { toast } from "react-toastify";

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [taskData, setTaskData] = useState(() => {
    const storedTasks = localStorage.getItem("taskData");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [displayTasks, setDisplayTasks] = useState(taskData);
  const [editData, setEditData] = useState({});
  const [activeBtn, setActiveBtn] = useState("1");

  const handleEditData = (data) => {
    setEditData(data);
    setModalShow(true);
  };

  const handleDeleteAll = () => {
    if (taskData.length > 0) {
      if (confirm("Are you sure you want to delete All Tasks?")) {
        setTaskData([]);
        setDisplayTasks([]);
        toast.info("All Task Deleted!");
      }
    } else {
      toast.error("No Task Found to Delete");
    }
  };

  const hadleEditSave = ({ editedTitle, editedTaskId }) => {
    taskData.forEach((dataItem) => {
      if (dataItem.taskID === editedTaskId) {
        dataItem.taskTitle = editedTitle;
        dataItem.taskStatus = false;
      }
    });
    setTaskData([...taskData]);
    setDisplayTasks([...taskData]);
  };

  const handleDelete = (deleteID) => {
    const updatedTasks = taskData.filter(
      (dataItem) => dataItem.taskID !== deleteID
    );
    setTaskData(updatedTasks);
    setDisplayTasks(updatedTasks);
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
    });
    setTaskData([...taskData]);
    setDisplayTasks([...taskData]);
  };

  // Filtering Logic
  const showAllTasks = () => {
    setActiveBtn("1");
  };

  const showUndoTasks = () => {
    setActiveBtn("2");
  };

  const showCompletedTasks = () => {
    setActiveBtn("3");
  };
  useEffect(() => {
    if (activeBtn == "2")
      setDisplayTasks(taskData.filter((task) => !task.taskStatus));
    else if (activeBtn == "3")
      setDisplayTasks(taskData.filter((task) => task.taskStatus));
    else setDisplayTasks(taskData);
  }, [activeBtn]);
  useEffect(() => {
    localStorage.setItem("taskData", JSON.stringify(taskData));
    setDisplayTasks(taskData);
  }, [taskData]);

  return (
    <>
      <Header />
      <Box
        editData={handleEditData}
        taskData={displayTasks}
        setTaskData={setTaskData}
        handleDelete={handleDelete}
        handleComplete={handleComplete}
        handleDeleteAll={handleDeleteAll}
        showAllTasks={showAllTasks}
        showUndoTasks={showUndoTasks}
        showCompletedTasks={showCompletedTasks}
        activeBtn={activeBtn}
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
