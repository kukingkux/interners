"use client";

export default function Home() {
  return (
    <div className="min-w-screen min-h-screen bg-white flex flex-col">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
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

          <form className="grow max-w-screen-sm">
            <div className="relative">
              <div className="absolute inset-y-0 start-2 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full pl-12 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search Mockups, Logos..."
                required
              />
            </div>
          </form>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 place-items-center md:flex-row md:space-x-4 rtl:space-x-reverse">
              <li>
                <button className="border border-gray-400 rounded-full text-black hover:text-blue-900 hover:border-blue-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 m-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </li>
              <li>
                <button className="border border-gray-400 rounded-full text-black hover:text-blue-900 hover:border-blue-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 m-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </li>
              <li>
                <button className="border border-gray-400 rounded-full text-black hover:text-blue-900 hover:border-blue-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 m-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 0 1-.517.608 7.45 7.45 0 0 0-.478.198.798.798 0 0 1-.796-.064l-.453-.324a1.875 1.875 0 0 0-2.416.2l-.243.243a1.875 1.875 0 0 0-.2 2.416l.324.453a.798.798 0 0 1 .064.796 7.448 7.448 0 0 0-.198.478.798.798 0 0 1-.608.517l-.55.092a1.875 1.875 0 0 0-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 0 1-.064.796l-.324.453a1.875 1.875 0 0 0 .2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 0 1 .796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 0 1 .517-.608 7.52 7.52 0 0 0 .478-.198.798.798 0 0 1 .796.064l.453.324a1.875 1.875 0 0 0 2.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 0 1-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 0 0 1.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 0 1-.608-.517 7.507 7.507 0 0 0-.198-.478.798.798 0 0 1 .064-.796l.324-.453a1.875 1.875 0 0 0-.2-2.416l-.243-.243a1.875 1.875 0 0 0-2.416-.2l-.453.324a.798.798 0 0 1-.796.064 7.462 7.462 0 0 0-.478-.198.798.798 0 0 1-.517-.608l-.091-.55a1.875 1.875 0 0 0-1.85-1.566h-.344ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <aside className="fixed min-w-60 top-0 left-0 z-40 h-screen pt-24 bg-white border-r border-gray-200">
        <div className="h-full px-3 pb-4 overflow-y-auto">
          <ol className="space-y-2 text-black text-xl font-medium">
            <li className="hover:text-blue-700">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-blue-700">
              <a href="#">Build Your CV</a>
            </li>
            <li className="hover:text-blue-700">
              <a href="#">Explore</a>
            </li>
          </ol>
          <ol className="space-y-2 text-black text-xl font-medium">
            <li className="hover:text-blue-700">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-blue-700">
              <a href="#">Build Your CV</a>
            </li>
            <li className="hover:text-blue-700">
              <a href="#">Explore</a>
            </li>
          </ol>
        </div>
      </aside>

      <aside className="fixed top-0 right-0 z-40 h-screen pt-24 bg-white border-l border-gray-200">
        <div className="h-full px-3 pb-4 overflow-auto space-y-4">
          <p className="text-black font-medium text-xl">Your Bookmarks</p>
          <div className="grid grid-cols-1 space-y-4">
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
      </aside>

      <div className="place-items-center ml-40 mr-80 px-4 space-y-4">
        <div className="min-w-screen flex flex-row space-x-4 mt-4">
          <a className="bg-gray-700 text-white px-6 py-2 rounded-full">
            Filter
          </a>
          <a className="bg-gray-700 text-white px-6 py-2 rounded-full">
            For You
          </a>
          <a className="bg-gray-700 text-white px-6 py-2 rounded-full">
            Recently Added
          </a>
          <a className="bg-gray-700 text-white px-6 py-2 rounded-full">
            Internship
          </a>
          <a className="bg-gray-700 text-white px-6 py-2 rounded-full">
            Contract
          </a>
        </div>
        <div className="min-w-screen bg-gray-200 rounded-2xl text-black">
          <p>Job Title</p>
        </div>
      </div>
    </div>
  );
}
