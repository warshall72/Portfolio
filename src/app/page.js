'use client';

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import BlurText from "../../BlurText/BlurText";
import GlareHover from "../../GlareHover/GlareHover";
import Cubes from "../../Cubes/Cubes";
import StarBorder from "../../StarBorder/StarBorder";
import ProfileCard from "../../ProfileCard/ProfileCard";
import Navbar from "./Navbar";

import { Github } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function HomePage() {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const FadeInSection = ({ children }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    useEffect(() => {
      if (inView) controls.start("visible");
    }, [inView]);

    return (
      <motion.div
        ref={ref}
        variants={fadeInVariant}
        initial="hidden"
        animate={controls}
        className="my-12 md:my-24"
      >
        {children}
      </motion.div>
    );
  };

  return (
    <main className="bg-black text-white font-sans scroll-smooth pt-16 md:pt-0">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col md:flex-row items-center justify-between px-4 md:px-24 py-16 relative overflow-hidden"
      >
        <div className="w-full md:w-1/2 space-y-6 z-10 px-4 md:px-0">
          <div className="text-left">
            <BlurText
              text="Welcome."
              className="text-5xl md:text-[80px] font-extrabold leading-tight"
            />
            <p className="text-base md:text-lg text-gray-300 mt-4">
              My name is <strong>Krish Singh Hura</strong>, and I'm a passionate
              Full Stack Developer with a strong focus on backend development
              and a deep understanding of modern web technologies. Proficient in
              TypeScript, I build robust, scalable, and maintainable
              applications with clean code and thoughtful architecture...
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center z-10 mt-10 md:mt-0">
          <GlareHover>
            <img
              src="profilr-photo.jpeg"
              alt="Your Profile"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-lg"
            />
          </GlareHover>
        </div>

        {/* Wavy bottom */}
        <div className="absolute bottom-0 left-0 w-full z-0">
          <svg
            className="w-full h-24 md:h-32"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,218.7C672,224,768,192,864,192C960,192,1056,224,1152,229.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Experience Section */}
      <FadeInSection>
        <section id="experience" className="px-4 md:px-24 py-16">
          <h2 className="text-4xl md:text-7xl font-bold text-center mb-8 md:mb-16">Experience</h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {/* Hide cubes on mobile or make them smaller */}
            <div className="hidden md:block w-[150px] h-[150px] md:w-[300px] md:h-[300px]">
              <Cubes cubeSize={24} gridSize={8} />
            </div>

            <div className="bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-lg text-center w-full md:max-w-md">
              <h3 className="text-2xl font-bold text-white">
                Full Stack Developer Intern
              </h3>
              <p className="text-gray-300 mt-3">
                3 months of experience at <strong>GramTarang Technologies</strong>
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Working on a project named Bonafide, which makes the Degree Certificate of the passing out students, signs it digitally and stores it in Blockchain. Further any third party can verify the Certificate or the Document using the Aadhar number.
              </p>
            </div>

            <div className="hidden md:block w-[150px] h-[150px] md:w-[300px] md:h-[300px]">
              <Cubes cubeSize={24} gridSize={8} />
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Projects Section */}
      <FadeInSection>
        <section id="projects" className="px-4 md:px-24 py-16">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-12">Projects</h2>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[Navigation, Autoplay]}
            className="w-full md:w-3/4 mx-auto relative"
          >
            {[
              {
                title: "Dojo-Locker",
                desc: "Dojo Locker is a secure document verification system using cryptographic hashing, RSA digital signatures, and blockchain for integrity and authenticity. Admins can upload files, generate documents, and store hashes on IPFS with the CID saved on the blockchain. The system includes a Go backend, React frontend, Python scripts, and a Gemini AI chatbot for assistance. Users can verify document authenticity through digital signature checks and blockchain-stored hashes. Future plans include multi-chain support, advanced chatbot features, and multi-factor admin authentication.",
                link: "https://github.com/krishsinghhura/Dojo-Locker",
              },
              {
                title: "AVAX BAZAR",
                desc: "This project is a decentralized lending protocol enabling lenders to deposit AVAX and earn 0.2% daily interest, while borrowers can secure AVAX loans using ERC-20 token collateral. It uses AVAX, ERC-20, and smart contracts to manage loans and repayments with a 0.5% repayment fee. The frontend is built in Next.js, the backend in Node.js/TypeScript, and PostgreSQL with Prisma manages user data. An orchestration API layer is planned for better scalability and transaction flow.",
                link: "https://github.com/krishsinghhura/AVAX-Bazar",
              },
              {
                title: "Mark Me",
                desc: "This project streamlines attendance tracking using geo-fencing, allowing employees to check in/out based on location while automatically calculating work hours. Employers can manage geo-fences, monitor employees, and access detailed attendance reports. Employees are notified if they check out outside the geo-fence, with alerts sent to employers. Built with Node.js, Express, MongoDB, and React, it also integrates geolocation and map APIs. A future enhancement includes face recognition for secure attendance validation.",
                link: "https://github.com/krishsinghhura/Mark-Me",
              },
            ].map((project, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-lg text-center space-y-4">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className="text-gray-300 p-4 md:p-10 text-sm md:text-base">{project.desc}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Github size={24} className="hover:text-cyan-400" />
                  </a>
                </div>
              </SwiperSlide>
            ))}
            
            {/* Custom navigation buttons */}
            <div className="swiper-button-prev !text-white !left-2"></div>
            <div className="swiper-button-next !text-white !right-2"></div>
          </Swiper>
        </section>
      </FadeInSection>

            {/* Achievements Section */}
      <FadeInSection>
        <section id="achievements" className="px-4 md:px-24 py-16">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-12">Achievements</h2>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation={{
              nextEl: '.achievement-swiper-next',
              prevEl: '.achievement-swiper-prev',
            }}
            modules={[Navigation, Autoplay]}
            className="w-full mx-auto relative"
          >
            {[
              {
                title: "Runners up of Codefort hackathon by IEEE",
                desc: "Successfully secured the Runner-Up position among top participants by developing an innovative and secure authentication solution. The hackathon challenged us to deliver under time constraints, showcase technical expertise, and work effectively as a team.",
                image: "codefort.png", // Replace with your image path
              },
              {
                title: "Odisha Fast Hack 2025 winner",
                desc: "My team, Team Anarchy, won the prestigious Agoric Fast Hack - 24 Hour Odisha Hackathon! We developed a decentralized health records system using Agoric Smart Contracts and blockchain technology.Our solution ensures security, transparency, and easy accessibility of health data. It bridges the gap between Web3 innovation and modern healthcare needs. A proud step forward in revolutionizing healthcare through decentralized technology. ",
                image: "Agoric.png", 
              },
              {
                title: "SIH Grand Finalist 2024",
                desc: "Selected as a Grand Finalist in one of India's most prestigious hackathons, SIH 2024. Represented my team in building a real-world, scalable geo-fencing-based attendance system. The experience at NIT Srinagar was transformative—combining innovation, teamwork, and high-pressure problem solving.",
                image: "SIH.png"
              },
            ].map((achievement, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white/5 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden">
                  <div className="h-108 md:h-108 w-full overflow-hidden">
                    <img 
                      src={achievement.image} 
                      alt={achievement.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8 space-y-4">
                    <h3 className="text-2xl font-semibold text-center">{achievement.title}</h3>
                    <p className="text-gray-300 text-sm md:text-base text-center">{achievement.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            
            {/* Custom navigation buttons */}
            <div className="achievement-swiper-prev !text-white !left-0"></div>
            <div className="achievement-swiper-next !text-white !right-0"></div>
          </Swiper>
        </section>
      </FadeInSection>

      {/* Resume Button */}
      <FadeInSection>
        <section className="text-center px-4" id="resume">
          <a href="/resume.pdf" download className="inline-block">
            <StarBorder>
              <span className="text-white px-4 py-2 cursor-pointer text-sm md:text-base">
                Download Resume
              </span>
            </StarBorder>
          </a>
        </section>
      </FadeInSection>

      {/* Contact Section */}
      <FadeInSection>
        <section id="contact" className="flex justify-center py-16 px-4">
          <a
            href="https://www.linkedin.com/in/krish-s-33351420a/"
            target="_blank"
            rel="noopener noreferrer"
            className="transform scale-90 md:scale-100"
          >
            <ProfileCard />
          </a>
        </section>
      </FadeInSection>
    </main>
  );
}