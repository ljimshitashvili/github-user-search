import Header from "./components/Header";
import Search from "./components/Search";
import Result from "./components/Result";
import { useState } from "react";
import { Users } from "./components/userInterface";

type ObjectString = {
  [key: string]: string;
};

function App() {
  const [result, setResult] = useState<Boolean>(true);
  const [light, setLight] = useState<Boolean>(true);
  const [user, setUser] = useState<Users | []>([]);
  const [search, setSearch] = useState<string>("octocat");

  return (
    <div
      className={`App min-h-screen flex flex-col items-center justify-center px-6 md:px-24 ${
        light ? "bg-[#F2F2F2]" : "bg-[#141D2F]"
      }`}
    >
      <Header light={light} setLight={setLight} />
      <Search
        light={light}
        search={search}
        setSearch={setSearch}
        result={result}
      />
      <Result
        light={light}
        user={user}
        setUser={setUser}
        search={search}
        result={result}
        setResult={setResult}
      />
    </div>
  );
}

export default App;
