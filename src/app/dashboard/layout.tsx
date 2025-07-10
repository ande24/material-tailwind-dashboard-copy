"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  FaBars,
  FaBell,
  FaCog,
  FaHome,
  FaIdCard,
  FaInfoCircle,
  FaServer,
  FaTable,
  FaUserCircle,
} from "react-icons/fa";
import { Button } from "@material-tailwind/react";

import "../globals.css";

import Navbar from "../components/Navbar";
import Crumbs from "../components/Crumbs";
import Footer from "../components/Footer";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const rawPath = usePathname();
  const [pathname, setPathname] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setPathname(rawPath);
  }, [rawPath]);

  function setNav (status: boolean) {
    if (status) {
      setOpen(false);
    }
    else {
      setOpen(true);
    }
  } 

  return (
    <html lang="en">
      <body>
        <main className="p-4 gap-4 bg-gray-100 flex h-screen overflow-auto">
          <div className={`w-72 hidden lg:block`}></div>
          <div className={`z-20 ${open ? "block lg:hidden" : "hidden"}`}>
            <Navbar
              title="Material Tailwind React Copy"
              sections={[
                {
                  sectionTitle: "",
                  tabs: [
                    {
                      label: "Dashboard",
                      icon: <FaHome />,
                      path: "/dashboard/home",
                    },
                    {
                      label: "Profile",
                      icon: <FaUserCircle />,
                      path: "/dashboard/profile",
                    },
                    {
                      label: "Tables",
                      icon: <FaTable />,
                      path: "/dashboard/tables",
                    },
                    {
                      label: "Notifications",
                      icon: <FaInfoCircle />,
                      path: "/dashboard/notifications",
                    },
                  ],
                },
                {
                  sectionTitle: "AUTH PAGES",
                  tabs: [
                    {
                      label: "Sign In",
                      icon: <FaServer />,
                      path: "/auth/signin",
                    },
                    {
                      label: "Sign Up",
                      icon: <FaIdCard />,
                      path: "/auth/signup",
                    },
                  ],
                },
              ]}
              path={pathname}
            />
          </div>
          <div className={`z-20 lg:block hidden`}>
            <Navbar
              title="Material Tailwind React Copy"
              sections={[
                {
                  sectionTitle: "",
                  tabs: [
                    {
                      label: "Dashboard",
                      icon: <FaHome />,
                      path: "/dashboard/home",
                    },
                    {
                      label: "Profile",
                      icon: <FaUserCircle />,
                      path: "/dashboard/profile",
                    },
                    {
                      label: "Tables",
                      icon: <FaTable />,
                      path: "/dashboard/tables",
                    },
                    {
                      label: "Notifications",
                      icon: <FaInfoCircle />,
                      path: "/dashboard/notifications",
                    },
                  ],
                },
                {
                  sectionTitle: "AUTH PAGES",
                  tabs: [
                    {
                      label: "Sign In",
                      icon: <FaServer />,
                      path: "/auth/signin",
                    },
                    {
                      label: "Sign Up",
                      icon: <FaIdCard />,
                      path: "/auth/signup",
                    },
                  ],
                },
              ]}
              path={pathname}
            />
          </div>
          <div className="flex-1 flex-col">
            <div className={`w-full flex justify-between mb-4`}>
              <Crumbs path={pathname} />
              <div className={`flex gap-4 items-center justify-center`}>
                <input
                  type="text"
                  placeholder="Search"
                  className={`outline-0 border-1 border-gray-400 rounded-lg px-4 h-10 text-sm w-54`}
                />
                <div className={`flex text-gray-500`}>
                  <Button
                    onClick={() => setNav(open)}
                    variant="text"
                    className={`px-3 cursor-pointer text-gray-500 hover:bg-gray-200 rounded-lg h-10 justify-center items-center flex lg:hidden`}
                  >
                    <FaBars className="text-lg" />
                  </Button>
                  <Button
                    variant="text"
                    className="flex text-gray-500 h-10 items-center gap-1 normal-case px-3 lg:px-4 text-xs cursor-pointer hover:bg-gray-200"
                  >
                    <FaUserCircle className="text-lg" />
                    <span className={`lg:block hidden`}>Sign In</span>
                  </Button>
                  <Button
                    variant="text"
                    className={`px-3 cursor-pointer text-gray-500 hover:bg-gray-200 rounded-lg h-10 flex justify-center items-center`}
                  >
                    <FaBell className="text-lg" />
                  </Button>
                  <Button
                    variant="text"
                    className={`px-3 cursor-pointer text-gray-500 hover:bg-gray-200 rounded-lg h-10 flex justify-center items-center`}
                  >
                    <FaCog className="text-lg" />
                  </Button>
                </div>
              </div>
            </div>
            {children}
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
