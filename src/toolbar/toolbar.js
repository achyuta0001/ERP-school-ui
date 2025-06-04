
import { useNavigate } from "react-router-dom";
import "./../styles/toolbar.css"; 

const Toolbar = ({ collapsed }) => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/dashboard");
  };

  const handleUser = () => {
    // Placeholder for user info/settings
  };

  return (
    <div className={`toolbar-banner${collapsed ? " collapsed" : ""}`}>
      <button className="toolbar-btn home-btn" onClick={handleHome} title="Home">
        <span role="img" aria-label="Home">🏠</span>
      </button>
      <div className="toolbar-title">ERP School</div>
      <button className="toolbar-btn user-btn" onClick={handleUser} title="User">
        <span role="img" aria-label="User">👤</span>
      </button>
    </div>
  );
};

export default Toolbar;