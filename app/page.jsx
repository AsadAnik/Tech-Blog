import BlogCard from "@/components/widgets/Card";
// import { Card, CardContent, Divider, Text, Button } from "@nextui-org/react";


export default function Home() {
  return (
    <main className="flex justify-around"> {/* Use "h-screen" to make the page take full height */}
      {/* Centered container for categories and BlogCards */}
      <div className="flex w-2/3 justify-center ml-[6rem]">
        {/* Left side for categories */}
        <aside className="w-1/4 p-4 bg-white rounded-lg shadow-md">
          {/* Category List */}
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Categories
          </h2>
          <ul className="list-none p-0">
            <li className="mb-2">
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 hover:underline transition duration-300 ease-in-out"
              >
                Category 1
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 hover:underline transition duration-300 ease-in-out"
              >
                Category 2
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 hover:underline transition duration-300 ease-in-out"
              >
                Category 3
              </a>
            </li>
            {/* Add more categories as needed */}
          </ul>
        </aside>

        {/* Right side for BlogCards */}
        <div className="w-3/4 p-4 border shadow overflow-y-auto"> {/* Remove "max-h-screen" */}
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
