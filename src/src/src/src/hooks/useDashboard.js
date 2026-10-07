import { useMemo, useState } from "react";

export const useDashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [period, setPeriod] = useState("7 Days");

  const stats = useMemo(
    () => [
      {
        title: "Total Revenue",
        value: "$24,580",
        change: "+12.5%",
        icon: "revenue"
      },
      {
        title: "Total Orders",
        value: "1,248",
        change: "+8.2%",
        icon: "orders"
      },
      {
        title: "Customers",
        value: "8,420",
        change: "+15.8%",
        icon: "customers"
      },
      {
        title: "Conversion Rate",
        value: "6.84%",
        change: "+2.4%",
        icon: "conversion"
      }
    ],
    []
  );

  const activities = [
    {
      name: "John Smith",
      action: "placed a new order",
      time: "5 min ago"
    },
    {
      name: "Sarah Wilson",
      action: "registered as a customer",
      time: "18 min ago"
    },
    {
      name: "Michael Brown",
      action: "completed a payment",
      time: "32 min ago"
    },
    {
      name: "Emma Davis",
      action: "updated her profile",
      time: "1 hour ago"
    }
  ];

  const salesData = {
    "7 Days": [35, 48, 42, 65, 52, 75, 68],
    "30 Days": [45, 55, 50, 70, 65, 80, 74],
    "90 Days": [40, 62, 55, 72, 68, 85, 78]
  };

  return {
    darkMode,
    setDarkMode,
    period,
    setPeriod,
    stats,
    activities,
    salesData: salesData[period]
  };
};
