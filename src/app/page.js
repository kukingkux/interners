"use client";

import TopNavigaton from "@/components/topbar";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LandingPage() {
  const router = useRouter();

  useEffect(() => {
		const userData = document.cookie;
		if (userData) {
			router.push("/home");
		}
	});

  return (
    <div className="min-w-screen min-h-screen bg-white flex flex-col">
    <TopNavigaton btnBack='hidden' searchBar='hidden'/>

      <div className="grow grid place-content-center h-100 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% py-[96]">
        <p className="font-semibold text-5xl text-center">Your First Step</p>
        <p className="font-semibold text-5xl text-center">Break Away</p>
      </div>

      <div className="grow my-4">
        <div className="mb-4 mx-6">
          <p className="text-black font-medium text-xl">RECENT LISTINGS:</p>
        </div>

        <div className="flex flex-row space-x-6 overflow-x-scroll whitespace-nowrap">
          <a href="#">
            <div className="max-w-sm bg-white border border-gray-200 rounded-2xl ml-6">
              <div className="p-5">
                <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900">
                  Front-End Designer
                </h5>
                <img
                  className="my-6"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
                  alt="Google Logo"
                  width={128}
                  height={216}
                />
                <div className="mb-2">
                  <p className="text-xl font-semibold tracking-tight text-gray-700">
                    Google Corporation
                  </p>
                  <p className="text-gray-700">
                    Jakarta, Indonesia
                  </p>
                </div>
                <ol className="list-decimal list-inside text-gray-700">
                    <li>
                        Design font-end websites for Interners.
                    </li>
                    <li>
                        Improve UI/UX
                    </li>
                    <li>
                        Provide soultions to day-to-day problems
                    </li>
                </ol>
              </div>
            </div>
          </a>

          <a href="#">
            <div className="max-w-sm bg-white border border-gray-200 rounded-2xl">
              <div className="p-5">
                <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900">
                  Front-End Designer
                </h5>
                <img
                  className="my-6"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
                  alt="Google Logo"
                  width={128}
                  height={216}
                />
                <div className="mb-2">
                  <p className="text-xl font-semibold tracking-tight text-gray-700">
                    Google Corporation
                  </p>
                  <p className="text-gray-700">
                    Jakarta, Indonesia
                  </p>
                </div>
                <ol className="list-decimal list-inside text-gray-700">
                    <li>
                        Design font-end websites for Interners.
                    </li>
                    <li>
                        Improve UI/UX
                    </li>
                    <li>
                        Provide soultions to day-to-day problems
                    </li>
                </ol>
              </div>
            </div>
          </a>

          <a href="#">
            <div className="max-w-sm bg-white border border-gray-200 rounded-2xl">
              <div className="p-5">
                <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900">
                  Front-End Designer
                </h5>
                <img
                  className="my-6"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
                  alt="Google Logo"
                  width={128}
                  height={216}
                />
                <div className="mb-2">
                  <p className="text-xl font-semibold tracking-tight text-gray-700">
                    Google Corporation
                  </p>
                  <p className="text-gray-700">
                    Jakarta, Indonesia
                  </p>
                </div>
                <ol className="list-decimal list-inside text-gray-700">
                    <li>
                        Design font-end websites for Interners.
                    </li>
                    <li>
                        Improve UI/UX
                    </li>
                    <li>
                        Provide soultions to day-to-day problems
                    </li>
                </ol>
              </div>
            </div>
          </a>

          <a href="#">
            <div className="max-w-sm bg-white border border-gray-200 rounded-2xl">
              <div className="p-5">
                <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900">
                  Front-End Designer
                </h5>
                <img
                  className="my-6"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
                  alt="Google Logo"
                  width={128}
                  height={216}
                />
                <div className="mb-2">
                  <p className="text-xl font-semibold tracking-tight text-gray-700">
                    Google Corporation
                  </p>
                  <p className="text-gray-700">
                    Jakarta, Indonesia
                  </p>
                </div>
                <ol className="list-decimal list-inside text-gray-700">
                    <li>
                        Design font-end websites for Interners.
                    </li>
                    <li>
                        Improve UI/UX
                    </li>
                    <li>
                        Provide soultions to day-to-day problems
                    </li>
                </ol>
              </div>
            </div>
          </a>

          <a href="#">
            <div className="max-w-sm bg-white border border-gray-200 rounded-2xl">
              <div className="p-5">
                <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900">
                  Front-End Designer
                </h5>
                <img
                  className="my-6"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
                  alt="Google Logo"
                  width={128}
                  height={216}
                />
                <div className="mb-2">
                  <p className="text-xl font-semibold tracking-tight text-gray-700">
                    Google Corporation
                  </p>
                  <p className="text-gray-700">
                    Jakarta, Indonesia
                  </p>
                </div>
                <ol className="list-decimal list-inside text-gray-700">
                    <li>
                        Design font-end websites for Interners.
                    </li>
                    <li>
                        Improve UI/UX
                    </li>
                    <li>
                        Provide soultions to day-to-day problems
                    </li>
                </ol>
              </div>
            </div>
          </a>
        </div>

      </div>
    </div>
  );
}


