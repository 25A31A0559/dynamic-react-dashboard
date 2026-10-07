import { Bell, Moon, Sun } from "lucide-react";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="header">
      <div>
        <h1>Dashboard</h1>
        <p>Welcome back! Here's what's happening today.</p>
      </div>

      <div className="header-actions">
        <button className="icon-button">
          <Bell size={21} />
          <span className="notification">4</span>
        </button>

        <button
          className="icon-button"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <Sun size={21} /> : <Moon size={21} />}
        </button>

        <div className="profile">
          <div className="avatar">RV</div>
          <span>Admin</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
