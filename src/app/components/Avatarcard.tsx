"use client";

import { Avatar, Typography } from "@material-tailwind/react";
import { Fragment } from "react";

type AvatarCardProps = {
    image: string;
    name: string;
    titles?: string[];
}

export default function Avatarcard ({image, name, titles}: AvatarCardProps) {
    return (
        <>
            <Avatar
                src={image}
                alt="sample avatar"
                variant="rounded"
                className="w-20 h-20 rounded-lg shadow-lg shadow-blue-gray-500/40"
            />
            <div>
                <Typography variant="h5" className="mb-1 text-gray-800">
                    {name}
                </Typography>
                {titles?.map((title, index) => {
                    const len = titles.length;

                    return (
                        <Fragment key={index}>
                            <span
                                className="text-gray-500 text-sm mr-1"
                            >
                                {title}
                            </span>
                            {index < len - 1 && (
                                <span className={`mr-1 text-sm`}>/</span>
                            )}
                        </Fragment>
                    );
                })}
            </div>
        </>
    )
}