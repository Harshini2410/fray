import Container from "@/components/ui/Container";

export default function Home() {
  return (
    <Container>
      <div className="py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Welcome to Fraylon Technologies
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Building innovative solutions for the modern enterprise. We deliver
            excellence through cutting-edge technology and strategic expertise.
          </p>
        </div>
      </div>
    </Container>
  );
}

