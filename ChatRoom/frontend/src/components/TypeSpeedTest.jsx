import React, { useState, useEffect, useRef } from "react";
import { RotateCcw, Timer, Target, Zap } from "lucide-react";

// === Sample Texts ===
const sampleTexts = [
  "The quick brown fox jumps over the lazy dog. This pangram contains every letter of the alphabet and is commonly used for typing practice.",
  "Technology has revolutionized the way we communicate, work, and live. From smartphones to artificial intelligence, innovation continues to shape our future.",
  "The art of programming requires patience, logic, and creativity. Each line of code is a step towards solving complex problems and building amazing applications.",
  "Reading books expands our knowledge and imagination. Literature has the power to transport us to different worlds and teach us about life.",
  "Music is a universal language that connects people across cultures and generations. Every melody tells a story and every rhythm moves the soul.",
  "Cooking is both an art and a science. The perfect combination of ingredients, timing, and technique creates memorable culinary experiences.",
  "Traveling opens our minds to new cultures and perspectives. Each journey enriches our understanding of the world and broadens our horizons.",
  "Teamwork combines diverse strengths to achieve common goals. Collaboration often leads to outcomes greater than the sum of individual efforts.",
  // Medium Level
  "In order to improve your typing skills, you must practice consistently and gradually increase the difficulty of the text passages you type.",
  "JavaScript closures are a fundamental concept that every web developer should understand. They allow inner functions to access variables defined in outer functions even after the outer function has returned.",
  "Effective communication involves not only speaking clearly but also listening actively, understanding context, and responding thoughtfully.",
  "Climate change presents complex challenges that require cooperation among nations, innovation in technology, and changes in individual behavior to mitigate its effects.",
  "Artificial intelligence and machine learning are rapidly transforming industries by automating tasks, analyzing vast amounts of data, and providing insights that were previously impossible.",
  // Hard Level
  "The juxtaposition of conventional wisdom and emerging paradigms often leads to cognitive dissonance, challenging preconceived notions and promoting innovative problem-solving.",
  "Cryptography relies on complex mathematical algorithms such as elliptic curve cryptography and RSA, which ensure secure communication and data integrity across digital networks.",
  "The philosophical inquiry into the nature of consciousness has spurred debates across neuroscience, psychology, and metaphysics, reflecting the multifaceted aspects of human cognition.",
  "Quantum computing exploits principles of superposition and entanglement to perform computations that would be infeasible for classical computers, potentially revolutionizing cryptography and optimization.",
  "Economic theories such as Keynesianism, monetarism, and supply-side economics provide differing frameworks for understanding fiscal policy, inflation, and market behavior in complex economies.",
];

const TypeSpeedTest = () => {
  const [currentText, setCurrentText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const inputRef = useRef(null);

  // === Initialize Test ===
  const initializeTest = () => {
    const randomText =
      sampleTexts[Math.floor(Math.random() * sampleTexts.length)];
    setCurrentText(randomText);
    setUserInput("");
    setStartTime(null);
    setEndTime(null);
    setIsActive(false);
    setIsCompleted(false);
  };

  useEffect(() => {
    initializeTest();
  }, []);

  // === Handle Typing ===
  const handleInputChange = (e) => {
    const value = e.target.value;

    // Start timer when user begins typing
    if (!startTime && value.length === 1) {
      setStartTime(Date.now());
      setIsActive(true);
    }

    setUserInput(value);

    // When user finishes typing (even with mistakes)
    if (value.length >= currentText.length) {
      setEndTime(Date.now());
      setIsActive(false);
      setIsCompleted(true);
    }
  };

  // === Calculate Words Per Minute ===
  const calculateWPM = () => {
    if (!startTime || !endTime) return 0;

    const timeInMinutes = (endTime - startTime) / 60000;
    const words = currentText.trim().split(" ").length;
    const wpm = Math.round(words / timeInMinutes);

    return isFinite(wpm) && wpm > 0 ? wpm : 0;
  };

  // === Calculate Accuracy ===
  const calculateAccuracy = () => {
    if (userInput.length === 0) return 100;

    let correct = 0;
    for (let i = 0; i < currentText.length; i++) {
      if (userInput[i] === currentText[i]) correct++;
    }

    const accuracy = Math.round((correct / currentText.length) * 100);
    return accuracy >= 0 ? accuracy : 0;
  };

  // === Highlight Text Characters ===
  const getCharacterClass = (index) => {
    if (index >= userInput.length) return "text-gray-400";
    if (userInput[index] === currentText[index]) return "text-green-500";
    return "text-red-500";
  };

  // === Restart Test ===
  const handleRestart = () => {
    initializeTest();
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  // === UI ===
  return (
    <div className="max-w-4xl mx-auto space-y-6 p-4">
      {/* ===== Stats Section ===== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Speed */}
        <div className="card bg-base-200 shadow-md border border-base-300">
          <div className="card-body flex flex-row items-center gap-3 p-4">
            <Zap className="w-6 h-6 text-primary" />
            <div>
              <p className="text-sm opacity-70">Speed</p>
              <h2 className="text-2xl font-bold">
                {isCompleted ? calculateWPM() : 0} WPM
              </h2>
            </div>
          </div>
        </div>

        {/* Accuracy */}
        <div className="card bg-base-200 shadow-md border border-base-300">
          <div className="card-body flex flex-row items-center gap-3 p-4">
            <Target className="w-6 h-6 text-success" />
            <div>
              <p className="text-sm opacity-70">Accuracy</p>
              <h2 className="text-2xl font-bold">{calculateAccuracy()}%</h2>
            </div>
          </div>
        </div>

        {/* Status */}
        <div className="card bg-base-200 shadow-md border border-base-300">
          <div className="card-body flex flex-row items-center gap-3 p-4">
            <Timer className="w-6 h-6 text-warning" />
            <div>
              <p className="text-sm opacity-70">Status</p>
              <span
                className={`badge ${
                  isCompleted
                    ? "badge-success"
                    : isActive
                    ? "badge-info"
                    : "badge-outline"
                }`}
              >
                {isCompleted ? "Completed" : isActive ? "Typing..." : "Ready"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Text  Section ===== and copy-prevention logic. */}
      <div className="card bg-base-200 border border-base-300 shadow-md">
        <div className="card-body">
          <h3 className="text-lg font-semibold mb-3">
            Type the following text:
          </h3>
          <p
            className="p-4 bg-base-100 rounded-lg font-mono text-lg leading-relaxed select-text"
            onCopy={(e) => {
              e.preventDefault();
              navigator.clipboard.writeText("No cheating 🫡");
            }}
          >
            {currentText.split("").map((char, index) => (
              <span key={index} className={getCharacterClass(index)}>
                {char}
              </span>
            ))}
          </p>
        </div>
      </div>

      {/* ===== Input Section ===== */}
      <div className="card bg-base-200 border border-base-300 shadow-md">
        <div className="card-body space-y-4">
          <input
            ref={inputRef}
            type="text"
            value={userInput}
            onChange={handleInputChange}
            placeholder="Start typing here..."
            disabled={isCompleted}
            autoFocus
            className="input input-bordered w-full text-lg h-12"
          />
          <div className="flex justify-between items-center">
            <div className="text-sm opacity-70">
              Progress: {userInput.length} / {currentText.length}
            </div>
            <button
              onClick={handleRestart}
              className="btn btn-outline btn-sm flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Retry
            </button>
          </div>
        </div>
      </div>

      {/* ===== Completion Section ===== */}
      {isCompleted && (
        <div className="card bg-success/10 border border-success text-center shadow-md">
          <div className="card-body">
            <h3 className="text-xl font-bold text-success">
              🎉 Test Completed!
            </h3>
            <p>
              You typed at <strong>{calculateWPM()} WPM</strong> with{" "}
              <strong>{calculateAccuracy()}%</strong> accuracy.
            </p>
            <p className="text-sm opacity-70">
              Time taken:{" "}
              {startTime && endTime
                ? ((endTime - startTime) / 1000).toFixed(1)
                : 0}
              s
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TypeSpeedTest;
