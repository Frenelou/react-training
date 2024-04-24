import { useState, useEffect } from "react";
import "./ligths.css";

export default function Lights({ speed = 100 }) {
  const [lights, setLights] = useState([
    { name: "red", code: "#f00", on: true },
    { name: "orange", code: "#ed7302" },
    { name: "green", code: "#008000" },
  ]);

  useEffect(() => {
    const oldIndex = lights.findIndex((_light) => _light.on);
    const newIndex = oldIndex < lights.length - 1 ? oldIndex + 1 : 0;
    const newArr = lights.map((_light, i) => ({
      ..._light,
      on: i == newIndex,
    }));

    setTimeout(() => setLights(newArr), speed);
  }, [lights, speed]);

  return (
    <div id="box">
      {lights.map(({ code, on }) => (
        <div
          key={code}
          className={`light ${on && "on"}`}
          style={{ "--color": code } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
