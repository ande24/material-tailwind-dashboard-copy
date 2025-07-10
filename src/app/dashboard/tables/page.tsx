"use client";

import Authorstable from "@/app/components/Authorstable";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export default function Tables() {
  const TABLE_HEAD = ["AUTHOR", "FUNCTION", "STATUS", "EMPLOYED", ""];
  
  const TABLE_ROWS = [
    {
      img: "https://img.freepik.com/premium-vector/people-profile-graphic_24911-21373.jpg",
      name: "John Michael",
      email: "john@creative-tim.com",
      job: "Manager",
      org: "Organization",
      online: true,
      date: "23/04/18",
    },
    {
      img: "https://img.freepik.com/premium-vector/people-profile-graphic_24911-21373.jpg",
      name: "Alexa Liras",
      email: "alexa@creative-tim.com",
      job: "Programator",
      org: "Developer",
      online: false,
      date: "23/04/18",
    },
    {
      img: "https://img.freepik.com/premium-vector/people-profile-graphic_24911-21373.jpg",
      name: "Laurent Perrier",
      email: "laurent@creative-tim.com",
      job: "Executive",
      org: "Projects",
      online: false,
      date: "19/09/17",
    },
    {
      img: "https://img.freepik.com/premium-vector/people-profile-graphic_24911-21373.jpg",
      name: "Michael Levi",
      email: "michael@creative-tim.com",
      job: "Programator",
      org: "Developer",
      online: true,
      date: "24/12/08",
    },
    {
      img: "https://img.freepik.com/premium-vector/people-profile-graphic_24911-21373.jpg",
      name: "Richard Gran",
      email: "richard@creative-tim.com",
      job: "Manager",
      org: "Executive",
      online: false,
      date: "04/10/21",
    },
  ];

  return (
    <div className="flex gap-8 p-4 bg-gray-100">
      {/* <div className="w-full mt-12 mb-8 flex flex-col gap-12">
        <Card>
          <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
            <Typography variant="h6" color="white">
              Authors Table
            </Typography>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <Authorstable head={TABLE_HEAD} rows={TABLE_ROWS}/>
          </CardBody>
        </Card>
      </div> */}
    </div>
  );
}
