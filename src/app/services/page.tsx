import ServiceCard from "@/components/reusableui/servicecard";
import {
  Globe,
  Smartphone,
  Palette,
  Cloud,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    slug: "web-development",
    icon: <Globe className="w-10 h-10 text-blue-600" />,
    title: "Web Development",
    description:
      "Modern, scalable, and high-performance web applications tailored to your business goals.",
    features: [
      "Responsive and mobile-first design",
      "Next.js & React development",
      "Secure backend integration",
      "SEO & performance optimization",
    ],
  },
  {
    slug: "mobile-app-development",
    icon: <Smartphone className="w-10 h-10 text-purple-600" />,
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications designed for seamless user experiences.",
    features: [
      "Android & iOS development",
      "API & database integration",
      "Clean UI/UX implementation",
      "App store deployment support",
    ],
  },
  {
    slug: "ui-ux-design",
    icon: <Palette className="w-10 h-10 text-pink-600" />,
    title: "UI/UX Design",
    description:
      "User-centered designs that combine aesthetics with functionality.",
    features: [
      "Wireframing & prototyping",
      "Interactive design systems",
      "Usability testing",
      "Brand-focused visual identity",
    ],
  },
  {
    slug: "cloud-devops",
    icon: <Cloud className="w-10 h-10 text-indigo-600" />,
    title: "Cloud & DevOps",
    description:
      "Scalable cloud infrastructure and automation for modern businesses.",
    features: [
      "Cloud deployment & management",
      "CI/CD pipeline setup",
      "Performance monitoring",
      "Infrastructure scalability",
    ],
  },
  {
    slug: "cybersecurity",
    icon: <ShieldCheck className="w-10 h-10 text-green-600" />,
    title: "Cybersecurity",
    description:
      "Advanced security strategies to protect your digital assets.",
    features: [
      "Security audits & vulnerability testing",
      "Data encryption & protection",
      "Secure authentication systems",
      "Continuous threat monitoring",
    ],
  },
];

export default function ServicesPage() {
  return (
    <section className="px-6 py-16 lg:px-20">

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Our <span className="text-blue-600">Fraylon</span> Services
        </h1>
        <p className="mt-4 text-gray-600 text-sm md:text-base">
          We specialize in building secure, high-performance web and mobile applications
          tailored to your unique needs. From idea to execution, we transform vision
          into powerful, future-ready technology.
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            points={service.features}
            slug={service.slug}
            button="Learn More"
          />
        ))}
      </div>
    </section>
  );
}