import { useRef, useState, useEffect } from "react";
import LaserFlow from "../components/LaserFlow.jsx";

const testimonialsData = [
  {
    name: "Sign In Page",
    designation: "Auth0 / Clerk Authentication",
    quote:
      "A secure and minimal authentication screen designed for quick and effortless access. Users can sign in or create new accounts using a clean UI optimized for clarity and speed. The flow ensures a frictionless entry into the collaborative coding environment. Perfect for both new and returning users.",
    src: "/SignInPage.png",
  },
  {
    name: "User Onboarding",
    designation: "Profile Setup Interface",
    quote:
      "A guided onboarding process that helps users set up their profiles with tech preferences, learning interests, and personal details. The interface focuses on clarity and ease of completion. This ensures accurate matchmaking and meaningful collaboration opportunities. It lays the foundation for a personalized user journey.",
    src: "/UserOnboarding.png",
  },
  {
    name: "Home Dashboard",
    designation: "Main Landing Page",
    quote:
      "A central hub that presents navigation options, friend suggestions, and recommended collaborators in a structured layout. Users can discover coding partners based on shared interests and activity. The dashboard provides a clean overview of essential features and upcoming opportunities. Designed for quick access and intuitive workflow.",
    src: "/HomeDashboard.png",
  },
  {
    name: "Notifications Panel",
    designation: "Alert Management System",
    quote:
      "A neatly organized notification center displaying friend requests, system alerts, and recent activities. Users can manage preferences to control what updates they receive. The layout keeps important events visible without overwhelming the interface. Ideal for staying informed and maintaining communication awareness.",
    src: "/NotificationsPanel.png",
  },
  {
    name: "Friends List",
    designation: "Connection Management",
    quote:
      "A dedicated section for managing active coding partners and accepted connections. Users can view detailed profiles, check online availability, and initiate conversations. The layout maintains clarity while supporting quick navigation between contacts. It enhances collaboration by simplifying relationship management.",
    src: "/FriendsList.png",
  },
  {
    name: "Theme Toggle",
    designation: "28-Theme Customization Panel",
    quote:
      "A powerful customization panel offering 28 unique UI themes ranging from minimal to vibrant aesthetics. Users can instantly switch themes to personalize their workspace. Each theme provides a distinct visual style tailored for different moods and preferences. Perfect for enhancing comfort during long coding sessions.",
    src: "/ThemeToggle.png",
  },
  {
    name: "Code Editor",
    designation: "Multi-language IDE",
    quote:
      "A fully featured editor supporting 10 programming languages, multiple themes, and typography adjustments. Its clean design enhances readability and focus while coding. Integration with Clerk ensures secure, personalized sessions across devices. Built to deliver a seamless and productive development experience.",
    src: "/CodeEditor.png",
  },
  {
    name: "Chat Interface",
    designation: "Real-time Messaging",
    quote:
      "A modern communication interface supporting real-time messaging, media sharing, and threaded replies. Users can react to messages and organize conversations easily. The layout promotes clear, distraction-free discussions between collaborators. Ideal for technical exchanges and teamwork.",
    src: "/ChatInterface.png",
  },
  {
    name: "Video Call Interface",
    designation: "WebRTC Communication",
    quote:
      "A reliable calling interface supporting high-quality video, audio, and live screen sharing. Users can engage in pair programming, debugging sessions, or quick catch-ups. Real-time reactions enhance interactivity during calls. Designed for smooth, low-latency communication in collaborative projects.",
    src: "/VideoCallInterface.png",
  },
];

function LearnMorePage() {
  const revealImgRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setActive((prev) => (prev + 1) % testimonialsData.length),
      7000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen flex flex-col bg-[#060010] rounded-[35px] overflow-hidden relative">
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
        {/* Laser BG */}
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

        {/* Spotlight reveal */}
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

        {/* Slider */}
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-3/4 max-w-[1100px] p-7 bg-[#060010] rounded-2xl border-2 border-pink-400 text-white z-40 shadow-[0_8px_30px_rgba(0,0,0,0.6)]">
          {testimonialsData.map((t, i) =>
            i === active ? (
              <div
                key={i}
                className="transition-opacity transition-transform duration-500"
              >
                {/* NAME */}
                <h3 className="font-bold text-xl">{t.name}</h3>

                {/* DESIGNATION */}
                <p className="text-sm text-gray-400 mb-3">{t.designation}</p>

                {/* FLEXIBLE IMAGE */}
                <img
                  src={t.src}
                  alt={t.name}
                  className="w-full max-h-[300px] object-contain rounded-xl mb-4"
                />

                {/* QUOTE */}
                <p className="text-base leading-relaxed opacity-90">
                  {t.quote}
                </p>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}

export default LearnMorePage;
