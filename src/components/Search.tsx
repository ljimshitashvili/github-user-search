import icon from "../photos/icon-search.svg";

interface Props {
  light: Boolean;
  search: any;
  setSearch: any;
  result: Boolean;
}

const Search: React.FC<Props> = ({ light, search, setSearch, result }) => {
  const submitHandler = (e: any) => {
    e.preventDefault();
    setSearch(e.target.inputi.value);
  };

  return (
    <form
      onSubmit={submitHandler}
      className={`w-full relative h-[60px] pr-[7px] pl-4 flex gap-[7px] shadow-lg rounded-[15px] items-center justify-between mb-4 max-w-sm md:max-w-xl md:mb-6 md:h-[69px] lg:max-w-[730px]  ${
        light ? "bg-white" : "bg-[#1E2A47]"
      }`}
    >
      <h1
        className={`absolute right-28 translate-y-1/5 text-[#F74646] font-bold text-[15px] ${
          result ? "hidden" : "block"
        }`}
      >
        No results
      </h1>
      <div className="flex gap-[11px] items-center w-[80%]">
        <img src={icon} alt="search icon" />
        <input
          type="text"
          id="inputi"
          placeholder={`${result ? "Search GitHub username…" : ""}`}
          className={`w-full h-[50px] placeholder:text-[13px] outline-0 md:placeholder:text-[18px] md:text-[18px] ${
            light ? "bg-white" : "bg-[#1E2A47] placeholder-white text-white"
          }`}
        />
      </div>
      <button
        type="submit"
        className="w-[96px] h-[50px] bg-[#0079FF] text-white rounded-[10px]"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
