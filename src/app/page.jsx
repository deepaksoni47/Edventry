import Image from "next/image";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen font-sans flex flex-col items-center justify-center px-6 py-20 text-center bg-white text-black">
      <main className="flex flex-col items-center gap-6 max-w-3xl">
        {/* Hero logo (optional) */}
        <Image
          src="/logo-edventry.svg" // Replace with your logo or use /edventry-icon.png
          alt="Edventry Logo"
          width={120}
          height={120}
          priority
        />

        {/* Headline */}
        <h1 className="text-4xl font-bold tracking-tight">
          Welcome to <span className="text-primary">Edventry</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg text-gray-700">
          Your gateway to engaging courses and unforgettable learning events.
          Discover, learn, and connect — all in one place.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a
            href="/courses"
            className="bg-[#4F46E5] text-white font-medium px-6 py-3 rounded-lg hover:bg-[#3730a3] transition"
          >
            Explore Courses
          </a>
          <a
            href="/events"
            className="border border-[#4F46E5] text-[#4F46E5] font-medium px-6 py-3 rounded-lg hover:bg-[#f3f3ff] transition"
          >
            View Events
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
