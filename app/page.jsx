// import BlogCard from "@/components/widgets/Card";
// // import { Card, CardContent, Divider, Text, Button } from "@nextui-org/react";

// export default function Home() {
//   return (
//     <main className="flex justify-around ">
//       <div className="flex w-2/3 justify-center ml-[6rem]">
//         {/* Left side for categories */}
//         <aside className="w-1/4 p-4 bg-white rounded-lg shadow-md ">
//           {/* Category List */}
//           <h2 className="text-xl font-semibold mb-4 text-gray-800">
//             Categories
//           </h2>
//           <ul className="list-none p-0">
//             <li className="mb-2">
//               <a
//                 href="#"
//                 className="text-blue-600 hover:text-blue-700 hover:underline transition duration-300 ease-in-out"
//               >
//                 Category 1
//               </a>
//             </li>
//             <li className="mb-2">
//               <a
//                 href="#"
//                 className="text-blue-600 hover:text-blue-700 hover:underline transition duration-300 ease-in-out"
//               >
//                 Category 2
//               </a>
//             </li>
//             <li className="mb-2">
//               <a
//                 href="#"
//                 className="text-blue-600 hover:text-blue-700 hover:underline transition duration-300 ease-in-out"
//               >
//                 Category 3
//               </a>
//             </li>
//             {/* Add more categories as needed */}
//           </ul>
//         </aside>

//         {/* Right side for BlogCards */}
//         <div className="w-3/4 p-4 border shadow overflow-y-auto">
//           {/* Inside the container, render your BlogCard components */}
//           <BlogCard />
//           <BlogCard />
//           <BlogCard />
//           {/* Add more BlogCard components as needed */}
//         </div>
//       </div>
//     </main>
//   );
// }

'use client'
import BlogCard from "@/components/widgets/Card";
import { Text, Divider, Link } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="flex justify-around">
      {/* Centered container for categories and BlogCards */}
      <div className="flex w-2/3 justify-center ml-[6rem]">
        {/* Left side for categories */}
        <aside className="w-1/4 p-4 bg-white rounded-lg shadow-md relative">
          {/* Category List */}
          <div
            className="fixed"
            style={{
              maxHeight: "calc(100vh - 2rem)", // Adjust the height as needed
              overflowY: "auto",
            }}
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Categories
            </h2>
            <ul className="list-none p-0">
              <li className="mb-2">
                <Link
                  color="primary"
                  hoverColor="secondary"
                  underline
                  href="#"
                >
                  Category 1
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  color="primary"
                  hoverColor="secondary"
                  underline
                  href="#"
                >
                  Category 2
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  color="primary"
                  hoverColor="secondary"
                  underline
                  href="#"
                >
                  Category 3
                </Link>
              </li>
              {/* Add more categories as needed */}
            </ul>
          </div>
        </aside>

        {/* Right side for BlogCards */}
        <div className="w-3/4 p-4 border shadow">
          {/* Inside the container, render your BlogCard components */}
          <BlogCard />
          <BlogCard />
          <BlogCard />
          {/* Add more BlogCard components as needed */}
        </div>
      </div>
    </main>
  );
}
