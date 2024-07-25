import { motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";
import useToggle from "../../hooks/useToggle";

const SliderToggle = () => {
  const { mode, light, dark } = useToggle();
  return (
    <div className="relative  flex w-fit items-center rounded-full space-x-10 py-2 ">
      <div
        className={`cover bg-gradient-to-r from-violet-600 to-indigo-600 ${
          mode === true ? "active" : "inactive"
        }  `}
      ></div>
      <button
        className={`flex space-x-2 items-center text-white`}
        onClick={() => dark()}
      >
        <FiSun className={`relative z-10 text-lg md:text-sm `} />
        <span className={`relative z-10 `}>Light</span>
      </button>
      <button
        className={`flex space-x-2 items-center `}
        onClick={() => light()}
      >
        <FiMoon className="relative z-10 text-lg md:text-sm " />
        <span className="relative z-10">Dark</span>
      </button>
      <div>
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
        />
      </div>
    </div>
  );
};

export default SliderToggle;
