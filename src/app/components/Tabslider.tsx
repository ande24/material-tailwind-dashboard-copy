"use client";

import { cloneElement, ReactElement } from "react";
import { Tab, Tabs, TabsHeader } from "@material-tailwind/react";

type TabItem = {
  name: string;
  icon: ReactElement;
};

type TabsliderProps = {
  tabs: TabItem[];
};

export default function Tabslider ({ tabs }: TabsliderProps) {
    return (
        <Tabs value="app">
            <TabsHeader className={`bg-gray-200 p-2`}>
                {tabs.map((tab, index) => (
                    <Tab key={index} value={tab.name.toLowerCase()} >
                        {cloneElement(tab.icon, {
                            className: "-mt-1 mr-2 inline-block h-5 w-5",
                        })}
                        {tab.name}
                    </Tab>
                ))}
            </TabsHeader>       
        </Tabs>
    );
}