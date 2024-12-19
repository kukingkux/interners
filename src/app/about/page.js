"use client";
import TopNavigaton from '@/components/topbar';
export default function AboutPage() {
  return (
    <div className="min-w-screen min-h-screen bg-white flex flex-col">
      <TopNavigaton />

      <div className="grow flex items-center h-100 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% py-[96]">
        <p className="font-regular text-4xl text-black ms-24">"BRIDGING TALENT, BUILDING FUTURES"</p>
      </div>

      <div className="flex-row my-4 justify-center items-center">
        <div className="flex mb-4 mx-6 justify-center">
          <p className="text-center text-black font-medium text-4xl">WHO WE ARE</p>
        </div>
        <div className="flex justify-center mb-4 mx-6">
          <p className="w-7/12 text-center text-black font-medium text-xl">Founded by OneLux Company in 2024, Interners is a job listing platform offering entry-level opportunities designed to help young professionals gain valuable experience and start meaningful careers.</p>
        </div>
        <div className="flex justify-center mb-4 mx-6">
          <p className="w-7/12 text-center text-black font-medium text-xl">The competition nowadays is fierce, if not intense. With the growing population and competition, landing a good job or career seems challenging at first. 
          That's why we’re here—to bring you diverse opportunities tailored for young professionals, helping you take that first step toward success.</p>
        </div>
        <div className="flex justify-center mb-4 mx-6">
          <p className="w-7/12 text-center text-black font-medium text-xl">At Interners, our mission is to create equal opportunities for the young to grow. We strive to bridge the skills gap between beginners and experienced professionals by offering you carefully curated choices that bring you closer to success. We also pledge to ensure that every internship you apply for is legal and safe, conducting thorough various company background checks. With Interners, you can take the first steps toward a better future, gaining hands-on experience that formal education often overlooks.</p>
        </div>

        <div className="flex flex-row space-x-6 overflow-x-scroll whitespace-nowrap">
          
        </div>

      </div>
    </div>
  );
}


