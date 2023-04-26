export default function Search() {
  return (
    <div className=" w-full h-[60px] bg-white max-w-screen-sm px-[7px] flex gap-[7px] shadow-lg rounded-lg items-center">
      <input
        type="text"
        placeholder="Search GitHub username…"
        className=" w-full h-[50px] rounded-lg  "
      />
      <button className="w-[96px] h-[50px] bg-[#0079FF] text-white rounded-lg">
        Search
      </button>
    </div>
  );
}
