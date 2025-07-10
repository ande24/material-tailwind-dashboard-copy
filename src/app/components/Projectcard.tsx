import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  Avatar,
} from "@material-tailwind/react";
import Image from "next/image";

type ProjectCardProps = {
    image: string;
    projectNumber: string;
    title: string; 
    description?: string; 
    people?: {
        name: string; 
        avatar: string;
    }[];
}

export default function Projectcard ({ image, projectNumber, title, description, people}: ProjectCardProps) {
    return (
        <Card className="mt-6 w-full">
            <CardHeader color="blue-gray" className="relative h-56">
                <Image
                    src={image}
                    alt="card-image"
                    className={`h-full w-full object-cover`}
                />
            </CardHeader>
            <CardBody>
                <Typography className="mb-1 text-xs text-gray-500">
                    Project #{projectNumber}
                </Typography>
                <Typography className="mb-2 font-bold text-lg text-gray-800">
                    {title}
                </Typography>
                <Typography className="text-sm text-gray-500">
                    {description}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0 flex justify-between">
                <Button variant="outlined" className={`p-2 cursor-pointer`}>
                    <Typography variant="small" className={`ml-2 mr-2 hover:opacity-70 text-xs`}>
                        VIEW PROJECT
                    </Typography>
                </Button>
                <div className="flex items-center -space-x-3">
                    {people?.map((person) => (
                        <Tooltip key={person.name} className={`p-2`} content={person.name}>
                            <Avatar
                                alt={person.name.toLowerCase()}
                                src={person.avatar}
                                className="border-2 rounded-full border-white hover:z-10 w-7 h-7"
                            />
                        </Tooltip>
                    ))}
                </div>
            </CardFooter>
        </Card>
    )
}