export default function Search() {
  return (
    <div className=" w-full bg-white max-w-screen-sm px-[7px] flex gap-[7px]">
      <input type="text" className=" w-full h-[50px] rounded-lg border " />
      <button className="w-[96px] h-[50px] bg-[#0079FF] text-white rounded-lg">
        search
      </button>
    </div>
  );
}
