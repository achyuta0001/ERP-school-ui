import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/App.css';
import Sidebar from './sidebar/sidebar';
import Applications from "./pages/applications";
import ApplicationForm from "./forms/applicationForm";

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1, padding: "30px" }}>
          <Routes>
            <Route path="/applications" element={<Applications />} />
            <Route path="/applicationForm" element={<ApplicationForm />} />
            {/* future routes to be added */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
