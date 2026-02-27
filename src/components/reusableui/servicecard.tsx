import Image from "next/image";
import Link from "next/link";

type CardProps = {
    icon: string;
    title: string;
    description: string;
    button: string;
    slug: string;
    reverse?: boolean;
    variant?: "colored" | "plain";
};

export default function ServiceCard({
    icon,
    title,
    description,
    button,
    slug,
    reverse = false,
    variant = "plain",
}: CardProps) {
    return (
        <div
            className={`w-full rounded-2xl p-10 transition-all duration-500 group
  ${variant === "colored"
                    ? "bg-[#34A2A7]"
                    : "bg-[#062F3E]"
                }
  hover:shadow-2xl`}
        >
            <div
                className={`flex flex-col md:flex-row items-center gap-10 ${reverse ? "md:flex-row-reverse" : ""
                    }`}
            >
                {/* Image Side */}
                <div className="flex-1 flex justify-center">
                    <Image
                        src={icon}
                        alt={title}
                        width={400}
                        height={400}
                        className="w-full max-w-sm h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

                {/* Content Side */}
                <div className="flex-1">
                    <h2
                        className={`text-2xl font-semibold mb-4 transition-colors duration-300
        ${variant === "colored"
                                ? "text-[#062F3E]"
                                : "text-[#34A2A7]"
                            }`}
                    >
                        {title}
                    </h2>

                    <p
                        className={`mb-4
        ${variant === "colored"
                                ? "text-[#F8FBF9]/90"
                                : "text-[#D5E2E5]"
                            }`}
                    >
                        {description}
                    </p>

                    {/* <ul
                        className={`list-disc list-inside space-y-1 mb-6 text-sm
        ${variant === "colored"
                                ? "text-[#F8FBF9]/80"
                                : "text-[#D5E2E5]/90"
                            }`}
                    >
                        {points?.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul> */}

                    <Link
                        href={`/services/${slug}`}
                        className={`inline-block px-6 py-3 rounded-full transition-all duration-300 hover:scale-105
        ${variant === "colored"
                                ? "bg-[#0B6A8A] text-white hover:bg-[#062F3E]"
                                : "bg-[#34A2A7] text-white hover:bg-[#0B6A8A]"
                            }`}
                    >
                        {button}
                    </Link>
                </div>
            </div>
        </div>
    );
}