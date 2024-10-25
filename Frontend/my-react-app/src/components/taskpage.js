import React from 'react';

const TaskPage = ({ tasks = [] }) => {
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
