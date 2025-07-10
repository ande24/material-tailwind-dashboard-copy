"use client";

import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import Avatarcard from "@/app/components/Avatarcard";
import Profilecard from "@/app/components/Profilecard";
import Projectcard from "@/app/components/Projectcard";

export default function Profile() {
  return (
    <div className={`w-full`}>
      <div className="relative mt-6 h-72 w-full overflow-hidden rounded-xl bg-[url('https://4kwallpapers.com/images/walls/thumbs_2t/8710.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
      </div>
      <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-gray-300 shadow-md">
        <CardBody className="p-4">
          <div className="mb-10 flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-6">
              <Avatarcard
                image="https://img.freepik.com/premium-vector/people-profile-graphic_24911-21373.jpg"
                name="Rich Dav"
                titles={["CEO", "Co-Founder"]}
              />
            </div>
            <div className="w-96">
              {/* <Tabslider 
                tabs={[
                  {name: "App", icon: <FaHouse />},
                  {name: "Messages", icon: <FaMessage />},
                  {name: "Settings", icon: <FaGear />}
                ]}
              /> */}
            </div>
          </div>
          <div className="grid-cols-1 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-3">
            {/*<div>
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Platform Settings
              </Typography> 
              <div className="flex flex-col gap-12">
                 <ToggleSettings 
                  sections={[
                    {
                      title: "ACCOUNT",
                      options: [
                        {
                          label: "Email me when someone follows me",
                          checked: true
                        },
                        {
                          label: "Email me when someone answers on my post"
                        },
                        {
                          label: "Email me when someone mentions me",
                          checked: true
                        },
                      ]
                    },
                    {
                      title: "APPLICATION",
                      options: [
                        {
                          label: "New launches and projects"
                        },
                        {
                          label: "Monthly product updates",
                          checked: true
                        },
                        {
                          label: "Subscribe to newsletter"
                        },
                      ]
                    },
                  ]}
                /> 
              </div>
            </div>*/}
            <Profilecard
              title="Profile Information"
              description="Hi, I'm Alec Thompson, Decisions: If you can't decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
              name= "Alec M. Thompson"
              mobile= "(44) 123 1234 123"
              email= "alecthompson@mail.com"
              location= "USA"
              socials={["facebook", "instagram", "twitter"]}
            />
            <div>
              {/* <Typography variant="h6" color="blue-gray" className="mb-3">
                Platform Settings
              </Typography> */}
              <ul className="flex flex-col gap-6">

              </ul>
            </div>
          </div>
          <div className="px-4 pb-4 mt-12">
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Projects
            </Typography>
            <Typography
              variant="small"
              className="font-normal text-gray-500"
            >
              Architects design houses
            </Typography>
            <div className="w-full grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              <Projectcard 
                projectNumber="1"
                title="Modern"
                description="As Uber works through a huge amount of internal management turmoil."
                image="https://www.decorilla.com/online-decorating/wp-content/uploads/2022/06/Open-home-with-mid-century-modern-interior-design-2-scaled.jpeg"
                people={[
                  {
                    name: "Natali Craig",
                    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                  }, 
                  {
                    name: "Tania Andrew",
                    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                  }
                ]}
              />
              <Projectcard 
                projectNumber="2"
                title="Scandinavian"
                description="Music is something that every person has his or her own specific opinion about."
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDKhSWGAQrXbn8LoLpHTcmDlxvYzm6R48iMA&s"
                people={[
                  {
                    name: "Natali Craig",
                    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                  }, 
                ]}
              />
              <Projectcard 
                projectNumber="3"
                title="Minimalist"
                description="Different people have different taste, and various types of music."
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ_sk39M1CQ_d53Sd1G8zfWxZ9YqIm21UXYQ&s"
              />
              <Projectcard 
                projectNumber="4"
                title="Gothic"
                description="Why would anyone pick blue over pink? Pink is obviously a better color."
                image="https://furniture123.co.uk/Images/BUNKOR00195433_3_Supersize.jpg?v=79"
                people={[
                  {
                    name: "Natali Craig",
                    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                  }, 
                  {
                    name: "Tania Andrew",
                    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                  }
                ]}
              />
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
