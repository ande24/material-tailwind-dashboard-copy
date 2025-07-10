"use client"

import { Typography } from "@material-tailwind/react";
import { ReactNode } from "react";
import { FaClock } from "react-icons/fa";

type GraphCardProps = {
    title: string;
    subtitle?: string;
    chart: ReactNode;
    update?: string;
}

export default function GraphCard({ title, subtitle, chart, update }: GraphCardProps) {
  return (
    <div className="flex flex-col flex-1 gap-2 rounded-xl border-1 border-gray-300 bg-white">
        <div className="flex flex-col justify-center p-4 w-full">
            {chart}
            <Typography variant="h6" className={`${subtitle ? "mb-1" : "mb-6"} ml-2`}>
                {title}
            </Typography>
            <Typography variant="small" className="text-gray-600 ml-2">
                {subtitle}
            </Typography>
        </div>
        {update && (
            <div className={`flex justify-start items-center p-6 gap-1 border-t-1 border-gray-200`}>
                <Typography variant="small" className="flex items-center gap-1 text-gray-500">
                    <FaClock />{update}
                </Typography>
            </div>
        )}
    </div>
  );
}