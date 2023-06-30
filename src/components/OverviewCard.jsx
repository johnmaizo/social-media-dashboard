const getAlts = (number) => {
  switch (number) {
    case 0:
      return "Facebook Icon";
    case 1:
      return "Twitter Icon";
    case 2:
      return "Instagram Icon";
    default:
      return "Youtube Icon";
  }
};

const OverviewCard = ({
  title,
  number,
  percent,
  color,
  mediaIcon,
  MediaWidth,
  MediaHeight,
  arrowIcon,
  ArrowWidth,
  ArrowHeight,
  index,
  Theme,
}) => {
  return (
    <button
      className={` rounded ${
        Theme === "dark"
          ? "bg-[#252B43] hover:bg-[#333A56]"
          : "bg-[#F0F3FA] hover:bg-[#E1E3F0]"
      } p-5 transition-colors `}
    >
      <div className="flex items-center justify-between">
        <h3
          className={` text-sm font-bold ${
            Theme === "dark" ? "text-[#8b97c6]" : "text-[#63687e]"
          } transition-colors`}
        >
          {title}
        </h3>
        <img
          src={mediaIcon}
          alt={getAlts(index)}
          width={MediaWidth}
          height={MediaHeight}
        />
      </div>
      <div className="flex items-end justify-between pt-3">
        <p
          className={`text-3xl font-bold ${
            Theme === "dark" ? "text-[#fff]" : "text-[#000]"
          } transition-colors`}
        >
          {number}
        </p>
        <span
          className={`flex gap-1 ${
            color === "green"
              ? "text-P_Color_Lime_Green"
              : "text-P_Color_Bright_Red"
          } items-center text-xs font-bold`}
        >
          <img
            src={arrowIcon}
            alt=""
            aria-hidden
            width={ArrowWidth}
            height={ArrowHeight}
          />
          {percent}
        </span>
      </div>
    </button>
  );
};

export default OverviewCard;
