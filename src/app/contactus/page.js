"use client";

import TopNavigaton from '@/components/topbar';

export default function ContactUsPage() {
  return (
    <div className="min-w-screen min-h-screen bg-white flex flex-col">
      <TopNavigaton />

      <div className="grow h-100 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% py-[96]">
        <div className="mb-12">
          <p className="font-bold text-5xl text-white ms-24">GET IN TOUCH WITH US</p>
        </div>
        <div className="flex mx-24">
          <div className="flex-1 flex-row font-regular text-center text-4xl text-white">
            <p className="mb-4">Address</p>
            <p>Jl. Xxx Xxxx No. XXXX DKX Jakxxx, Cenxxxxxxx11XXX</p>
          </div>
          <div className="flex-1 flex-row font-regular text-center text-4xl text-white">
            <p className="mb-4">Phone</p>
            <div className="mb-8">
            <p>Customer Service:</p>
            <p>(+62)85282683117</p>
            <p>08:00-17:00 (GMT+7)</p>
            </div>
            <div>
            <p>WhatsApp:</p>
            <p>(+62)85282683117</p>
            </div>
          </div>
          <div className="flex-1 flex-row font-regular text-center text-4xl text-white">
            <p className="mb-4">Socials</p>
            <p>Instagram:</p>
            <p>@interners.id</p>
          </div>
        </div>
      </div>
    </div>
  );
}


