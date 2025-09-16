import React, { useState } from "react";
import "../../styles/index.css";

export default function Semaforo() {
  const [colors, setColors] = useState(["red", "yellow", "#00ff008f"]);
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((i) => (i + 1) % colors.length);

  const addColor = () => {
    if (colors.includes("blue")) return;
    const iGreen = colors.indexOf("green");
    if (iGreen === -1) {
      setColors([...colors, "blue"]);
      return;
    }
    const nextColors = [...colors];
    nextColors.splice(iGreen + 1, 0, "blue");
    setColors(nextColors);
    if (activeIndex > iGreen) setActiveIndex(activeIndex + 1);
  };

  return (
    <div style={{ width: 120, margin: "20px auto" }}>
      <div style={{ background: "#333", padding: 12, borderRadius: 12 }}>
        {colors.map((c, i) => (
          <div
            key={i}
            className={`circle ${i === activeIndex ? "on" : ""}`}
            style={{ color: c, background: c }}
            onClick={() => setActiveIndex(i)}
            title={c}
          />
        ))}
      </div>
      <div className="mt-3 d-flex gap-2 justify-content-center">
        <button  className="btn btn-outline-info" onClick={next}>Siguiente</button>
        <button  className="btn btn-outline-info" onClick={addColor}>Agregar color</button>
      </div>
    </div>
  );
}
