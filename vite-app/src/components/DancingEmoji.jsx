import { useState } from "react";

export default function DancingEmoji() {
  const [action, setAction] = useState("🧍");
  const [isDancing, setIsDancing] = useState(false);

  // Variant 1
  const handleChange = () => {
    if (action === "🧍") {
      setAction("💃");
    } else {
      setAction("🧍");
    }
  };

  // Variant 2
  const toggleIsDancing = () => setIsDancing(!isDancing);

  return (
    <>
      <div>
        <h3>V1</h3>
        <div>{action}</div>
        <button onClick={handleChange}>Change!</button>
      </div>
      <div>
        <h3>V2</h3>
        <div>{isDancing ? "💃" : "🧍"}</div>
        <button onClick={toggleIsDancing}>Change!</button>
      </div>
    </>
  );
}
