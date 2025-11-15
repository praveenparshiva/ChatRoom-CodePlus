import { useRef, useState, useEffect } from "react";
import LaserFlow from "../components/LaserFlow.jsx";
import { ArrowBigLeftDash, ArrowBigRightDash } from "lucide-react";

const testimonialsData = [
  {
    quote:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero itaque repellendus, alias temporibus quam suscipit voluptatibus a voluptas ullam dolores aspernatur asperiores ipsam quasi voluptatem nulla eveniet? Libero, tempore laborum.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop",
  },
  {
    quote:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero itaque repellendus, alias temporibus quam suscipit voluptatibus a voluptas ullam dolores aspernatur asperiores ipsam quasi voluptatem nulla eveniet? Libero, tempore laborum.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop",
  },
  {
    quote:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero itaque repellendus, alias temporibus quam suscipit voluptatibus a voluptas ullam dolores aspernatur asperiores ipsam quasi voluptatem nulla eveniet? Libero, tempore laborum.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop",
  },
];

function LearnMorePage() {
  const revealImgRef = useRef(null);
  const [active, setActive] = useState(0);

  const handleNext = () =>
    setActive((prev) => (prev + 1) % testimonialsData.length);
  const handlePrev = () =>
    setActive(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen flex flex-col bg-[#060010] rounded-[35px] overflow-hidden relative">
      {/* Mouse reveal and inner content container */}
      <div
        className="relative w-full h-full"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          if (revealImgRef.current) {
            revealImgRef.current.style.setProperty("--mx", `${x}px`);
            revealImgRef.current.style.setProperty(
              "--my",
              `${y + rect.height * 0.4}px`
            );
          }
        }}
        onMouseLeave={() => {
          if (revealImgRef.current) {
            revealImgRef.current.style.setProperty("--mx", "-9999px");
            revealImgRef.current.style.setProperty("--my", "-9999px");
          }
        }}
      >
        {/* Laser background */}
        <div className="absolute inset-x-0 top-0 h-[50vh] z-10">
          <LaserFlow
            horizontalBeamOffset={0.1}
            verticalBeamOffset={-0.05}
            color="#FF79C6"
          />
        </div>

        {/* Fog */}
        <div
          aria-hidden
          className="absolute left-0 right-0 top-[5%] h-[25%] pointer-events-none z-20 blur-[40px] opacity-80"
          style={{
            background:
              "radial-gradient(ellipse at 50% 20%, rgba(255,160,255,0.3) 0%, rgba(255,100,200,0.12) 30%, rgba(0,0,0,0) 70%), linear-gradient(to bottom, rgba(255,130,200,0.08), rgba(0,0,0,0))",
          }}
        />

        {/* Ground glow */}
        <div
          aria-hidden
          className="absolute left-0 right-0 top-[40%] h-[20%] pointer-events-none z-20 blur-[60px] opacity-90"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(255,160,255,0.45) 0%, rgba(255,100,200,0.18) 20%, rgba(0,0,0,0) 60%)",
          }}
        />

        {/* Spotlight / Reveal image */}
        <img
          ref={revealImgRef}
          src="/path/to/image.jpg"
          alt="Reveal effect"
          className="absolute w-full -top-1/2 z-30 mix-blend-lighten opacity-28 pointer-events-none"
          style={{
            "--mx": "-9999px",
            "--my": "-9999px",
            WebkitMaskImage:
              "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0) 240px)",
            maskImage:
              "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0) 240px)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        />

        {/* Cards Slider */}
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-3/4 max-w-[1100px] p-7 bg-[#060010] rounded-2xl border-2 border-pink-400 text-white z-40 shadow-[0_8px_30px_rgba(0,0,0,0.6)]">
          {testimonialsData.map((t, i) =>
            i === active ? (
              <div
                key={i}
                className="transition-opacity transition-transform duration-500"
              >
                <img
                  src={t.src}
                  alt={t.name}
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <p className="text-lg">{t.quote}</p>
                <h3 className="font-bold mt-3">{t.name}</h3>
                <p className="text-sm text-gray-400">{t.designation}</p>
              </div>
            ) : null
          )}

          {/* Navigation */}
          <div className="flex gap-2 justify-end mt-4">
            <button
              onClick={handlePrev}
              className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition"
            >
              <ArrowBigLeftDash size={18} color="white" />
            </button>
            <button
              onClick={handleNext}
              className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition"
            >
              <ArrowBigRightDash size={18} color="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearnMorePage;
