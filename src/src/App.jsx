import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatCard from "./components/StatCard";
import SalesChart from "./components/SalesChart";
import Activity from "./components/Activity";
import { useDashboard } from "./hooks/useDashboard";
import "./App.css";

function App() {
  const [active, setActive] = useState("Dashboard");

  const {
    darkMode,
    setDarkMode,
    period,
    setPeriod,
    stats,
    activities,
    salesData
  } = useDashboard();

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Sidebar active={active} setActive={setActive} />

      <main className="main">
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        {active === "Dashboard" ? (
          <>
            <section className="stats-grid">
              {stats.map((stat) => (
                <StatCard key={stat.title} {...stat} />
              ))}
            </section>

            <section className="dashboard-grid">
              <SalesChart
                data={salesData}
                period={period}
                setPeriod={setPeriod}
              />

              <Activity activities={activities} />
            </section>
          </>
        ) : (
          <div className="empty-page">
            <h2>{active}</h2>
            <p>{active} section selected.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
