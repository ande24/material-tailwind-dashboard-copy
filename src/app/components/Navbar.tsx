"use client";

import { Button } from "@material-tailwind/react";
import { usePathname } from "next/navigation";
import { JSX, useEffect, useState } from "react";

type NavbarProps = {
    title?: string;
    sections: {
        sectionTitle?: string;
        tabs: { label: string; icon?: JSX.Element; path: string }[];
    }[];
    path: string;
};

export default function Navbar(NavbarProps: NavbarProps) {
    return (
        <div className={`w-72 fixed top-4 left-4 bottom-4 bg-white border border-gray-300 rounded-xl p-4 font-bold`}>
            <div className="text-center p-4 text-gray-700">
                <h1>{NavbarProps.title}</h1>
            </div>

            <div className="mt-4">
                {NavbarProps.sections.map((section, index) => (
                    <div key={index}>
                        <h2 className={`text-sm font-semibold text-gray-600 mb-2 ml-4 ${section.sectionTitle ? "mt-8" : ""}`}>{section.sectionTitle}</h2>
                        <nav className="flex flex-col gap-1">
                            {section.tabs.map((tab, index) => {
                                const isActive = NavbarProps.path === tab.path;

                                return (
                                    <div className={`w-full flex`} key={index}>
                                        <a className={`w-full flex cursor-pointer`} href={isActive ? "#" : tab.path}>
                                            <Button
                                                variant="text"
                                                ripple={true}
                                                className={`flex w-full items-center justify-start gap-4 p-4 text-left normal-case rounded-lg cursor-pointer ${
                                                    isActive
                                                    ? "bg-gray-900 text-white"
                                                    : "hover:bg-gray-200 text-gray-500"
                                                }`}
                                            >
                                                <>
                                                    {tab.icon && <span className="text-xl">{tab.icon}</span>}
                                                    <span className={`text-sm`}>{tab.label}</span>
                                                </>
                                            </Button>
                                        </a>
                                    </div>
                                );
                            })}
                        </nav>
                    </div>
                ))}
            </div>
        </div>
    )
}