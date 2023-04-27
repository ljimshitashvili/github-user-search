import Header from "./components/Header";
import Search from "./components/Search";
import { useState } from "react";

function App() {
  const [light, setLight] = useState(true);

  return (
    <div
      className={
        light
          ? "App px-[24px] min-h-screen bg-[#F2F2F2] flex flex-col items-center"
          : "App px-[24px] min-h-screen bg-[#141D2F] flex flex-col items-center"
      }
    >
      <Header light={light} setLight={setLight} />
      <Search light={light} />
    </div>
  );
}

export default App;
