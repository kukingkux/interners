"use-client";

import Link from "next/link";

export default function CardPostHome() {
	return (
		<Link href="#">
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
		</Link>
	)
}