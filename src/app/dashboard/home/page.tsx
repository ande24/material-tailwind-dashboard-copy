"use client";

import GraphCard from "@/app/components/Graphcard";
import StatCard from "@/app/components/Statcard";
import {
  FaChartBar,
  FaMoneyBillWave,
  FaUserFriends,
  FaUserPlus,
} from "react-icons/fa";
import { Props as ChartProps } from "react-apexcharts";

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const chartConfig: ChartProps = {
  type: "bar",
  height: 215,
  series: [
    {
      name: "Views",
      data: [50, 20, 10, 22, 50, 10, 40],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#228B22"],
    plotOptions: {
      bar: {
        columnWidth: 7,
        borderRadius: 5,
      },
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: [
        "M",
        "T",
        "W",
        "T",
        "F",
        "S",
        "S",
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
  },
};

const chartConfig2: ChartProps = {
  type: "line",
  height: 215,
  series: [
    {
      name: "Sales",
      data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#020617"],
    stroke: {
      lineCap: "round",
      curve: "smooth",
    },
    markers: {
      size: 0,
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
  },
};

const chartConfig3: ChartProps = {
  type: "bar" as const,
  height: 215,
  series: [
    {
      name: "Sales",
      data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#6495ED"],
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 2,
      },
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
  },
};

const chart1 = <Chart {...chartConfig} />;
const chart2 = <Chart {...chartConfig2} />;
const chart3 = <Chart {...chartConfig3} />;

export default function Home() {
  return (
    <div className="flex-col w-full pt-10 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full gap-x-6 gap-y-10 mb-12">
        <StatCard
          title="Today's Money"
          value="$53k"
          icon={<FaMoneyBillWave />}
          change="+55%"
          changeColor="green"
          subtitle="than last week"
        />
        <StatCard
          title="Today's users"
          value="2,300"
          icon={<FaUserFriends />}
          change="+3%"
          subtitle="than last month"
        />
        <StatCard
          title="New Clients"
          value="3,462"
          icon={<FaUserPlus />}
          change="-2%"
          changeColor="red"
        />
        <StatCard
          title="Sales"
          value="$103,430"
          icon={<FaChartBar />}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-x-6 gap-y-10">
        <GraphCard 
          title="Website View"
          subtitle="Last Campaign Performance"
          update="campaign sent 2 days ago"
          chart={chart1}
        />
        <GraphCard 
          title="Website View"
          update="updated 4 min ago"
          chart={chart2}
        />
        <GraphCard 
          title="Website View"
          subtitle="Last Campaign Performance"
          chart={chart3}
        />
      </div>
    </div>
  );
}
