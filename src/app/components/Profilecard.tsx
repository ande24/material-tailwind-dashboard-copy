import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { FaFacebook, FaInstagram, FaPen, FaTwitter } from "react-icons/fa";

type ProfileCardProps = {
    title: string;
    description: string;
    name: string;
    mobile: string;
    email: string;
    location: string;
    socials: string[];
}

export default function Profilecard ({ title, description, name, mobile, email, location, socials }: ProfileCardProps) {
  return (
    <Card color="transparent" shadow={false}>
      <CardHeader
        color="transparent"
        shadow={false}
        floated={false}
        className="mx-0 mt-0 mb-4 flex items-center justify-between gap-4"
      >
        <Typography variant="h6" color="blue-gray">
          {title}
        </Typography>
        <Tooltip content="Edit Profile">
            <FaPen className={`text-gray-600`}/>
        </Tooltip>
      </CardHeader>
      <CardBody className="p-0">
        {description && (
          <Typography
            variant="small"
            className="font-normal text-gray-500"
          >
            {description}
          </Typography>
        )}
        {description ? (
          <hr className="my-8 border-gray-200" />
        ) : null}
        <ul className="flex flex-col text-gray-500 gap-4 p-0">
            {name && (
              <li>
                <Typography
                  variant="small"
                >
                  <span className={`font-bold text-gray-800 mr-1`}>Name: </span> {name}
                </Typography>
              </li>
            )}
            {mobile && (
              <li>
                <Typography
                  variant="small"
                  color="blue-gray"
                >
                  <span className={`font-bold text-gray-800 mr-1`}>Mobile: </span> {mobile}
                </Typography>
              </li>
            )}
            {email && (
              <li>
                <Typography
                  variant="small"
                  color="blue-gray"
                >
                  <span className={`font-bold text-gray-800 mr-1`}>Email: </span> {email}
                </Typography>
              </li>
            )}
            {location && (
              <li>
                <Typography
                  variant="small"
                  color="blue-gray"
                >
                  <span className={`font-bold text-gray-800 mr-1`}>Location: </span> {location}
                </Typography>
              </li>
            )}
            {socials && (
                <li>
                    <Typography
                    variant="small"
                    color="blue-gray"
                    className={`flex gap-4`}
                    >
                        <span className={`font-bold text-gray-800 mr-1`}>Socials: </span> 
                        {socials.map((item) => {
                            if (item === "facebook") {
                                return (
                                    <FaFacebook key={item} className={`text-blue-700`}/>
                                )
                            }
                            else if (item === "twitter") {
                                return (
                                    <FaTwitter key={item} className={`text-blue-400`}/>
                                )
                            }
                            else if (item === "instagram") {
                                return (
                                    <FaInstagram key={item} className={`text-purple-700`}/>
                                )
                            }
                        })} 
                    </Typography>
                </li>
            )}
        </ul>
        
      </CardBody>
    </Card>
  );
}