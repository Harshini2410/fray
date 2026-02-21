import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";


export const services = [
  {
    slug: "web-development",
    title: "Web Development",
    description:
      "We design and develop modern, scalable, and secure web applications tailored to your business goals. From responsive front-end interfaces to robust back-end architectures, we ensure seamless performance, fast loading speeds, and optimized user experiences. Our development process focuses on clean code, security best practices, SEO optimization, and long-term scalability to help your business grow online.",
    progress: 89,
    stats: "20+ Projects Delivered",
    features: [
      "Responsive Design",
      "Next.js & React Development",
      "Secure Backend Architecture",
      "SEO Optimization",
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    description:
      "We build high-performance mobile applications for Android and iOS using cross-platform and native technologies. Our apps are designed with intuitive user interfaces, smooth navigation, and reliable backend integration. From concept to deployment, we ensure scalability, security, and app store readiness while delivering engaging digital experiences that increase user retention and business growth.",
    progress: 92,
    stats: "35+ Apps Delivered",
    features: [
      "Flutter & React Native",
      "API Integration",
      "App Store Deployment",
      "Performance Optimization",
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "We create user-centric UI/UX designs that combine aesthetics with functionality. Our design process includes in-depth user research, wireframing, interactive prototyping, and usability testing to ensure intuitive and engaging digital experiences. We focus on accessibility, consistency, and brand alignment to deliver visually appealing interfaces that enhance customer satisfaction and product usability.",
    progress: 95,
    stats: "50+ Design Projects Completed",
    features: [
      "User Research & Wireframing",
      "Interactive Prototyping",
      "Design Systems & Branding",
      "Usability Testing",
    ],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    description:
      "We provide scalable cloud infrastructure and DevOps solutions that streamline development workflows and improve system reliability. Our services include cloud architecture design, CI/CD pipeline automation, containerization, infrastructure as code, and continuous monitoring. We help businesses achieve faster deployments, reduced downtime, enhanced security, and optimized operational efficiency.",
    progress: 90,
    stats: "30+ Cloud Deployments",
    features: [
      "AWS, Azure & GCP Setup",
      "CI/CD Pipeline Automation",
      "Docker & Kubernetes",
      "Infrastructure as Code (IaC)",
    ],
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    description:
      "We offer comprehensive cybersecurity services to protect your applications, systems, and data from evolving digital threats. Our solutions include vulnerability assessments, penetration testing, security audits, real-time monitoring, and compliance management. We implement proactive security strategies to minimize risks, prevent breaches, and ensure the integrity and confidentiality of your digital infrastructure.",
    progress: 94,
    stats: "100+ Security Audits Conducted",
    features: [
      "Vulnerability Assessment",
      "Penetration Testing",
      "Security Monitoring",
      "Compliance & Risk Management",
    ],
  },
];

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);

  if (!service) return notFound();

  return (
    <section className="px-6 py-16 lg:px-20">
      <div className="max-w-4xl mx-auto space-y-12">

        {/* Title */}
        <div>
          <h1 className="text-4xl font-bold mb-4">
            {service.title}
          </h1>
          <p className="text-gray-600 text-lg">
            {service.description}
          </p>
        </div>

        {/* Service Performance */}
        <div>
          <h3 className="font-semibold mb-3 text-xl">
            Service Performance
          </h3>

          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-blue-600 h-4 rounded-full transition-all duration-700"
              style={{ width: `${service.progress}%` }}
            ></div>
          </div>

          <p className="mt-2 text-sm text-gray-500">
            {service.progress}% Success Rate
          </p>
        </div>

        {/* Stats */}
        <div className="bg-gray-100 p-6 rounded-xl">
          <p className="font-medium text-lg">
            {service.stats}
          </p>
        </div>

        {/* Features */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            What We Offer
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg hover:shadow-md transition"
              >
                <p className="font-medium">{feature}</p>
                <p className="text-sm text-gray-500 mt-2">
                  High-quality implementation with industry best practices.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Our Development Process
          </h3>

          <ol className="space-y-4 list-decimal list-inside text-gray-600">
            <li>Requirement Analysis & Planning</li>
            <li>UI/UX Design & Architecture</li>
            <li>Development & Integration</li>
            <li>Testing & Quality Assurance</li>
            <li>Deployment & Ongoing Support</li>
          </ol>
        </div>

        {/* CTA Section */}
        <div className="bg-black text-white p-8 rounded-xl text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="mb-6 text-gray-300">
            Let’s build something amazing together.
          </p>
          <Link href="/contact"
          ><button className="bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-gray-200 transition">
              Contact Us
            </button></Link>

        </div>

      </div>
    </section>
  );
}