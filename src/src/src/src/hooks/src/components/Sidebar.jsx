import {
  LayoutDashboard,
  BarChart3,
  Users,
  ShoppingCart,
  Settings
} from "lucide-react";

const Sidebar = ({ active, setActive }) => {
  const items = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Analytics", icon: BarChart3 },
    { name: "Customers", icon: Users },
    { name: "Orders", icon: ShoppingCart },
    { name: "Settings", icon: Settings }
  ];

  return (
    <aside className="sidebar">
      <h2 className="logo">DashFlow</h2>

      <nav>
        {items.map(({ name, icon: Icon }) => (
          <button
            key={name}
            className={active === name ? "nav-item active" : "nav-item"}
            onClick={() => setActive(name)}
          >
            <Icon size={20} />
            <span>{name}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
