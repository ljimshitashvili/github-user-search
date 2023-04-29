import Header from "./components/Header";
import Search from "./components/Search";
import Result from "./components/Result";
import { useState } from "react";

function App() {
  const [light, setLight] = useState<Boolean>(true);
  const [user, setUser] = useState<string>("");

  return (
    <div
      className={`App min-h-screen flex flex-col items-center justify-center px-6 md:px-24 ${
        light ? "bg-[#F2F2F2]" : "bg-[#141D2F]"
      }`}
    >
      <Header light={light} setLight={setLight} />
      <Search light={light} />
      <Result light={light} user={user} setUser={setUser} />
    </div>
  );
}

export default App;
