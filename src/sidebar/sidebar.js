import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './../styles/sidebar.css'; 

// Example SVG icons (replace with your own or use an icon library)
const icons = {
  dashboard: <span role="img" aria-label="Dashboard">📊</span>,
  students: <span role="img" aria-label="Students">👨‍🎓</span>,
  teachers: <span role="img" aria-label="Teachers">👩‍🏫</span>,
  classes: <span role="img" aria-label="Classes">🏫</span>,
  settings: <span role="img" aria-label="Settings">⚙️</span>,
  applications: <span role="img" aria-label="Applications">🗂️</span>,
};

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleNav = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <div className={`sidebar${collapsed ? " collapsed" : ""}`}>
      <button className="toggle-btn" onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? "☰" : "✖"}
      </button>
      {/* Expanded Sidebar Nav */}
      {!collapsed && (
        <nav className="sidebar-nav expanded-nav">
          <ul>
            <li><a href="#dashboard"><span className="sidebar-icon">{icons.dashboard}</span> <span className="sidebar-text enlarged">Dashboard</span></a></li>
            <li><a href="#students"><span className="sidebar-icon">{icons.students}</span> <span className="sidebar-text enlarged">Students</span></a></li>
            <li><a href="#teachers"><span className="sidebar-icon">{icons.teachers}</span> <span className="sidebar-text enlarged">Teachers</span></a></li>
            <li><a href="#classes"><span className="sidebar-icon">{icons.classes}</span> <span className="sidebar-text enlarged">Classes</span></a></li>
            <li>
              <a href="/applications" onClick={e => handleNav(e, "/applications")}>
                <span className="sidebar-icon">{icons.applications}</span>
                <span className="sidebar-text enlarged">Applications</span>
              </a>
            </li>
            <li><a href="#settings"><span className="sidebar-icon">{icons.settings}</span> <span className="sidebar-text enlarged">Settings</span></a></li>
          </ul>
        </nav>
      )}
      {/* Collapsed Sidebar Nav */}
      {collapsed && (
        <nav className="sidebar-nav collapsed-nav">
          <ul>
            <li><a href="#dashboard"><span className="sidebar-icon">{icons.dashboard}</span></a></li>
            <li><a href="#students"><span className="sidebar-icon">{icons.students}</span></a></li>
            <li><a href="#teachers"><span className="sidebar-icon">{icons.teachers}</span></a></li>
            <li><a href="#classes"><span className="sidebar-icon">{icons.classes}</span></a></li>
            <li>
              <a href="/applications" onClick={e => handleNav(e, "/applications")}>
                <span className="sidebar-icon">{icons.applications}</span>
              </a>
            </li>
            <li><a href="#settings"><span className="sidebar-icon">{icons.settings}</span></a></li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Sidebar;