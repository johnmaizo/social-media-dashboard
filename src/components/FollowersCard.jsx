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

const getLines = (number) => {
  switch (number) {
    case 0:
      return "facebook_line";
    case 1:
      return "twitter_line";
    case 2:
      return "instagram_line";
    default:
      return "youtube_line";
  }
};

const FollowersCard = ({
  user,
  followers,
  update,
  color,
  IconimageUrl,
  Iconwidth,
  Iconheight,
  IconMediaUrl,
  MediaWidth,
  MediaHeight,
  number,
  Theme,
}) => {
  return (
    <button
      className={` relative rounded ${
        Theme === "dark"
          ? "bg-[#252B43] hover:bg-[#333A56]"
          : "bg-[#F0F3FA] hover:bg-[#E1E3F0]"
      } p-3 text-center transition-colors ${getLines(number)} overflow-hidden `}
    >
      <div className=" flex items-center justify-center gap-2 pb-3 pt-4">
        <img
          src={IconMediaUrl}
          alt={getAlts(number)}
          aria-hidden
          width={MediaWidth}
          height={MediaHeight}
        />
        <h2
          className={` text-xs font-bold ${
            Theme === "dark" ? "text-[#8b97c6]" : "text-[#63687e]"
          } transition-colors`}
        >
          {user}
        </h2>
      </div>

      <p
        className={` text-5xl font-bold ${
          Theme === "dark" ? "text-[#fff]" : "text-[#000]"
        } transition-colors`}
      >
        {followers}
      </p>
      <span
        className={` text-xs leading-3 tracking-[3px] ${
          Theme === "dark" ? "text-[#8b97c6]" : "text-[#63687e]"
        } transition-colors`}
      >
        {number === 3 ? "SUBSCRIBERS" : "FOLLOWERS"}
      </span>

      <div
        className={` flex gap-1 py-3 ${
          color === "green"
            ? "text-P_Color_Lime_Green"
            : "text-P_Color_Bright_Red"
        } items-center justify-center text-xs font-bold`}
      >
        <img
          src={IconimageUrl}
          alt=""
          aria-hidden
          width={Iconwidth}
          height={Iconheight}
        />
        <p>{update} Today</p>
      </div>
    </button>
  );
};

export default FollowersCard;
