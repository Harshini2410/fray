export default function VisionMission() {
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <div className="border rounded-xl p-8 text-center shadow-sm">
        <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
        <p className="text-gray-600">
          To become a global growth infrastructure partner for digital-first businesses.
        </p>
      </div>

      <div className="border rounded-xl p-8 text-center shadow-sm">
        <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
        <p className="text-gray-600">
          To combine marketing, technology, and automation into unified systems
          that scale businesses efficiently.
        </p>
      </div>
    </div>
  );
}