"use client";

export default function Home() {
  return (
    <div className="min-w-screen min-h-screen bg-white flex flex-col">
      <nav className="bg-white border-b border-gray-200 sticky top-0">
        <div className="flex flex-wrap place-items-center justify-between p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <p className="text-2xl font-semibold text-black">Interners</p>
          </a>

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => {
              const menu = document.getElementById("navbar-default");
              menu.classList.toggle("hidden");
            }}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 place-items-center md:flex-row md:space-x-4 rtl:space-x-reverse">
              <li>
                <a
                  href="#"
                  className="font-medium text-black hover:text-blue-900"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-medium text-black hover:text-blue-900"
                >
                  About Us
                </a>
              </li>
              <li>
                <button className="border border-blue-500 rounded-md text-blue-500 font-medium hover:text-blue-900 hover:border-blue-900 px-6 py-2">
                  Login
                </button>
              </li>
              <li>
                <button className="border bg-blue-500 rounded-md text-white font-medium hover:text-blue-900 hover:border-blue-900 px-6 py-2">
                  Register
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

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