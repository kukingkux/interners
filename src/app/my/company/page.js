"use client";

import TopNavigaton from "@/components/topbar";

export default function CompanyPage() {
    return (
        <div className="min-w-screen min-h-screen bg-white flex flex-col">
        <TopNavigaton searchBar={'hidden'} btnBack={'hidden'}/>

        <main className="justify-items-center p-4">
            <p className="text-black font-bold text-2xl mb-6 text-left">
            Create Listing
            </p>
            <form className="grow">
            <div className="mb-6">
                <label
                htmlFor="jobtitle"
                className="block mb-2 text-sm font-medium text-gray-900"
                >
                Job title
                </label>
                <input
                type="text"
                id="jobtitle"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="John Doe Company"
                required
                />
            </div>
            <div className="mb-6">
                <label
                htmlFor="location"
                className="block mb-2 text-sm font-medium text-gray-900"
                >
                Location
                </label>
                <input
                type="text"
                id="location"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="john.doe@company.com"
                required
                />
            </div>
            <div className="mb-2 flex  space-x-3">
                <div className="grow">
                <label
                    htmlFor="countries"
                    className="block mb-2 text-sm font-medium text-gray-900"
                >
                    Province
                </label>
                <select
                    id="countries"
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
                    htmlFor="city"
                    className="block mb-2 text-sm font-medium text-gray-900"
                >
                    City
                </label>
                <select
                    id="city"
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

            <div class="flex items-center mb-6">
                <input
                id="checked-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                for="checked-checkbox"
                class="ms-2 text-sm font-medium text-gray-900"
                >
                Use company address
                </label>
            </div>

            <div className="mb-6">
                <label
                htmlFor="jobtype"
                className="block mb-2 text-sm font-medium text-gray-900"
                >
                Job type
                </label>
                <div className="flex space-x-3">
                <select
                    id="jobtype"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                    <option>Select One</option>
                    <option>Part-Time</option>
                    <option>Internship</option>
                    <option>Contract</option>
                    <option>Full-Time</option>
                </select>
                <select
                    id="jobtype"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                    <option>Select One</option>
                    <option>Work from office / WFO</option>
                    <option>Work from home / WFH</option>
                    <option>Hybrid</option>
                </select>
                </div>
            </div>

            <div className="mb-6">
                <label
                htmlFor="wages"
                className="block mb-2 text-sm font-medium text-gray-900"
                >
                Wages
                </label>
                <div className="flex space-x-3">
                <p className="text-xl text-black place-self-center">RP.</p>
                <input
                    type="text"
                    id="wages"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Insert Wages"
                    required
                />
                <p className="text-gray-300 place-self-center">─</p>
                <input
                    type="text"
                    id="wages"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Insert Wages"
                    required
                />
                <select
                    id="wages"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                    <option>Hourly Rate</option>
                    <option>Monthly Rate</option>
                </select>
                </div>
            </div>

            <div className="mb-6">
                <label
                htmlFor="company-details"
                className="block mb-2 text-sm font-medium text-gray-900"
                >
                Job description
                </label>
                <textarea
                id="company-details"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Leave a comment..."
                ></textarea>
            </div>

            <div className="grid justify-items-end">
                <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                Create
                </button>
            </div>
            </form>
        </main>
        </div>
    );
}
