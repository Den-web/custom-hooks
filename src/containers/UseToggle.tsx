import React from "react";
import { useToggle } from "../utils/hooks/useToggle";

// Usage
export function UseToggle() {
  const [isOn, toggleIsOn] = useToggle();

  return <button onClick={toggleIsOn}>Turn {isOn ? "Off" : "On"}</button>;
}
