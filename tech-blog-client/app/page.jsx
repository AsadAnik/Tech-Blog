import BlogCard from '@/components/widgets/Card';

export default function Home() {
  return (
    <main className="flex justify-around">
      {/* Centered container for categories and BlogCards */}
      <div className="flex w-2/3 justify-center ml-[6rem]">
        {/* Left side for categories */}
        <aside className="w-1/4 p-4">
          {/* Add your categories list here */}
          <ul className="list-none p-0">
            <li>Category 1</li>
            <li>Category 2</li>
            <li>Category 3</li>
            {/* Add more categories as needed */}
          </ul>
        </aside>

        {/* Right side for BlogCards */}
        <div className="w-3/4 max-h-screen overflow-y-auto p-4">
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
