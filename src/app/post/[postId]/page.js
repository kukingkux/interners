"use client";

import TopNavigaton from "@/components/topbar";
import Link from "next/link";


export default function Post() {
    return (
        <div className="min-w-screen min-h-screen bg-white flex flex-col">
        <TopNavigaton/>

        <div className="m-4">
            <div className="bg-gray-300 p-4 flex justify-between">
            <div>
                <div className="mb-4">
                <p className="text-xl text-black font-semibold">CHEF ASSISTANT</p>
                <p className="text-black">Palembang, Indonesia</p>
                </div>
                <p className="text-gray-400">Last Updated at 30/09</p>
            </div>
            <div>
                <div className="flex gap-x-4">
                <Link href="#" className="bg-blue-700 hover:bg-blue-800 grow-0 rounded-md py-2 px-4 text-white h-auto">
                    Bookmark
                </Link>
                <Link href="#" className="bg-blue-700 hover:bg-blue-800 grow-0 rounded-md py-2 px-4 text-white h-auto">
                    Apply Now
                </Link>
                </div>
            </div>
            </div>
        </div>

        <div className="grow flex row gap-x-4 mx-4">
            <div className="grow">
            <div className="bg-gray-300 p-4 grid gap-y-8">
                <div>
                <p className="text-black">Job Description</p>
                <ol className="list-decimal text-black pl-4">
                    <li>Prepare ingredients for planned dish</li>
                    <li>Help out the task given by Head Chef</li>
                    <li>Giving service to customers in need</li>
                </ol>
                </div>
                <div>
                <p className="text-black">Qualifications</p>
                <ol className="list-decimal text-black pl-4">
                    <li>High School Graduate</li>
                    <li>Minimum age of 17 years old</li>
                    <li>Medically fit</li>
                </ol>
                </div>
                <div>
                <p className="text-black">
                    Wage: Rp. 70,000 ~ 85,000 per hour (Experience based)
                </p>
                </div>
            </div>
            </div>
            <div className="shrink">
            <div className="bg-gray-300">
                <div className="bg-gray-700 place-content-center text-center p-12">
                <p>Company Banner</p>
                </div>
                <div className="grid p-4 gap-y-2">
                <p className="text-black text-xl font-semibold">
                    PT. Aston Hotel Palembang
                </p>
                <p className="text-black">Company Description</p>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}