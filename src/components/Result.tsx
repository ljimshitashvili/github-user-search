interface Props {
  light: Boolean;
}

const Result: React.FC<Props> = ({ light }) => {
  return (
    <div
      className={
        light
          ? "w-full bg-white max-w-screen-sm px-[24px] flex flex-col shadow-lg rounded-lg"
          : "w-full bg-white max-w-screen-sm px-[24px] flex flex-col shadow-lg rounded-lg"
      }
    >
      <div className="flex gap-[19px] w-full mb-[33px]">
        <img src="image.png" alt="Octocat" />
        <div>
          <h1 className="text-[16px] font-bold text-[#2B3442]">Name</h1>
          <h2 className="text-[#0079FF] font-normal text-[13px]">@username</h2>
          <h3 className="text-[#697C9A] font-normal text-[13px]">Joined</h3>
        </div>
      </div>
      <p className="text-[#4B6A9B] text-[13px] leading-[25px] mb-[23px]">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros.
      </p>
      <div className="flex w-full h-[85px] bg-black">
        <h1>
          Repos<span>8</span>
        </h1>
        <h1>
          Followers<span>9</span>
        </h1>{" "}
        <h1>
          Following<span>10</span>
        </h1>
      </div>
      <div>
        <div className="flex gap-[13px] items-center"></div>
        <div className="flex gap-[13px] items-center"></div>
        <div className="flex gap-[13px] items-center"></div>
        <div className="flex gap-[13px] items-center"></div>
      </div>
    </div>
  );
};

export default Result;
