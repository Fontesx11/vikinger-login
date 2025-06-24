import type React from "react";

type TwitchLogoProps = {
  className?: string;
  options?: string;
};

const TwitchLogo: React.FC<TwitchLogoProps> = ({ className, options }) => (
  <div className={`w-[40px] h-[40px] bg-[#7b5dfa] flex justify-center items-center rounded-[7px] ${options}`}>
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-6 h-6 object-center ${className}`}
      fill="currentColor"
    >
      <path d="M6.179,0L0,17.964V87.81h24.714V100h15.789L52.86,87.81h18.993L100,60.527V0H6.179z M90.39,57.645L74.828,72.504H49.885L37.299,84.703V72.504H15.561V9.094H90.39V57.645z M49.885,27.051h-9.382v27.27h9.382V27.051z M74.828,27.051h-9.382v27.27h9.382V27.051z"></path>
    </svg>
  </div>
);

export default TwitchLogo;
