"use client";

import { Switch, Typography } from "@material-tailwind/react";

type ToggleSettingsProps = {
    sections: {
        title: string;
        options: {
            label: string;
            checked?: boolean;
        }[];
    }[]
}

export default function ({ sections }: ToggleSettingsProps) {

    return (
        <>
            {sections.map(({ title, options }) => (
                <div key={title}>
                    <Typography className="mb-4 block text-xs font-semibold uppercase text-blue-gray-500">
                        {title}
                    </Typography>
                    <div className="flex flex-col gap-6">
                        {options.map(({ checked, label }) => (
                            <Switch
                                crossOrigin=""
                                key={label}
                                id={label}
                                label={label}
                                defaultChecked={checked ?? false}
                                labelProps={{
                                    className: "text-sm font-normal text-blue-gray-500",
                                }}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
}