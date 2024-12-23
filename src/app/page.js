"use client";
import TopNavigaton from "@/components/topbar";
export default function AboutPage() {
  return (
    <div className="min-w-screen min-h-screen bg-white flex flex-col">

      <TopNavigaton />
      
      <div className="grow flex justify-center items-center h-100 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% py-[96]">
        <div className="place-items-center">
          <div>
            <p className="font-semibold text-4xl text-black">
              NICE TO MEET YOU, FUTURE EMPLOYER!
            </p>
          </div>
          <div className="mt-4 place-items-center">
            <p className="font-regular text-2xl text-black">
              Looks like you haven’t set up your company profile
            </p>
            <p className="font-regular text-2xl text-black">
              Let’s get you started, don’t we?
            </p>
          </div>
          <div className="mt-12">
            <a className="font-semibold bg-white rounded-md p-2 text-black ">
              GET STARTED
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
