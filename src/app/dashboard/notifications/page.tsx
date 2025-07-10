"use client";

import React, { useState } from "react";import {
  Typography,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import Alert from "@/app/components/Alert";
import { FaInfoCircle } from "react-icons/fa";

type AlertColor = "black" | "green" | "orange" | "red";

export default function Notifications() {
  const [showAlerts, setShowAlerts] = useState<Record<AlertColor, boolean>>({
    black: true,
    green: true,
    orange: true,
    red: true,
  });

  const [showAlertsWithIcon, setShowAlertsWithIcon] = useState<Record<AlertColor, boolean>>({
    black: true,
    green: true,
    orange: true,
    red: true,
  });

  const alerts: AlertColor[] = ["black", "green", "orange", "red"];

  return (
    <div className=" flex gap-8 bg-gray-100">
      <div className="w-full mx-auto my-10 flex max-w-screen-lg flex-col gap-8">
        <Card>
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="m-0 p-4"
          >
            <Typography variant="h5" color="blue-gray">
              Alerts
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4 p-4">
            {alerts.map((color) => (
              <Alert
                key={color}
                open={showAlerts[color]}
                color={color}
                text={<Typography>A simple {color} alert with an example <a href="http://localhost:3000/dashboard/home">link</a>. Give it a click if you like.</Typography>}
                onClose={() => setShowAlerts((current) => ({ ...current, [color]: false }))}
              />
            ))}
          </CardBody>
        </Card>
        <Card>
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="m-0 p-4"
          >
            <Typography variant="h5" color="blue-gray">
              Alerts with Icon
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4 p-4">
            {alerts.map((color) => (
              <Alert
                key={color}
                open={showAlertsWithIcon[color]}
                color={color}
                icon={<FaInfoCircle className={`text-lg`}/>}
                text={<Typography>A simple {color} alert with an example <a href="http://localhost:3000/dashboard/home">link</a>. Give it a click if you like.</Typography>}
                onClose={() => setShowAlertsWithIcon((current) => ({ ...current, [color]: false }))}
              />
            ))}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
