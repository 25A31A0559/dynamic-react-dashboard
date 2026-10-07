import {
  DollarSign,
  ShoppingCart,
  Users,
  TrendingUp
} from "lucide-react";

const icons = {
  revenue: DollarSign,
  orders: ShoppingCart,
  customers: Users,
  conversion: TrendingUp
};

const StatCard = ({ title, value, change, icon }) => {
  const Icon = icons[icon];

  return (
    <div className="stat-card">
      <div className="stat-top">
        <div>
          <p>{title}</p>
          <h2>{value}</h2>
        </div>

        <div className="stat-icon">
          <Icon size={22} />
        </div>
      </div>

      <div className="stat-change">
        <span>{change}</span>
        <small>from last period</small>
      </div>
    </div>
  );
};

export default StatCard;
