"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle, TrendingUp } from "lucide-react";
import ImageMarquee from "@/components/reusableui/imagemarquee";
import webDevImg from "../../../../public/images/web-development.jpg";
import mobileDevImg from "../../../../public/images/mobile-development.jpg";
import uiuxImg from "../../../../public/images/uiux-design.jpg";
import cloudImg from "../../../../public/images/cloud-devops.jpg";
import cyberImg from "../../../../public/images/cybersecurity.jpg";
import { StaticImageData } from "next/image";

export interface ServiceData {
  slug: string;
  icon: string;
  title: string;
  description: string;
  images: StaticImageData[];
  stats: { value: string; label: string }[];
  whyUs: string;
  skills: string[];
  trending: string[];
  howdeliver?: string;
}

export const services: ServiceData[] = [
  {
    slug: "web-development",
    icon: "🌐",
    title: "Web Development",
    description: `We design and develop high-performance, scalable web applications tailored to your business objectives. Our solutions leverage modern technologies to ensure speed and reliability. We follow a mobile-first approach to deliver seamless user experiences across all devices. Every project is built with clean architecture and maintainable code standards. Security best practices are integrated at every stage of development.`,
    images: [webDevImg, mobileDevImg, uiuxImg, cyberImg, cloudImg],
    stats: [
      { value: "50%", label: "Customers are more likely to purchase from companies that listen to feedback" },
      { value: "94%", label: "Users judge a business by its website design within seconds" },
      { value: "70%", label: "Small business websites lack a strong call-to-action" },
      { value: "88%", label: "Consumers won’t return after a poor experience" },
    ],
    whyUs:
      "At Fraylon, we don't just build websites — we engineer digital experiences. Our team combines deep technical expertise with strategic thinking to deliver web solutions that drive measurable business outcomes.",
    skills: [
      "React & Next.js",
      "TypeScript",
      "Node.js",
      "REST & GraphQL APIs",
      "PostgreSQL & MongoDB",
      "Tailwind CSS",
      "CI/CD",
      "Performance Optimization",
    ],
    trending: [
      "AI-powered web apps",
      "Progressive Web Apps",
      "Edge rendering",
      "Headless CMS",
      "Web3 integration",
      "Micro-frontends",
    ],
    howdeliver: "We architect scalable web platforms that drive measurable business growth. From performance-first front-end engineering to secure backend infrastructure, every layer is optimized for speed, stability, and conversion. Our development process aligns technical decisions with business objectives — ensuring improved user engagement, higher retention, and long-term maintainability. The result is not just a website, but a revenue-enabling digital asset.",
  },
  {
    slug: "mobile-app-development",
    icon: "📱",
    title: "Mobile App Development",
    description: `We develop high-performance cross-platform mobile applications for Android and iOS. Our solutions ensure scalability, seamless performance, and intuitive user experiences.`,
    images: [mobileDevImg, webDevImg, cloudImg],
    stats: [
      { value: "90%", label: "Mobile time is spent inside apps" },
      { value: "85%", label: "Users prefer native-feeling apps" },
      { value: "70%", label: "Automation improves service efficiency" },
      { value: "67%", label: "Companies investing in AI mobile experiences" },
    ],
    whyUs:
      "We create mobile applications that feel native, perform beautifully, and scale effortlessly with modern cross-platform frameworks.",
    skills: [
      "React Native",
      "Flutter",
      "Swift & Kotlin",
      "Firebase",
      "Push Notifications",
      "App Store Optimization",
    ],
    trending: [
      "AI assistants",
      "AR/VR mobile",
      "5G apps",
      "Wearables",
      "Super apps",
      "On-device ML",
    ],
    howdeliver: "We build high-performance mobile applications that feel seamless and intuitive across devices. By combining scalable architecture with thoughtful user experience design, we ensure fast load times, smooth interactions, and reliable backend connectivity. Our approach enhances user retention, boosts engagement, and positions your brand directly in the hands of your audience."
  },
  {
    slug: "ui-ux-design",
    icon: "🎨",
    title: "UI/UX Design",
    description: `We craft intuitive, human-centered digital experiences that balance aesthetics with usability. Our design process begins with research and strategy, followed by wireframing, prototyping, and interface design. Every interaction is thoughtfully designed to enhance engagement and clarity. We ensure accessibility, responsiveness, and visual consistency across platforms. The result is not just beautiful design — but measurable user satisfaction and conversion growth.`,
    images: [uiuxImg, webDevImg, mobileDevImg],
    stats: [
      { value: "400%", label: "Higher conversion rates with UX-optimized interfaces" },
      { value: "88%", label: "Users won’t return after a poor digital experience" },
      { value: "70%", label: "Customers spend more with seamless experiences" },
      { value: "32%", label: "Users leave a brand after one bad experience" },
    ],
    whyUs:
      "At Fraylon, design is strategic — not decorative. We combine behavioral psychology, user research, and modern design systems to create experiences that are elegant, accessible, and conversion-driven.",
    skills: [
      "Figma & Adobe XD",
      "User Research",
      "Wireframing & Prototyping",
      "Design Systems",
      "Accessibility (WCAG)",
      "Interaction Design",
      "Usability Testing",
      "Information Architecture",
    ],
    trending: [
      "AI-assisted design tools",
      "Micro-interactions",
      "Dark mode systems",
      "Voice UI",
      "Design tokens",
      "Motion-first interfaces",
    ],
    howdeliver: "We design experiences that convert, retain, and delight. Through user research, journey mapping, and data-driven design systems, we eliminate friction and enhance usability. Every interface is crafted to guide users intuitively toward meaningful actions. The result is increased engagement, higher conversion rates, and stronger brand perception."
  },

  {
    slug: "cloud-devops",
    icon: "☁️",
    title: "Cloud & DevOps",
    description: `We design scalable, resilient cloud infrastructures optimized for performance and cost efficiency. Our DevOps practices automate deployment, testing, and monitoring to ensure rapid and reliable releases. We implement secure cloud configurations and high-availability architectures. Infrastructure is built to scale dynamically with business growth. Continuous integration and observability ensure stability and operational excellence.`,
    images: [cloudImg, cyberImg, webDevImg],
    stats: [
      { value: "94%", label: "Enterprises rely on cloud for critical operations" },
      { value: "3x", label: "Faster deployments with DevOps automation" },
      { value: "60%", label: "Infrastructure cost reduction through optimization" },
      { value: "99.9%", label: "Uptime achieved with resilient architecture" },
    ],
    whyUs:
      "We build cloud systems that are secure, scalable, and future-ready. From containerization to serverless architectures, our DevOps-driven approach ensures speed without compromising reliability.",
    skills: [
      "AWS, Azure & GCP",
      "Docker & Kubernetes",
      "Terraform",
      "CI/CD Pipelines",
      "Monitoring & Observability",
      "Serverless Architecture",
      "Infrastructure as Code",
      "Cloud Security",
    ],
    trending: [
      "Multi-cloud strategies",
      "GitOps workflows",
      "Edge computing",
      "AIOps",
      "Platform engineering",
      "FinOps optimization",
    ],
    howdeliver: "We transform infrastructure into a competitive advantage. By implementing automated CI/CD pipelines, scalable cloud architectures, and real-time monitoring systems, we accelerate deployment cycles while improving reliability. Our optimization strategies reduce operational costs and enhance system resilience. The outcome is faster innovation, improved uptime, and infrastructure built for growth."
  },

  {
    slug: "cybersecurity",
    icon: "🔐",
    title: "Cybersecurity",
    description: `We safeguard digital ecosystems with advanced security frameworks and proactive threat intelligence. Our approach includes vulnerability assessments, penetration testing, and risk mitigation strategies. We implement secure authentication, encryption protocols, and continuous monitoring systems. Compliance standards are integrated into every layer of infrastructure. Our mission is to protect data, reputation, and operational continuity.`,
    images: [cyberImg, cloudImg, uiuxImg],
    stats: [
      { value: "$4.5M", label: "Average global cost of a data breach" },
      { value: "95%", label: "Breaches caused by human error" },
      { value: "68%", label: "Businesses report rising cyber risks" },
      { value: "2x", label: "Increase in ransomware attacks yearly" },
    ],
    whyUs:
      "Security is foundational to everything we build. Our proactive security architecture identifies and neutralizes threats before they escalate — embedding protection across code, cloud, and infrastructure.",
    skills: [
      "Penetration Testing",
      "SIEM & SOC",
      "Identity & Access Management",
      "Encryption & PKI",
      "Compliance (SOC2, GDPR)",
      "Incident Response",
      "Network Security",
      "Threat Intelligence",
    ],
    trending: [
      "Zero Trust Architecture",
      "AI-powered threat detection",
      "DevSecOps integration",
      "Cloud-native security",
      "Quantum-safe cryptography",
      "Supply chain security",
    ],
    howdeliver: "We proactively secure your digital ecosystem before vulnerabilities become liabilities. Through risk assessments, penetration testing, and continuous monitoring, we identify and neutralize threats early. Our layered security architecture protects sensitive data, ensures regulatory compliance, and minimizes operational disruption. By reducing breach risk and downtime, we safeguard both reputation and revenue."
  },
];

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-[#F8FBF9] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#0B6A8A] mb-4">
            Service Not Found
          </h1>
          <Link
            href="/services"
            className="text-[#34A2A7] hover:underline"
          >
            ← Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FBF9] text-[#0B6A8A]">

      {/* Hero */}
      <section className="py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[#0B6A8A]/70 hover:text-[#34A2A7] mb-6 text-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="border-l-4 border-[#34A2A7] pl-6"
          >
            <span className="text-4xl mb-4 block">{service.icon}</span>

            <h1 className="text-4xl md:text-5xl font-bold mb-5">
              {service.title}
            </h1>

            <p className="text-[#0B6A8A]/70 text-lg leading-relaxed max-w-3xl">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Images */}
      <section className="py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <ImageMarquee images={service.images} />
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Industry Insights
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.stats.map((stat, i) => (
              <div
                key={i}
                className="rounded-2xl border border-[#D5E2E5] bg-[#FEFEFD] p-6 hover:shadow-sm transition"
              >
                <div className="text-4xl font-bold text-[#34A2A7] mb-3">
                  {stat.value}
                </div>
                <p className="text-sm text-[#0B6A8A]/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-14 px-6 flex flex-col sm:flex-row gap-3">
        <div className="max-w-4xl mx-auto rounded-3xl p-8 md:p-10 bg-[#D5E2E5]/40 border border-[#D5E2E5]">
          <h2 className="text-3xl font-bold mb-6">
            Why Choose <span className="text-[#34A2A7]">Fraylon</span>?
          </h2>
          <p className="text-[#0B6A8A]/70 text-lg leading-relaxed">
            {service.whyUs}
          </p>
        </div>
        <div className="max-w-4xl mx-auto rounded-3xl p-8 md:p-10 bg-[#D5E2E5]/40 border border-[#D5E2E5]">
          <h2 className="text-3xl font-bold mb-6">
            How We
            <span className="text-[#34A2A7]"> Deliver</span ><span className="text-3xl font-bold mb-6"> Impact</span>?
          </h2>
          <p className="text-[#0B6A8A]/70 text-lg leading-relaxed">
            {service.howdeliver}
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Skills & Technologies
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.skills.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-3 rounded-xl px-4 py-3 bg-white border border-[#D5E2E5] hover:border-[#34A2A7] transition"
              >
                <CheckCircle className="w-5 h-5 text-[#34A2A7]" />
                <span className="text-sm font-medium">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending */}
      <section className="py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            What’s Trending
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.trending.map((trend) => (
              <div
                key={trend}
                className="rounded-xl px-6 py-4 bg-[#FEFEFD] border border-[#D5E2E5] hover:border-[#34A2A7] transition"
              >
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-[#34A2A7]" />
                  <span className="text-sm">{trend}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to get started?
          </h2>

          <p className="text-[#0B6A8A]/70 mb-8">
            Let’s build something extraordinary together.
          </p>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-[#0B6A8A] text-white px-8 py-3 rounded-xl font-semibold text-sm hover:bg-[#34A2A7] transition"
          >
            Explore All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;