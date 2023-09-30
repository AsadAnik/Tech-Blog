"use client"
import React from "react";


import { Card, CardHeader, CardBody, CardFooter, Avatar, Button, Image } from "@nextui-org/react";

export default function App() {
    const [isFollowed, setIsFollowed] = React.useState(false);

    return (
        <Card className="w-[30vw] h-[60vh] m-5 ">
            {/* ==== Card Header ==== */}
            <CardHeader className="justify-between">
                <div className="flex gap-5">
                    <Avatar isBordered radius="full" size="md" src="/avatars/avatar-1.png" />
                    <div className="flex flex-col gap-1 items-start justify-center">
                        <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
                        <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
                    </div>
                </div>
                <Button
                    className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
                    color="primary"
                    radius="full"
                    size="sm"
                    variant={isFollowed ? "bordered" : "solid"}
                    onPress={() => setIsFollowed(!isFollowed)}
                >
                    {isFollowed ? "Unfollow" : "Follow"}
                </Button>
            </CardHeader>

            {/* ==== Card Body ==== */}
            <CardBody className="px-3 py-0 text-small text-default-400">
                <p>
                    Frontend developer and UI/UX enthusiast. Join me on this coding adventure!
                </p>
                <span className="pt-2">
                    #FrontendWithZoey
                    <span className="py-2" aria-label="computer" role="img">
                        💻
                    </span>
                </span>

                <span className="pt-2">
                    <Image
                        alt="Card background"
                        className="object-cover rounded-xl w-full h-[330px]"
                        src="/images/demo-card.jpeg"
                    />
                </span>
            </CardBody>

            {/* ==== Card Footer ==== */}
            <CardFooter className="gap-3">
                <div className="flex gap-1">
                    <p className="font-semibold text-default-400 text-small">4</p>
                    <p className=" text-default-400 text-small">Following</p>
                </div>
                <div className="flex gap-1">
                    <p className="font-semibold text-default-400 text-small">97.1K</p>
                    <p className="text-default-400 text-small">Followers</p>
                </div>
            </CardFooter>
        </Card>
    );
}


// "use client";
// import React, { useState } from "react";
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Avatar,
//   Button,
//   Image,
// } from "@nextui-org/react";

// export default function App() {
//   const [isFollowed, setIsFollowed] = useState(false);

//   return (
//     <div className="flex justify-center items-center min-h-screen">
//       <Card className="w-full mx-5 max-w-2xl shadow-md dark:bg-gray-800 overflow-hidden">
//         {/* ==== Card Header ==== */}
//         <CardHeader className="flex justify-between items-center p-4 dark:bg-gray-700">
//           <div className="flex items-center">
//             <Avatar
//               isBordered
//               radius="full"
//               size="md"
//               src="/avatars/avatar-1.png"
//             />
//             <div className="ml-4">
//               <h4 className="text-lg font-semibold leading-none text-default-600 dark:text-white">
//                 Zoey Lang
//               </h4>
//               <h5 className="text-sm text-default-400 dark:text-gray-300">
//                 @zoeylang
//               </h5>
//             </div>
//           </div>
//           <Button
//             className={`${
//               isFollowed
//                 ? "bg-transparent text-foreground border-default-200"
//                 : ""
//             }`}
//             color="primary"
//             radius="full"
//             size="sm"
//             variant={isFollowed ? "bordered" : "solid"}
//             onPress={() => setIsFollowed(!isFollowed)}
//           >
//             {isFollowed ? "Unfollow" : "Follow"}
//           </Button>
//         </CardHeader>

//         {/* ==== Card Body ==== */}
//         <CardBody className="px-4 py-2 text-default-400 dark:text-gray-300">
//           <p className="text-sm">
//             Frontend developer and UI/UX enthusiast. Join me on this coding
//             adventure!
//           </p>
//           <div className="mt-4">
//             <Image
//               alt="Card background"
//               className="object-cover rounded-xl w-full h-[330px]"
//               src="/images/demo-card.jpeg"
//             />
//           </div>
//         </CardBody>

//         {/* ==== Card Footer ==== */}
//         <CardFooter className="p-4 flex justify-between dark:bg-gray-700">
//           <div className="text-sm">
//             <p className="font-semibold text-default-400 dark:text-gray-300">
//               4
//             </p>
//             <p className="text-default-400 dark:text-gray-300">Following</p>
//           </div>
//           <div className="text-sm">
//             <p className="font-semibold text-default-400 dark:text-gray-300">
//               97.1K
//             </p>
//             <p className="text-default-400 dark:text-gray-300">Followers</p>
//           </div>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// }
