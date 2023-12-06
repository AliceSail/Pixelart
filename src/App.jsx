import React, { useState } from "react";
import "./App.css";

const App = () => {
  const initialColors = {
    "0-0": "#FFFFFF",
    "0-1": "#FFFFFF",
    "0-2": "#FFFFFF",
    "0-3": "#FFFFFF",
    "0-4": "#FFFFFF",
    "0-5": "#FFFFFF",
    "0-6": "#FFFFFF",
    "0-7": "#FFFFFF",
    "0-8": "#FFFFFF",
    "0-9": "#FFFFFF",
    "0-10": "#FFFFFF",
    "0-11": "#FFFFFF",
    "0-12": "#FFFFFF",
    "0-13": "#FFFFFF",
    "0-14": "#FFFFFF",
    //
    "1-0": "#FFFFFF",
    "1-1": "#FFFFFF",
    "1-2": "#FFFFFF",
    "1-3": "#FFFFFF",
    "1-4": "#0000FF",
    "1-5": "#FFFFFF",
    "1-6": "#FFFFFF",
    "1-7": "#FFFFFF",
    "1-8": "#FFFFFF",
    "1-9": "#0000FF",
    "1-10": "#0000FF",
    "1-11": "#0000FF",
    "1-12": "#0000FF",
    "1-13": "#0000FF",
    "1-14": "#FFFFFF",
    //
    "2-0": "#FFFFFF",
    "2-1": "#FFFFFF",
    "2-2": "#FFFFFF",
    "2-3": "#FFFFFF",
    "2-4": "#FFFFFF",
    "2-5": "#FFFFFF",
    "2-6": "#FFFFFF",
    "2-7": "#FFFFFF",
    "2-8": "#FFFFFF",
    "2-9": "#FFFFFF",
    "2-10": "#0000FF",
    "2-11": "#0000FF",
    "2-12": "#0000FF",
    "2-13": "#FFFFFF",
    "2-14": "#FFFFFF",
    //
    "3-0": "#FFFFFF",
    "3-1": "#FFFFFF",
    "3-2": "#FFFFFF",
    "3-3": "#0000FF",
    "3-4": "#0000FF",
    "3-5": "#0000FF",
    "3-6": "#0000FF",
    "3-7": "#FFFFFF",
    "3-8": "#FFFFFF",
    "3-9": "#FFFFFF",
    "3-10": "#FFFFFF",
    "3-11": "#0000FF",
    "3-12": "#FFFFFF",
    "3-13": "#FFFFFF",
    "3-14": "#FFFFFF",
    //
    "4-0": "#FFFFFF",
    "4-1": "#FFFFFF",
    "4-2": "#0000FF",
    "4-3": "#0000FF",
    "4-4": "#0000FF",
    "4-5": "#0000FF",
    "4-6": "#0000FF",
    "4-7": "#0000FF",
    "4-8": "#FFFFFF",
    "4-9": "#FFFFFF",
    "4-10": "#0000FF",
    "4-11": "#0000FF",
    "4-12": "#FFFFFF",
    "4-13": "#FFFFFF",
    "4-14": "#FFFFFF",
    //
    "5-0": "#FFFFFF",
    "5-1": "#0000FF",
    "5-2": "#0000FF",
    "5-3": "#FFFFFF",
    "5-4": "#0000FF",
    "5-5": "#0000FF",
    "5-6": "#0000FF",
    "5-7": "#0000FF",
    "5-8": "#0000FF",
    "5-9": "#0000FF",
    "5-10": "#0000FF",
    "5-11": "#0000FF",
    "5-12": "#FFFFFF",
    "5-13": "#FFFFFF",
    "5-14": "#FFFFFF",
    //
    "6-0": "#FFFFFF",
    "6-1": "#0000FF",
    "6-2": "#0000FF",
    "6-3": "#0000FF",
    "6-4": "#0000FF",
    "6-5": "#0000FF",
    "6-6": "#0000FF",
    "6-7": "#0000FF",
    "6-8": "#0000FF",
    "6-9": "#0000FF",
    "6-10": "#0000FF",
    "6-11": "#FFFFFF",
    "6-12": "#FFFFFF",
    "6-13": "#FFFFFF",
    "6-14": "#FFFFFF",
    //
    "7-0": "#FFFFFF",
    "7-1": "#0000FF",
    "7-2": "#0000FF",
    "7-3": "#0000FF",
    "7-4": "#0000FF",
    "7-5": "#0000FF",
    "7-6": "#0000FF",
    "7-7": "#0000FF",
    "7-8": "#0000FF",
    "7-9": "#0000FF",
    "7-10": "#FFFFFF",
    "7-11": "#FFFFFF",
    "7-12": "#FFFFFF",
    "7-13": "#FFFFFF",
    "7-14": "#FFFFFF",
    //
    "8-0": "#FFFFFF",
    "8-1": "#FFFFFF",
    "8-2": "#0000FF",
    "8-3": "#0000FF",
    "8-4": "#0000FF",
    "8-5": "#0000FF",
    "8-6": "#0000FF",
    "8-7": "#0000FF",
    "8-8": "#0000FF",
    "8-9": "#FFFFFF",
    "8-10": "#FFFFFF",
    "8-11": "#FFFFFF",
    "8-12": "#FFFFFF",
    "8-13": "#FFFFFF",
    "8-14": "#FFFFFF",
    //
    "9-0": "#FFFFFF",
    "9-1": "#FFFFFF",
    "9-2": "#FFFFFF",
    "9-3": "#FFFFFF",
    "9-4": "#FFFFFF",
    "9-5": "#FFFFFF",
    "9-6": "#FFFFFF",
    "9-7": "#FFFFFF",
    "9-8": "#FFFFFF",
    "9-9": "#FFFFFF",
    "9-10": "#FFFFFF",
    "9-11": "#FFFFFF",
    "9-12": "#FFFFFF",
    "9-13": "#FFFFFF",
    "9-14": "#FFFFFF",
  };

  const [pixelState, setPixelState] = useState({});

  const togglePixel = (row, col) => {
    const key = `${row}-${col}`;
    setPixelState((prevState) => {
      // Toggle the color only if it's an initially colored box
      return initialColors[key]
        ? { ...prevState, [key]: initialColors[key] }
        : prevState;
    });
  };

  const fillWithInitialColors = () => {
    setPixelState(initialColors);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginLeft: "750px",
      }}
    >
      <h2>Fill in all the boxes to reveal an image</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(15, 30px)" }}>
        {Array.from({ length: 10 }, (_, rowIndex) =>
          Array.from({ length: 15 }, (_, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="pixel"
              style={{ backgroundColor: pixelState[`${rowIndex}-${colIndex}`] }}
              onClick={() => togglePixel(rowIndex, colIndex)}
            />
          ))
        )}
      </div>
      <button
        onClick={fillWithInitialColors}
        style={{ marginleft: "300px", marginTop: "5px" }}
      >
        Auto-fill
      </button>
    </div>
  );
};

export default App;
