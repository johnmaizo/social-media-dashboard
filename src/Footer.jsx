const Footer = ({Theme}) => {
    return (
      <footer className={` text-center ${Theme === "dark" ? "text-[#fff] bg-[#1D2029]" : "text-[#000] bg-[#FFFFFF]"} transition-colors`}>
        <div className="">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
            className=" text-P_Color_Neon_Green underline"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://www.frontendmentor.io/profile/johnmaizo"
            target="_blank"
            rel="noreferrer"
            className=" text-P_Color_Neon_Green underline"
          >
            John Robert Maizo
          </a>
          .
        </div>
      </footer>
    );
  };
  
  export default Footer;
  