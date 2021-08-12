import React from "react";
import { useGlobalContext } from "./context";
export default function App() {
  const { logGreet } = useGlobalContext();
  return (
    <div>
      <h1>Bezdomniaki.com</h1>
      <button onClick={logGreet}>Show Hello in console!</button>
    </div>
  );
}
