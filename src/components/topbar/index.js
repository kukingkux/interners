"use-client";
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function TopNavigaton({btnBack, searchBar}) {
    const router = useRouter()
    return(
    <nav className="bg-white border-b border-gray-200 sticky top-0">
        <div className="flex flex-wrap place-items-center justify-between p-4">
            <Link
            href="/home"
            className="flex items-center space-x-3 rtl:space-x-reverse"
            >
            <p className="text-2xl font-semibold text-black">Interners</p>
            </Link>

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

            <form className={`grow max-w-screen-sm ${searchBar}`}>
            <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only"
            >
                Search
            </label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
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
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Search Mockups, Logos..."
                    required
                />
                <button
                    type="submit"
                    className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                >
                    Search
                </button>
                </div>
            </form>

            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 place-items-center md:flex-row md:space-x-4 rtl:space-x-reverse">
                <li>
                    <Link
                    href="/contactus"
                    className="font-medium text-black hover:text-blue-900"
                    >
                    Contact
                    </Link>
                </li>
                <li>
                    <Link
                    href="/about"
                    className="font-medium text-black hover:text-blue-900"
                    >
                    About Us
                    </Link>
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
        <div className={`p-4 border-t-2 border-black text-xl text-black ${btnBack}`}>
            <Link href="/home" className="flex items-center max-w-fit gap-2 w-auto cursor-pointer">
                <FontAwesomeIcon icon={faChevronLeft} />
                <p>Back</p>
            </Link>
        </div>
    </nav>
    )
}