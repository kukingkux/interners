"use client";

import TopNavigaton from "@/components/topbar";

export default function HomePage() {
  return (
    <div className="min-w-screen min-h-screen bg-white flex flex-col">
      <TopNavigaton btnBack={'hidden'}/>

      <div className="grow mx-4 my-4 space-y-4">
        <div className="w-100 flex flex-row place-content-center space-x-3">
          <a
            href="#"
            className="bg-gray-500 px-4 py-2 rounded-full hover:bg-blue-700"
          >
            Location
          </a>
          <a
            href="#"
            className="bg-gray-500 px-4 py-2 rounded-full hover:bg-blue-700"
          >
            Wages
          </a>
          <a
            href="#"
            className="bg-gray-500 px-4 py-2 rounded-full hover:bg-blue-700"
          >
            Most Recents
          </a>
          <a
            href="#"
            className="bg-gray-500 px-4 py-2 rounded-full hover:bg-blue-700"
          >
            Bookmarks
          </a>
          <a href="#" className="bg-blue-700 px-4 py-2 rounded-full">
            Search
          </a>
        </div>
        <p className="font-bold text-2xl text-black">
          Based on your preference, we have...
        </p>
        <div className="grid grid-cols-4 grid-flow-row gap-4">
          <a href="#">
            <div className="bg-white border border-gray-200 rounded-2xl">
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
                  <p className="text-gray-700">Jakarta, Indonesia</p>
                </div>
                <ol className="list-decimal list-inside text-gray-700">
                  <li>Design font-end websites htmlFor Interners.</li>
                  <li>Improve UI/UX</li>
                  <li>Provide soultions to day-to-day problems</li>
                </ol>
              </div>
            </div>
          </a>
          <a href="#">
            <div className=" bg-white border border-gray-200 rounded-2xl">
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
                  <p className="text-gray-700">Jakarta, Indonesia</p>
                </div>
                <ol className="list-decimal list-inside text-gray-700">
                  <li>Design font-end websites htmlFor Interners.</li>
                  <li>Improve UI/UX</li>
                  <li>Provide soultions to day-to-day problems</li>
                </ol>
              </div>
            </div>
          </a>
          <a href="#">
            <div className=" bg-white border border-gray-200 rounded-2xl">
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
                  <p className="text-gray-700">Jakarta, Indonesia</p>
                </div>
                <ol className="list-decimal list-inside text-gray-700">
                  <li>Design font-end websites htmlFor Interners.</li>
                  <li>Improve UI/UX</li>
                  <li>Provide soultions to day-to-day problems</li>
                </ol>
              </div>
            </div>
          </a>
          <a href="#">
            <div className=" bg-white border border-gray-200 rounded-2xl">
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
                  <p className="text-gray-700">Jakarta, Indonesia</p>
                </div>
                <ol className="list-decimal list-inside text-gray-700">
                  <li>Design font-end websites htmlFor Interners.</li>
                  <li>Improve UI/UX</li>
                  <li>Provide soultions to day-to-day problems</li>
                </ol>
              </div>
            </div>
          </a>
          <a href="#">
            <div className=" bg-white border border-gray-200 rounded-2xl">
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
                  <p className="text-gray-700">Jakarta, Indonesia</p>
                </div>
                <ol className="list-decimal list-inside text-gray-700">
                  <li>Design font-end websites htmlFor Interners.</li>
                  <li>Improve UI/UX</li>
                  <li>Provide soultions to day-to-day problems</li>
                </ol>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}