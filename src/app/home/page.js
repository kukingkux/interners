"use client";

import CardPost from "@/components/post-card-home";
import TopNavigaton from "@/components/topbar";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-w-screen min-h-screen bg-white flex flex-col">
      <TopNavigaton btnBack={'hidden'}/>

      <div className="grow mx-4 my-4 space-y-4">
        <div className="w-100 flex flex-row place-content-center space-x-3">
          <Link
            href="#"
            className="bg-gray-500 px-4 py-2 rounded-full hover:bg-blue-700"
          >
            Location
          </Link>
          <Link
            href="#"
            className="bg-gray-500 px-4 py-2 rounded-full hover:bg-blue-700"
          >
            Wages
          </Link>
          <Link
            href="#"
            className="bg-gray-500 px-4 py-2 rounded-full hover:bg-blue-700"
          >
            Most Recents
          </Link>
          <Link
            href="#"
            className="bg-gray-500 px-4 py-2 rounded-full hover:bg-blue-700"
          >
            Bookmarks
          </Link>
          <Link href="#" className="bg-blue-700 px-4 py-2 rounded-full">
            Explore
          </Link>
        </div>
        <p className="font-bold text-2xl text-black">
          Based on your preference, we have...
        </p>
        <div className="grid grid-cols-4 grid-flow-row gap-4">
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
        </div>
      </div>
    </div>
  );
}