import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/applications.css"; 

const dummyApplications = [
  {
    id: 1,
    name: "Ramesha",
    grade: "5",
    status: "Pending",
    date: "2025-05-20",
    parent: "Ramappa",
    phone: "123-456-7890",
  },
  {
    id: 2,
    name: "Suresha",
    grade: "7",
    status: "Approved",
    date: "2025-05-18",
    parent: "Shankarappa",
    phone: "987-654-3210",
  },
  {
    id: 3,
    name: "Putanna",
    grade: "6",
    status: "Rejected",
    date: "2025-05-15",
    parent: "Puttsami",
    phone: "555-123-4567",
  },
];

const statusColors = {
  Pending: "pending",
  Approved: "approved",
  Rejected: "rejected",
};

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setApplications(dummyApplications);
  }, []);

  const handleDelete = (id) => {
    setApplications(applications.filter(app => app.id !== id));
  };

  const handleNewApplication = () => {
    navigate("/applicationForm");
  };

  return (
    <div className="applications-page">
      <div className="applications-header">
        <h2>Student Applications</h2>
        <button className="new-app-btn" onClick={handleNewApplication} title="New Application">
          <span role="img" aria-label="Add">➕</span>
        </button>
      </div>
      <div className="applications-list">
        {applications.map((app) => (
          <div className="application-card" key={app.id}>
            <div className="application-header">
              <span className="applicant-name">{app.name}</span>
              <span className={`status-badge ${statusColors[app.status]}`}>{app.status}</span>
              <button
                className="delete-btn"
                title="Delete"
                onClick={() => handleDelete(app.id)}
              >
                <span role="img" aria-label="Delete">🗑️</span>
              </button>
            </div>
            <div className="application-details">
              <div><strong>Grade:</strong> {app.grade}</div>
              <div><strong>Date:</strong> {app.date}</div>
              <div><strong>Parent:</strong> {app.parent}</div>
              <div><strong>Phone:</strong> {app.phone}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Applications;