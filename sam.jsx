// File: src/app/page.tsx
import Image from 'next/image'
import Link from 'next/link';

export default function SponsorsPage() {
 return (
   <div className="relative">
     {/* First Slide - Intro */}
     <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-black to-red-950">
       <h1 className="text-center mb-12 animate-bounce">
         <span className="text-red-600 text-6xl font-bold">OUR</span>
         <span className="text-white text-6xl font-bold ml-4">SPONSORS</span>
       </h1>
       
       <div className="max-w-4xl mx-auto text-center mb-16 px-4">
         <p className="mb-8 text-gray-300 text-lg">
           Yeti Racing is dedicated to pushing the limits of student innovation each year. As a non-profit student team, we deeply appreciate the invaluable support from generous companies and institutions.
         </p>
         <p className="text-gray-300 text-lg">
           We're constantly seeking new partners to join us on our journey, enabling us to focus on what we excel at: developing and advancing cutting-edge technology.
         </p>
         <div className="flex flex-wrap justify-center gap-6 mt-10">
           <button className="bg-transparent border-2 border-green-500 text-white px-10 py-3 rounded-full hover:bg-green-500 transition-colors duration-300 text-lg">
             Back Our Team
           </button>
           <button className="bg-transparent border-2 border-green-500 text-white px-10 py-3 rounded-full hover:bg-green-500 transition-colors duration-300 text-lg">
             Sponsorship
           </button>
         </div>
       </div>
     </div>

     {/* Second Slide - Santa Monica & DTS */}
     <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-y-auto bg-gradient-to-b from-red-950 to-black">
       <div className="max-w-[90%] 2xl:max-w-[1400px] mx-auto px-4 py-16 grid gap-24">
         {/* Santa Monica Section */}
         <div className="max-w-6xl mx-auto animate-[slideIn_1s_ease-in-out] translate-x-75 border-2 border-[#39FF14] rounded-lg p-8 bg-transparent hover:border-[#00FF00] transition-colors duration-300">
           <div className="flex flex-col lg:flex-row gap-12 items-start">
             <div className="flex flex-col items-center gap-6 lg:w-1/3">
               <div className="w-full max-w-[300px]">
                 <Image src="/santa-monica-logo.png" alt="Santa Monica Logo" width={300} height={120} className="w-full"/>
               </div>
               <Link href="https://santamonicaedu.in/">
                 <button className="bg-transparent border border-white text-white px-8 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300 text-base">
                   view more →
                 </button>
               </Link>
             </div>
             <div className="flex-1">
               <h2 className="text-3xl font-bold mb-6 animate-pulse">Santa monica</h2>
               <p className="text-gray-300 text-lg leading-relaxed">
                 Santa Monica Study Abroad, founded in 2002, is a leading educational consultancy that helps students pursue higher education opportunities overseas.
               </p>
             </div>
           </div>
         </div>

         {/* DTS Racing Section */}
         <div className="max-w-6xl mx-auto animate-[slideInFromLeft_1s_ease-in-out] -translate-x-75 border-2 border-[#39FF14] rounded-lg p-8 bg-transparent hover:border-[#00FF00] transition-colors duration-300">
           {/* DTS Racing content - same structure as above */}
         </div>
       </div>
     </div>

     {/* Third Slide - EDS & Helloscore */}
     <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-y-auto bg-gradient-to-b from-black to-red-950">
       <div className="max-w-[90%] 2xl:max-w-[1400px] mx-auto px-4 py-16 grid gap-24">
         {/* EDS Section */}
         <div className="max-w-6xl mx-auto animate-[slideIn_1s_ease-in-out] translate-x-75 border-2 border-[#39FF14] rounded-lg p-8 bg-transparent hover:border-[#00FF00] transition-colors duration-300">
           {/* EDS content */}
         </div>

         {/* Helloscore Section */}
         <div className="max-w-6xl mx-auto animate-[slideInFromLeft_1s_ease-in-out] -translate-x-75 border-2 border-[#39FF14] rounded-lg p-8 bg-transparent hover:border-[#00FF00] transition-colors duration-300">
           {/* Helloscore content */}
         </div>
       </div>
     </div>

     {/* Fourth Slide - TyreGuru */}
     <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-y-auto bg-gradient-to-b from-red-950 to-black">
       <div className="max-w-[90%] 2xl:max-w-[1400px] mx-auto px-4 py-16">
         {/* TyreGuru Section */}
         <div className="max-w-6xl mx-auto animate-[slideIn_1s_ease-in-out] translate-x-75 border-2 border-[#39FF14] rounded-lg p-8 bg-transparent hover:border-[#00FF00] transition-colors duration-300">
           {/* TyreGuru content */}
         </div>
       </div>
     </div>
   </div>
 )
}