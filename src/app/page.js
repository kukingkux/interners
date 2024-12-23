"use client";

export default function Home() {
  return (
    <div className="min-w-screen min-h-screen bg-white flex flex-col">
      <aside className="fixed min-w-60 top-0 left-0 z-40 h-screen pt-4 bg-white border-r border-gray-200 hidden sm:block">
        <div className="m-4 space-y-4">
          <p className="text-2xl font-semibold text-black">SETTINGS</p>
          <ol className="space-y-2 text-black text-md font-medium">
            <li className="hover:text-blue-700">
              <a href="#">EDIT PROFILE</a>
            </li>
            <li className="hover:text-blue-700">
              <a href="#">SECURITY</a>
            </li>
            <li className="hover:text-blue-700">
              <a href="#">NOTIFICATIONS</a>
            </li>
            <li className="hover:text-blue-700">
              <a href="#">APPEARANCE</a>
            </li>
            <li className="hover:text-blue-700">
              <a href="#">HELP</a>
            </li>
          </ol>
        </div>
      </aside>

      <main className="pl-64 p-4">
        <p className="text-black font-bold text-2xl mb-6 text-left">
          EDIT PROFILE
        </p>

        <form className="grow">
          <div className="place-self-center place-items-center justify-center mb-6">
            <div className="bg-gray-700 rounded-full px-14 py-12">P</div>
            <label>
              <input type="file" className="hidden" />
              <a className="text-gray-700">Change Avatar</a>
            </label>
          </div>

          <div className="flex justify-between space-x-4 mb-6">
            <div className="grow">
              <label
                htmlFor="firstname"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter your first name"
                required
              />
            </div>
            <div className="grow">
              <label
                htmlFor="lastname"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="john.doe@company.com"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Phone number
            </label>
            <div className="flex item-center">
              <select
                id="countries"
                className="bg-gray-50 border-l border-t border-b border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
              >
                <option>+62</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
              </select>
              <input
                type="text"
                id="phone"
                className="grow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Insert your phone number"
                required
              />
            </div>
          </div>

          <div className="mb-2 flex  space-x-3">
            <div className="grow">
              <label
                htmlFor="birthday"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Birthday
              </label>
              <select
                id="birthday"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option>Not Selected</option>
                <option>United States</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
              </select>
            </div>
            <div className="grow">
              <label
                htmlFor="gender"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Gender
              </label>
              <select
                id="gender"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option>Not Selected</option>
                <option>United States</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="address"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Insert your address"
              required
            />
          </div>

          <div className="flex justify-between space-x-4 mb-6">
            <div className="grow">
              <label
                htmlFor="city"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                City
              </label>

              <select
                id="city"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option>Select One</option>
                <option>Part-Time</option>
                <option>Internship</option>
                <option>Contract</option>
                <option>Full-Time</option>
              </select>
            </div>
            <div className="grow">
              <label
                htmlFor="zip"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Zip Code
              </label>
              <input
                type="text"
                id="zip"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter your address zip code"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="dropzone-file"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Upload CV
            </label>
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
          </div>

          <div className="grid justify-items-end">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Save Changes
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
