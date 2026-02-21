
import Link from "next/link";


type CardProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
    points: string[];
    button: string;
    slug: string;
};

export default function ServiceCard({
    icon,
    title,
    description,
    points,
    button,
    slug
}: CardProps) {
    return (
        <div className="group relative bg-white border rounded-2xl p-8 shadow-md 
                    hover:shadow-2xl transition-all duration-500 
                    hover:-translate-y-3 overflow-hidden">

            <div className="absolute inset-0 bg-linear-0-to-br from-blue-50 to-purple-50 
                      opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <div className="relative z-10">

                <div className="mb-4 transform group-hover:scale-110 transition duration-300">
                    {icon}
                </div>

                <h3 className="text-xl font-semibold mb-3">{title}</h3>

                <p className="text-gray-600 mb-4">{description}</p>

                <ul className="list-disc list-inside text-gray-600 space-y-1 mb-6 text-sm">
                    {points.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>

                {/* CTA Button */}
                <Link href={`/services/${slug}`}
                    className="relative px-6 py-2 rounded-full bg-black text-white 
                     overflow-hidden transition-all duration-300
                     group-hover:bg-blue-600"
                     >
                        {button}
                     </Link>
            </div>
        </div>
    );
}