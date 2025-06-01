import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/App.css';
import Sidebar from './sidebar/sidebar';
import Applications from "./pages/applications";
import ApplicationForm from "./forms/applicationForm";
import Dashboard from "./pages/dashboard";
import Students from "./pages/students";
import Teachers from "./pages/teachers";
import Settings from "./pages/settings";

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1, padding: "30px" }}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/students" element={<Students />} />
            <Route path="/teachers" element={<Teachers/>} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/applicationForm" element={<ApplicationForm />} />
            <Route path="/settings" element={<Settings />} />
            {/* future routes to be added */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
