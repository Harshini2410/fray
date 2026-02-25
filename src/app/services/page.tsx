
"use client";

import AnimatedBlobs from "@/components/reusableui/animatedblobs";
import ServiceCard from "../../components/reusableui/servicecard";
import {
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";


const services = [
  {
    slug: "web-development",
    icon: "/images/web-removebg-preview.png",
    title: "Web Development",
    description: `We design and develop high-performance, scalable web applications tailored to your business objectives.
Our solutions leverage modern technologies such as React and Next.js to ensure speed and reliability.
We follow a mobile-first approach to deliver seamless user experiences across all devices.
Every project is built with clean architecture and maintainable code standards.
Security best practices are integrated at every stage of development.
`,

  },
  {
    slug: "mobile-app-development",
    icon: "/images/mobile-remove.png",
    title: "Mobile App Development",
    description: `We develop high-performance cross-platform mobile applications for Android and iOS.
Our solutions are built using modern frameworks to ensure scalability and seamless performance.
We focus on intuitive UI/UX design to deliver engaging user experiences.
Secure API integrations and optimized backend connectivity ensure reliability.
Applications are rigorously tested for performance, security, and device compatibility.
From concept to deployment, we create mobile solutions that drive growth and user engagement.`,

  },
  {
    slug: "ui-ux-design",
    icon: "/images/ui-ux.png",
    title: "UI/UX Design",
    description: `We create user-centered design experiences that prioritize usability and engagement.
Our process begins with research, wireframing, and strategic user journey mapping.
We craft intuitive interfaces that balance aesthetics with functional clarity.
Interactive prototypes help validate ideas before development begins.
Every design follows accessibility standards and modern UI principles.
We transform complex concepts into seamless, visually compelling digital experiences.`,

  },
  {
    slug: "cloud-devops",
    icon: "/images/devops.png",
    title: "Cloud & DevOps",
    description: `We architect scalable cloud infrastructures built for reliability and performance.
Our DevOps practices streamline deployment through automated CI/CD pipelines.
We ensure secure cloud configuration and optimized resource management.
Continuous monitoring enhances system stability and uptime.
Infrastructure is designed for flexibility, resilience, and cost efficiency.
From migration to optimization, we enable businesses to scale confidently.`,

  },
  {
    slug: "cybersecurity",
    icon: "/images/cyber-remove.png",
    title: "Cybersecurity",
    description: `We implement advanced security frameworks to protect digital assets and data.
Our approach includes vulnerability assessments and risk mitigation strategies.
We deploy secure authentication and encryption protocols.
Continuous monitoring safeguards systems against evolving threats.
Compliance standards and best practices are embedded into every solution.
Our cybersecurity strategies ensure resilience, integrity, and long-term protection.`,

  },
];


export default function ServicesPage() {
  const servicesRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    servicesRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="min-h-screen bg-[#F8F8F9]">

      <section className="relative h-screen flex items-center justify-center bg-linear-to-br from-[#021B24] via-[#062F3E] to-[#03161e]">        <AnimatedBlobs />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center">
          <h1 className="mb-6 font-heading text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            <span className="text-white mr-3">Our</span>

            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="
    bg-[linear-gradient(to_right,#34A2A7,#0B6A8A,#D5E2E5,#F8F8F9,#FEFEFD)]
    bg-clip-text
    text-transparent
  "
            >
              Fraylon
            </motion.span>

            <span className="text-white ml-3">Services</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white/80">
            We specialize in building secure, high-performance web and mobile
            applications tailored to your unique needs. From idea to execution,
            we transform vision into powerful, future-ready technology.
          </p>
          <button
            className="flex items-center justify-center gap-2 
  bg-[#34A2A7] text-white 
  px-8 py-6 text-base font-semibold 
  hover:bg-[#0B6A8A] 
  shadow-lg rounded-lg mx-auto"
            onClick={handleScroll}
            cursor-pointer = "true"
          >
            Explore Our Services
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="mx-auto max-w-7xl px-6 py-20  ">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#021B24]">
            Our Core Capabilities & Strategic Offerings
          </h2>

          <p className="mt-4 text-[#062F3E]/80 text-lg">
            We deliver comprehensive, future-focused technology solutions designed to
            accelerate innovation, optimize performance, and create sustainable digital growth.
          </p>


          <p className="mt-4 text-[#062F3E]/80 text-lg">
            From architecture design and scalable application development to cloud
            infrastructure, security engineering, and user experience refinement,
            our multidisciplinary expertise ensures every solution is resilient,
            secure, and strategically aligned with your long-term business objectives.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              button="Learn More"
              slug={service.slug}
              reverse={index % 2 !== 0}                 // alternate left-right
              variant={index % 2 === 0 ? "colored" : "plain"} // alternate background
            />
          ))}
        </div>
      </section>
    </main>
  );
}
