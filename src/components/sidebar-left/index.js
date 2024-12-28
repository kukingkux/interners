"use-client";

import Link from "next/link";

export default function SideNavigationLeft() {
    return (
      <aside className="fixed min-w-60 top-0 left-0 z-40 h-screen pt-24 bg-white border-r border-gray-200 hidden sm:block">
        <div className="h-full flex flex-col justify-between px-3 pb-4 overflow-y-auto">
          <ol className="space-y-2 text-black text-xl font-medium">
            <li className="hover:text-blue-700">
              <Link href="home">Home</Link>
            </li>
            <li className="hover:text-blue-700">
              <Link href="#">Build Your CV</Link>
            </li>
            <li className="hover:text-blue-700">
              <Link href="explore">Explore</Link>
            </li>
          </ol>
          <ol className="space-y-2 text-black text-xl font-medium">
            <li className="hover:text-blue-700">
              <Link href="#">About Us</Link>
            </li>
            <li className="hover:text-blue-700">
              <Link href="#">Contact</Link>
            </li>
          </ol>
        </div>
      </aside>
    )
}