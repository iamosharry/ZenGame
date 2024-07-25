import { motion } from "framer-motion";
import getCroppedImages from "../../services/image-url";
import {
  FaWindows,
  FaPlaystation,
  FaAndroid,
  FaApple,
  FaLinux,
  FaXbox,
} from "react-icons/fa";

import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import { Platform } from "../../hooks/useGames";

interface Props {
  name: string;
  images: string;
  items: Platform[];
  metacritic: number;
}

const ShimmerBorderCard = ({ name, images, items, metacritic }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <>
      <div className="group relative  w-full max-w-sm overflow-hidden rounded-lg bg-slate-800 p-0.5 transition-all duration-500 hover:scale-[1.01] hover:bg-slate-800/50 mx-auto">
        <div className="w-full h-[200px]   rounded-t-lg overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={getCroppedImages(images)}
            alt=""
          />
        </div>
        <div className="h-full relative z-10 flex flex-col   overflow-hidden  bg-slate-900 p-5 transition-colors duration-500 group-hover:bg-slate-800">
          {/* {'herre'} */}
          <div className="flex items-start justify-between mb-2 ">
            <div className="w-[80%]  flex flex-wrap space-y-0 items-center">
              {items.map((item) => {
                const Icon = iconMap[item.platform.slug];
                return (
                  <div
                    key={item.platform.id}
                    className="inline-block mr-3 my-3"
                  >
                    <Icon
                      size={20}
                      className="text-gray-500 hover:text-white hover:cursor-pointer hover:scale-110 transition-all duration-150"
                    />
                  </div>
                );
              })}
            </div>

            <p
              className={` font-semibold bg-gray-800 p-1 px-2 rounded-md ${
                metacritic > 80 ? "text-green-600" : "text-yellow-600"
              }`}
            >
              {metacritic}
            </p>
          </div>

          <h4 className="relative z-10 mb-4 w-full text-2xl font-bold text-slate-50">
            {name}
            <span className="text-3xl">{metacritic > 80 ? "🎯" : "👍"}</span>
          </h4>
        </div>

        <motion.div
          initial={{ rotate: "0deg" }}
          animate={{ rotate: "360deg" }}
          style={{ scale: 1.75 }}
          transition={{
            repeat: Infinity,
            duration: 3.5,
            ease: "linear",
          }}
          className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-200 via-indigo-200/0 to-indigo-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </div>
    </>
  );
};

export default ShimmerBorderCard;
