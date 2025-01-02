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
  const [taskType, setTaskType] = useState("");
  const [displayTasks, setDisplayTasks] = useState(taskData);
  const [editData, setEditData] = useState({});
  const [activeBtn, setActiveBtn] = useState(1);

  const handleEditData = (data) => {
    setEditData(data);
    setModalShow(true);
  };

  const handleDeleteAll = () => {
    if (taskData.length > 0) {
      if (confirm(`Are you sure you want to delete ${taskType} Tasks?`)) {
        toast.info(`${taskType} Tasks Deleted!`);
        if (activeBtn == "2") {
          let undoTasks = taskData.filter((task) => task.taskStatus);
          setTaskData(undoTasks);
        } else if (activeBtn == "3") {
          let completedTasks = taskData.filter((task) => !task.taskStatus);
          setTaskData(completedTasks);
        } else setTaskData([]);
        handleFilter();
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
  };

  const handleDelete = (deleteID) => {
    const updatedTasks = taskData.filter(
      (dataItem) => dataItem.taskID !== deleteID
    );
    setTaskData(updatedTasks);
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
  };

  const handleActiveNum = (activeNum) => {
    setActiveBtn(activeNum);
  };

  const handleFilter = () => {
    if (activeBtn == "2") {
      setDisplayTasks(taskData.filter((task) => !task.taskStatus));
      setTaskType("All Undo");
    } else if (activeBtn == "3") {
      setDisplayTasks(taskData.filter((task) => task.taskStatus));
      setTaskType("All Completed");
    } else {
      setDisplayTasks(taskData);
      setTaskType("All");
    }
  };
  useEffect(() => {
    handleFilter();
  }, [activeBtn]);

  useEffect(() => {
    localStorage.setItem("taskData", JSON.stringify(taskData));
    handleFilter();
  }, [taskData]);

  return (
    <>
      <Header />
      <Box
        editData={handleEditData}
        taskData={taskData}
        setTaskData={setTaskData}
        displayTasks={displayTasks}
        handleDelete={handleDelete}
        handleComplete={handleComplete}
        handleDeleteAll={handleDeleteAll}
        handleActiveNum={handleActiveNum}
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
