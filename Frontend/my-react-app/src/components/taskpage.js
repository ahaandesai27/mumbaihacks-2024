import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../Context/userContext.jsx';

const TaskPage = () => {
  const { userId } = useContext(UserContext);
  const [tasks, setTasks] = useState([]);
  console.log(userId)
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(`http://localhost:5000/employees/${userId}/tasks`);
        const data = await response.json();
        console.log(data);
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    if (userId) {
      fetchTasks();
    }
  }, [userId]);

  return (
    <div className="container">
      <h2>Task List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Assigned To</th>
            <th>Created By</th>
            <th>Status</th>
            <th>Deadline</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length > 0 ? (
            tasks.map((task, index) => (
              <tr key={index}>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.assigned_to}</td>
                <td>{task.created_by}</td>
                <td>{task.status}</td>
                <td>{new Date(task.deadline).toLocaleDateString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                No tasks available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TaskPage;