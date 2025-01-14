// File: src/app/page.tsx
import Image from 'next/image'
import Link from 'next/link';


export default function SponsorsPage() {
  return (
    <div className="min-h-screen">
      {/* First Screen - Black to Dark Red Gradient starting at 20% height */}
      <div className="bg-[linear-gradient(180deg,_#000000_20%,_#000000_40%,_#450a0a_100%)] pb-20">
        <div className="max-w-[90%] 2xl:max-w-[1400px] mx-auto px-4 py-16">
          {/* Previous content remains the same until the gradient change */}
          <h1 className="text-center mb-12 animate-bounce">
            <span className="text-red-600 text-6xl font-bold">OUR</span>
            <span className="text-white text-6xl font-bold ml-4 ">SPONSORS</span>
          </h1>
          
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="mb-8 text-gray-300 text-lg">
              Yeti Racing is dedicated to pushing the limits of student innovation each year. As a non-profit student team, we deeply appreciate the invaluable support from generous companies and institutions.
            </p>
            <p className="text-gray-300 text-lg">
              We're constantly seeking new partners to join us on our journey, enabling us to focus on what we excel at: developing and advancing cutting-edge technology. Click the button below to become a part of our mission to rank among the top Formula Student teams globally.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-6 mb-20 ">
            <button className="bg-transparent border-2 border-green-500 text-white px-10 py-3 rounded-full  transition-colors duration-300 text-lg transition-all duration-300 hover:scale-105 hover:bg-green-500/7 hover:border-green-400 hover:shadow-[0_0_10px_5px_rgba(34,197,94,0.5)] ">
              Back Our Team
            </button>
            <button className="bg-transparent border-2 border-green-500 text-white px-10 py-3 rounded-full  transition-colors duration-300 text-lg transition-all duration-300 hover:scale-105 hover:bg-green-500/7 hover:border-green-400 hover:shadow-[0_0_10px_5px_rgba(34,197,94,0.5)]">
              Sponsorship
            </button>
          </div>

          {/* Santa Monica Section */}
          
          <div className="max-w-6xl mx-auto animate-[slideIn_1s_ease-in-out] translate-x-75">
            
            <div className="p-8 rounded-lg">
              <div className="flex flex-col lg:flex-row gap-12 items-start">
                <div className="flex flex-col items-center gap-6 lg:w-1/3">
                  <div className="w-full max-w-[300px]">
                    <Image
                      src="/santa-monica-logo.png"
                      alt="Santa Monica Logo"
                      width={300}
                      height={120}
                      className="w-full"
                    />
                  </div>
                  <Link href="https://santamonicaedu.in/">
                  <button className="bg-transparent border border-white text-white px-8 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300 text-base">
                    view more →
                  </button></Link>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-6  animate-pulse">Santa monica</h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Santa Monica Study Abroad, founded in 2002, is a leading educational consultancy that helps students pursue higher education opportunities overseas. With over two decades of experience, they provide expert guidance on university selection, visa processes, and scholarship options, making the study abroad journey smooth and hassle-free.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Screen - Dark Red to Black Gradient */}
      <div className="bg-gradient-to-b from-red-950 via-red-950 to-black ">
        <div className="max-w-[90%] 2xl:max-w-[1400px] mx-auto px-4 pt-20">
          {/* Previous sections remain the same */}
          {/* DTS Racing Section */}
          <div className="max-w-6xl mx-auto mb-24 animate-[slideInFromLeft_1s_ease-in-out] -translate-x-75">
            <div className="p-8 rounded-lg">
              <div className="flex flex-col lg:flex-row gap-12 items-start">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-6 animate-pulse">DTS Racing</h2>
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    DTS Racing, founded in 2015 by National and International Champion Dilljith T S, is a prominent motorsports team in India dedicated to promoting motorsports among the younger generation.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    As part of DTSR Academy Pvt Ltd, the team has quickly risen to become one of India's top national and international racing teams.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-6 lg:w-1/3">
                  <div className="w-full max-w-[300px]">
                    <Image
                      src="/dts-racing-logo.png"
                      alt="DTS Racing Logo"
                      width={300}
                      height={120}
                      className="w-full"
                    />
                  </div>
                  <Link href="https://dtsracing.com/">
                  <button className="bg-transparent border border-white text-white px-8 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300 text-base">
                    view more →
                  </button></Link>
                </div>
              </div>
            </div>
          </div>

          {/* EDS Technologies Section */}
          <div className="max-w-6xl mx-auto mb-24 animate-[slideIn_1s_ease-in-out] translate-x-75">
            <div className="p-8 rounded-lg">
              <div className="flex flex-col lg:flex-row gap-12 items-start">
                <div className="flex flex-col items-center gap-6 lg:w-1/3">
                  <div className="w-full max-w-[300px]">
                    <Image
                      src="/eds-logo.png"
                      alt="EDS Technologies Logo"
                      width={300}
                      height={120}
                      className="w-full"
                    />
                  </div>
                  <Link href="https://edstechnologies.com/">
                  <button className="bg-transparent border border-white text-white px-8 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300 text-base">
                    view more →
                  </button></Link>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-6 animate-pulse">EDS Technologies</h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    EDS Technologies is one of India's leading providers of engineering and enterprise solutions.The company specializes in offering end-to-end solutions in areas such as CAD, CAM, CAE and 3D visual simulation. EDS Technologies serves a wide range of industries, including automotive, aerospace, defense, education, industrial machinery, and electronics.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Helloscore Section */}
          <div className="max-w-6xl mx-auto mb-24 animate-[slideInFromLeft_1s_ease-in-out] -translate-x-75">
            <div className="p-8 rounded-lg">
              <div className="flex flex-col lg:flex-row gap-12 items-start">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-6 animate-pulse">Helloscore</h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Helloscore, a subsidiary of the esteemed Analyt Group of Companies, is a premier financial services provider dedicated to empowering individuals and businesses with tailored credit solutions.Helloscore specializes in comprehensive credit management services,credit score improvement, credit monitoring, debt settlement, and wealth management.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-6 lg:w-1/3">
                  <div className="w-full max-w-[300px]">
                    <Image
                      src="/helloscore-logo.png"
                      alt="Helloscore Logo"
                      width={300}
                      height={120}
                      className="w-full"
                    />
                  </div>
                  <Link href="https://helloscore.in/">
                  <button className="bg-transparent border border-white text-white px-8 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300 text-base">
                    view more →
                  </button></Link>
                </div>
              </div>
            </div>
          </div>

          {/* ________________tyreguru */}
          <div className="max-w-6xl mx-auto pb-24 animate-[slideIn_1s_ease-in-out] translate-x-75 ">
            <div className="p-8 rounded-lg">
              <div className="flex flex-col lg:flex-row gap-12 items-start">
                <div className="flex flex-col items-center gap-6 lg:w-1/3">
                  <div className="w-full max-w-[300px]">
                    <Image
                      src="/tyreguru.png"
                      alt="Example Corp Logo"
                      width={300}
                      height={120}
                      className="w-full"
                    />
                  </div>
                  <Link href="https://www.instagram.com/tyreguru.in/?hl=en">
                  <button className="bg-transparent border border-white text-white px-8 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300 text-base">
                    view more →
                  </button></Link>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-6 animate-pulse">TyreGuru</h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                  Tyreguru is dedicated to providing expert advice and education about tyres, helping consumers make informed decisions. With engaging content like reels addressing tyre scams and maintenance tips, the page aims to raise awareness and transform the automotive industry through informed choices. Boasting over 101,000 followers, Tyreguru emphasizes customer education and personalized assistance, offering direct support via their contact number, +91 98955 88524.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}