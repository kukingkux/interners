"use-client";

import Link from "next/link";

export default function CardPostExplore() {
  return (
    <div className="min-w-screen">
      <div className="bg-gray-200 rounded-2xl text-black p-2.5">
        <div className="flex place-items-center space-x-2">
          <p className="text-2xl font-medium">Job Title</p>
          <p>●</p>
          <p className="text-2xl font-medium">Intern</p>
        </div>
        <p>Company Name</p>
        <div className="flex flex-row space-x-4">
          <p>Hourly Wages IDR 70K+</p>
          <p>Cengkareng, West Jakarta</p>
        </div>
        <ol className="list-decimal list-inside mb-2">
          <li>Prepare ingredients for planned dish.</li>
          <li>Help out the task given by Head Chef.</li>
          <li>Giving service to customers in need.</li>
        </ol>
        <div className="inline-block rounded-full bg-gray-700 text-white py-1 px-4">
          <p>High School Diploma</p>
        </div>
      </div>
      <div className="space-x-2 mt-4">
        <Link href={'#'} className="bg-blue-700 text-white px-4 py-2 rounded-full">Apply Now</Link>
        <Link href="#"className="bg-blue-700 text-white px-4 py-2 rounded-full">Bookmarks</Link>
      </div>
    </div>
  )
}