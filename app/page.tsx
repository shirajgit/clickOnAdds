import AboutUs from "@/components/About";
import WhyChooseWisoft from "@/components/Comp";
import FAQSection from "@/components/FAQSection";
import Hero3D from "@/components/Hero3D";
import Navbar from "@/components/Navbar";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import Image from "next/image";
import {
  FaGoogle,
  FaAmazon,
  FaMicrosoft,
  FaApple,
 
  FaSpotify,
 
} from "react-icons/fa";

export default function Home() {


    const companies = [
    { icon: FaGoogle, name: "Google" },
    { icon: FaAmazon, name: "Amazon" },
    { icon: FaMicrosoft, name: "Microsoft" },
    { icon: FaApple, name: "Apple" },
    { icon: FaGoogle, name: "Meta" },
    { icon: FaSpotify, name: "Spotify" },
    { icon: FaAmazon,name: "Adobe" },
  ];

  const comp = [{name:"EXPRIANCE | "} , {name: "CREATIVITY | "} ,{name:"LEARING |"}]

  return (
    <div className="relative min-h-screen bg-[#0b1220] text-white">
  

      <main className="relative z-10">
        <section className="relative">

           <div className=" flex gap-10">
           
           <div
             className="absolute flex top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
               w-[600px] h-[600px]
               bg-cyan-400/10 blur-[140px]
               pointer-events-none"
                 >
                  <Hero3D></Hero3D>

                </div>

                <div className="relative  max-w-7xl mx-auto px-25 py-20 text-centr">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Dynamic Digital <br /> Marketing Company <br />
              <span className="text-cyan-400">You Need to Succeed</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              We build <span className="text-white font-medium">data-driven digital marketing strategies</span>{" "}
              that deliver  <br />transformational growth and exceptional results — 
              designed to  <br />lower your acquisition costs.
            </p>

            <div className="mt-10 flex   gap-4 flex-wrap">
              <a
                href="/contact"
                className="px-6 py-3 rounded-xl bg-cyan-500 text-white font-medium shadow-lg shadow-cyan-500/20 hover:opacity-90 transition"
              >
                Get Free Consultation
              </a>

              <a
                href="/services"
                className="px-6 py-3 rounded-xl border border-white/20 text-gray-200 hover:bg-white/5 transition"
              >
                Our Services
              </a>
            </div>
          </div>
          
          <div> 



              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-30">
    {/* Box 1 */}
    <div className="  p-6 h-50 w-50 rounded-xl shadow-lg hover:scale-105 transition transform">
     
    </div>

    {/* Box 2 */}
    <div className=" p-6 h-50 w-50 border rounded-xl shadow-lg hover:scale-105 transition transform">
 
  <h1 className="text-4xl font-semibold mt-13"> 300+</h1>
      <p className="text-gray-300 mt-1">
       People Reached
         through Campaigns
      </p>
    </div>

    {/* Box 3 */}
    <div className="  p-6  h-50 w-50 border rounded-xl shadow-lg hover:scale-105 transition transform">
      <h3 className="text-4xl font-semibold mt-13" > 250M+</h3>
      <p className="text-gray-300 mt-1">
       Customers Served
Worldwide
      </p>
    </div>

    {/* Box 4 */}
    <div className="  h-50 w-50  rounded-xl shadow-lg hover:scale-105 transition transform">
    
    </div>
 
          </div>
           </div>
            </div>
      
        </section>

        
       <section className="py-16 bg-[#0b1220] overflow-hidden">
      
      <div className="w-full overflow-hidden">
        <div className="marquee gap-20 px-10 items-center">
          {[...companies, ...companies].map((company, i) => {
            const Icon = company.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-3 text-white/70 hover:text-cyan-400 transition"
              >
                <Icon size={36} />
                <span className="text-xl font-semibold">
                  {company.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
       

     
<section className="relative max-w-7xl mx-auto px-6 py-24">
  <h2 className="text-4xl font-bold text-center mb-14 text-white">
    Our <span className="text-cyan-400">Work</span>
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

    {/* Card 1 */}
    <div className="group relative h-[420px] rounded-2xl overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
        alt="Digital Marketing"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center text-center px-6">
        <h3 className="text-3xl font-bold text-white mb-3">
          Digital Marketing
        </h3>
        <p className="text-white/80 mb-6">
          Data-driven campaigns designed to increase reach, engagement,
          and conversions.
        </p>
        <button className="px-6 py-2 rounded-full border border-cyan-400 text-cyan-400
                           hover:bg-cyan-400 hover:text-black transition">
          View Project
        </button>
      </div>
    </div>

    {/* Card 2 */}
    <div className="group relative h-[420px] rounded-2xl overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
        alt="Team Collaboration"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center text-center px-6">
        <h3 className="text-3xl font-bold text-white mb-3">
          Team Collaboration
        </h3>
        <p className="text-white/80 mb-6">
          Strong teamwork and communication to deliver scalable solutions.
        </p>
        <button className="px-6 py-2 rounded-full border border-cyan-400 text-cyan-400
                           hover:bg-cyan-400 hover:text-black transition">
          View Project
        </button>
      </div>
    </div>

    {/* Card 3 */}
    <div className="group relative h-[420px] rounded-2xl overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
        alt="Web Development"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center text-center px-6">
        <h3 className="text-3xl font-bold text-white mb-3">
          Web Development
        </h3>
        <p className="text-white/80 mb-6">
          Fast, responsive, and scalable websites built with modern tech.
        </p>
        <button className="px-6 py-2 rounded-full border border-cyan-400 text-cyan-400
                           hover:bg-cyan-400 hover:text-black transition">
          View Project
        </button>
      </div>
    </div>

    {/* Card 4 */}
    <div className="group relative h-[420px] rounded-2xl overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1557804506-669a67965ba0"
        alt="Business Growth"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center text-center px-6">
        <h3 className="text-3xl font-bold text-white mb-3">
          Business Growth
        </h3>
        <p className="text-white/80 mb-6">
          Strategic planning and execution to scale your business faster.
        </p>
        <button className="px-6 py-2 rounded-full border border-cyan-400 text-cyan-400
                           hover:bg-cyan-400 hover:text-black transition">
          View Project
        </button>
      </div>
    </div>

  </div>
</section>


<section className="relative w-full py-28 overflow-hidden">

  {/* Subtle Center Glow */}
  <div
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
               w-[600px] h-[600px]
               bg-cyan-400/10 blur-[140px]
               pointer-events-none"
  />

  {/* Section Title */}
  <div className="relative text-center mb-30">
    <h1 className="absolute inset-0 text-[9rem] font-extrabold tracking-tight
                   text-white/5 select-none">
      SERVICES
    </h1>
    <h2 className="relative text-5xl mb-20 md:text-6xl font-bold text-white">
      Our <span className="text-cyan-400">Services</span>
    </h2>
  </div>

  {/* Grid */}
  <div className="relative max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-px">

      {/* Card 1 */}
      <div className="group h-56 flex items-center justify-center
                      border border-white/10 backdrop-blur-xl
                      hover:border-cyan-400/60
                      transition-all duration-500
                      hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.4)]
                      hover:-translate-y-1">
        <h3 className="text-4xl font-semibold text-white/80
                       group-hover:text-white transition">
          Creative Solutions
        </h3>
      </div>

      {/* Card 2 */}
      <div className="group h-56 flex items-center justify-center
                      border border-white/10 backdrop-blur-xl
                      hover:border-cyan-400/60
                      transition-all duration-500
                      hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.4)]
                      hover:-translate-y-1">
        <h3 className="text-4xl font-semibold text-white/80
                       group-hover:text-white transition">
          Social Media Marketing
        </h3>
      </div>

      {/* Description 1 */}
      <div className="group h-56 flex items-center justify-center
                      border border-white/10 backdrop-blur-xl
                      hover:border-cyan-400/60
                      transition-all duration-500
                      hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.3)]">
        <p className="text-lg leading-relaxed text-white/70 px-10
                      group-hover:text-white/90 transition">
          We transform your social media presence into a powerful customer
          acquisition engine. Our focus is on data-driven campaigns that
          generate measurable results.
        </p>
      </div>

      {/* Description 2 */}
      <div className="group h-56 flex items-center justify-center
                      border border-white/10 backdrop-blur-xl
                      hover:border-cyan-400/60
                      transition-all duration-500
                      hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.3)]">
        <p className="text-lg leading-relaxed text-white/70 px-10
                      group-hover:text-white/90 transition">
          Our creative solutions capture attention in crowded markets by
          combining compelling design, persuasive copy, and A/B testing
          strategies that convert.
        </p>
      </div>

    </div>
  </div>
</section>

<WhyChooseWisoft></WhyChooseWisoft>
 <TestimonialsSlider />
        
     <AboutUs></AboutUs>
<section className="py-  bg-[#03040a] overflow-hidden">
      
      <div className="w-full  overflow-hidden">
        <div className="marquee gap-20 px-1 items-center">
          
          {[...comp, ...comp].map((company, i) => {
           
            return (
              <div
                key={i}
                className="flex items-center gap-3 text-white/70 hover:text-cyan-400 transition"
              >
              
                <span className=" text-5xl lg:text-[15rem] 9xl font-semibold">
                  {company.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
       
           <section
      className="
        relative w-full min-h-[90vh]
        flex items-center justify-center
        bg-[#05060d]
        overflow-hidden py-90
      "
      style={{
        backgroundImage: "url('/clickonadd.png')", // your illustration
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05060d]/90 via-[#05060d]/70 to-[#05060d]/95" />

      {/* Content */}
      <div className="relative z-0 text-center  ">
        <h1 className="text-4xl md:text-6xl font-light text-white leading-tight">
          Let’s make it great
          <br />
          together!
        </h1>

        <div className="mt-10">
          <button
            className="
              bg-sky-500 hover:bg-sky-600
              text-white font-medium
              px-8 py-3 rounded-md
              transition-all duration-300
              shadow-lg shadow-sky-500/20
            "
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
          
          <FAQSection></FAQSection>
      </main>
    </div>
  );
}
