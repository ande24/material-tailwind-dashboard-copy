import { Typography } from "@material-tailwind/react";

export default function Footer () {
    return (
        <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-blue-gray-50 pb-6 text-center md:justify-between">
            <Typography color="gray" className="font-normal text-sm">
                &copy; 2025 Material Tailwind Copy
            </Typography>
            <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                <li>
                    <Typography
                        as="a"
                        href="#"
                        color="gray"
                        className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 text-sm"
                    >
                        About Us
                    </Typography>
                </li>
                <li>
                    <Typography
                        as="a"
                        href="#"
                        color="gray"
                        className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 text-sm"
                    >
                        License
                    </Typography>
                </li>
                <li>
                    <Typography
                        as="a"
                        href="#"
                        color="gray"
                        className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 text-sm"
                    >
                        Contribute
                    </Typography>
                </li>
                <li>
                    <Typography
                        as="a"
                        href="#"
                        color="gray"
                        className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 text-sm"
                    >
                        Contact Us
                    </Typography>
                </li>
            </ul>
        </footer>
    )
}