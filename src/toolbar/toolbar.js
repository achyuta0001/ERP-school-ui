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
      <div className="toolbar-section left">
        {/* You can add a logo or leave empty */}
      </div>
      <button
        className="toolbar-btn home-btn center-btn"
        onClick={handleHome}
        title="Home"
      >
        NYXEN ERP
      </button>
      <div className="toolbar-section right">
        <button className="user-btn" onClick={handleUser} title="User">
          <span role="img" aria-label="User">👤</span>
        </button>
      </div>
    </div>
  );
};

export default Toolbar;