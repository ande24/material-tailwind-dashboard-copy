"use client";

import { Typography } from "@material-tailwind/react";
import { ReactNode } from "react";
import { FaChartBar } from "react-icons/fa";

type StatCardProps = {
    title: string;
    value: string;
    icon?: ReactNode;
    change?: string;
    changeColor?: string;
    subtitle?: string;
}

export default function StatCard({ title, value, icon, change, changeColor, subtitle }: StatCardProps) {
  return (
    <div className="flex flex-col flex-1 rounded-xl border-1 border-gray-300 bg-white">
        <div className="flex justify-between items-center p-4">
            <div className={`bg-gray-800 text-white p-3 text-2xl rounded-xl`}>
                {icon ?? <FaChartBar />}
            </div>
            <div className={`flex flex-col gap-1 items-end justify-end`}>
                <Typography variant="small" className="text-gray-500 flex-wrap">
                    {title}
                </Typography>
                <Typography variant="h4" className={`text-gray-800`}>{value}</Typography>
            </div>
        </div>
        {change && (
            <div className={`flex justify-start items-center p-4 gap-1 border-t-1 border-gray-200`}>
            <Typography className={`${changeColor === "red" ? "text-red-600" : changeColor === "green" ? "text-green-600" : "text-gray-700"} font-bold`}>{change}</Typography>
            {subtitle && <Typography className={`text-gray-600`}>{subtitle}</Typography>}
        </div>
        )}
    </div>
  );
}