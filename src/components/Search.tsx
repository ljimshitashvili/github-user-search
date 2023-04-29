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
    <form onSubmit={submitHandler}>
      <div
        className={`w-full relative h-[60px] px-[7px] flex gap-[7px] shadow-lg rounded-lg items-center justify-between mb-4 max-w-sm md:max-w-xl lg:max-w-[730px] ${
          light ? "bg-white" : "bg-[#1E2A47]"
        }`}
      >
        <h1
          className={`absolute right-20 translate-y-1/5 text-[#F74646] font-bold text-[15px] ${
            result ? "hidden" : "block"
          }`}
        >
          No results
        </h1>
        <svg height="24" width="25" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z"
            fill="#0079ff"
          />
        </svg>
        <input
          type="text"
          id="inputi"
          placeholder={`${result ? "Search GitHub username…" : ""}`}
          className={`w-full h-[50px] rounded-lg max-w-[75%] placeholder:text-[13px] ${
            light
              ? "bg-white"
              : "bg-[#1E2A47] placeholder:text-[13px] placeholder-white text-white"
          }`}
        />
        <button
          type="submit"
          className="w-[96px] h-[50px] bg-[#0079FF] text-white rounded-lg"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
