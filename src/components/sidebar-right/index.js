"use-client";

import Link from "next/link";

export default function SideNavigationRight() {
  return(
    <aside className="fixed top-0 right-0 z-40 h-screen pt-24 bg-white border-l border-gray-200 hidden lg:block">
      <div className="h-full px-3 pb-4 overflow-auto space-y-4">
        <p className="text-black font-medium text-xl">Your Bookmarks</p>
        <div className="grid grid-cols-1 space-y-4">
          <Link href="#">
            <div className=" bg-white border border-gray-200 rounded-2xl">
              <div className="p-3">
                <div>
                  <p className="text-xl font-semibold tracking-tight text-gray-700">
                    Google Corporation
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </aside>
  )
}