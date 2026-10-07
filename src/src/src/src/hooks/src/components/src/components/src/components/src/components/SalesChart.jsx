const SalesChart = ({ data, period, setPeriod }) => {
  const max = Math.max(...data);

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="chart-card">
      <div className="card-header">
        <div>
          <h2>Sales Overview</h2>
          <p>Revenue performance</p>
        </div>

        <select
          value={period}
          onChange={(event) => setPeriod(event.target.value)}
        >
          <option>7 Days</option>
          <option>30 Days</option>
          <option>90 Days</option>
        </select>
      </div>

      <div className="chart">
        {data.map((value, index) => (
          <div className="bar-wrapper" key={index}>
            <div
              className="bar"
              style={{ height: `${(value / max) * 100}%` }}
              title={`${value}k`}
            />
            <span>{days[index]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesChart;
