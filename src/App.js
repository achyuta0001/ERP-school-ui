import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/App.css';
import Sidebar from './sidebar/sidebar';
import Applications from "./pages/applications";
import ApplicationForm from "./forms/applicationForm";
import Dashboard from "./pages/dashboard";
import Students from "./pages/students";
import Teachers from "./pages/teachers";
import Settings from "./pages/settings";
import Toolbar from "./toolbar/toolbar";

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <BrowserRouter>
      <Toolbar collapsed={collapsed} /> 
      <div className="App" style={{ display: "flex" }}>
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        <div className={`main-content${collapsed ? " collapsed" : ""}`} style={{ flex: 1, padding: "30px" }}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/students" element={<Students />} />
            <Route path="/teachers" element={<Teachers/>} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/applicationForm" element={<ApplicationForm />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
