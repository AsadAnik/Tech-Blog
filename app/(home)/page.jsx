// "use client";
// import BlogCard from "@/components/widgets/Card";
// import { Text, Divider, Input, Button } from "@nextui-org/react";
// import "@/styles/page.scss";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <main className="flex justify-around">
//       {/* Centered container for categories and BlogCards */}
//       <div className="flex w-2/3 justify-center ml-[6rem]">
//         {/* Left side for categories */}
//         <aside className="w-1/4 p-4 bg-white rounded-lg relative">
//           {/* Category List */}
//           <div
//             className="fixed cate-container"
//             style={{
//               maxHeight: "calc(100vh - 2rem)", // Adjust the height as needed
//               overflowY: "auto",
//             }}
//           >
//             <h2 className="text-xl font-semibold mb-4 text-gray-800">
//               Categories
//             </h2>

//             <ul className="list-none p-0 cate-ul">
//               <li className="mb-2">
//                 <Link color="primary" hoverColor="secondary" underline href="#">
//                   Category 1
//                 </Link>
//               </li>
//               <li className="mb-2">
//                 <Link color="primary" hoverColor="secondary" underline href="#">
//                   Category 2
//                 </Link>
//               </li>
//               <li className="mb-2">
//                 <Link color="primary" hoverColor="secondary" underline href="#">
//                   Category 3
//                 </Link>
//               </li>
//               {/* Add more categories as needed */}
//             </ul>
//           </div>
//         </aside>

//         {/* Right side for BlogCards */}
//         <div className="w-3/4 p-4">
//           <Link href="/post">
//             <div className="flex justify-right p-3 mr-3">
//               <Input
//                 type="text"
//                 id="first_name"
//                 className="w-3/5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 placeholder="John"
//               />
//             </div>
//           </Link>
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
import '@/styles/page.scss';
import Category from '@/components/Category';

export default function Home() {
  	const [tasks, setTasks] = useState([]);


  const addNewPost = (text) => {
		const task = {
      id: shortid.generate(),
      title: text,
      category: "development",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      createdAt: new Date(),
      cover: "/assets/images/designer-1.jpg",
    };
    
		setTasks([task, ...tasks]);
	};

  return (
    <main className="flex justify-around">
      {/* Centered container for categories and BlogCards */}
      <div className="flex w-2/3 justify-center ml-[6rem]">
        {/* Left side for categories */}
        <Category />

        {/* Right side for BlogCards */}
        <div className="w-3/4 p-4">
          <Link href="/post">
            <div className="flex justify-right p-3 mr-3">
              <Input
                type="text"
                id="first_name"
                className="w-3/5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
              />
            </div>
          </Link>
            
            <APP tasks={tasks} />
            {/* <BlogCard tasks={tasks} /> */}
            
          {/* Add more BlogCard components as needed */}
        </div>
      </div>
    </main>
  );
}
