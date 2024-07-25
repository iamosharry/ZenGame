import { motion } from "framer-motion";

import { iconVariants, wrapperVariants } from "..";
import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";
import useToggle from "../../hooks/useToggle";
import usePlatform from "../../hooks/usePlatform";
import useSelectedPlatform from "../../hooks/useSelectedPlatform";

const PlatformSelector = () => {
  const [open, setOpen] = useState(false);
  const { mode } = useToggle();
  const { addPlatform } = useSelectedPlatform();
  const { data, error } = usePlatform();

  if (error) {
    return null;
  }

  return (
    <>
      <div className="">
        <motion.div animate={open ? "open" : "closed"} className="relative">
          <button
            onClick={() => setOpen((pv) => !pv)}
            className={` flex items-center gap-2 px-3 py-2 rounded-md text-indigo-50   ${
              mode ? "bg-gray-900" : "bg-[#673FE9] "
            }  hover:bg-indigo-500 transition-colors`}
          >
            <span className="font-medium text-lg">Platforms</span>
            <motion.span variants={iconVariants}>
              <FiChevronDown />
            </motion.span>
          </button>

          <motion.ul
            initial={wrapperVariants.closed}
            variants={wrapperVariants}
            style={{ originY: "top", translateX: "-50%" }}
            className="flex z-50 flex-col gap-2 p-2 rounded-lg bg-gray-100  shadow-xl absolute top-[120%] left-[78%] md:left-[10%]  w-48 overflow-hidden"
          >
            {/* <Option setOpen={setOpen} Icon={FiEdit} text="Edit" />
            <Option setOpen={setOpen} Icon={FiPlusSquare} text="Duplicate" />
            <Option setOpen={setOpen} Icon={FiShare} text="Share" />
            <Option setOpen={setOpen} Icon={FiTrash} text="Remove" /> */}
            {data?.map((item) => (
              <li
                onClick={() => setOpen(false)}
                key={item.id}
                className="mb-2 hover:cursor-pointer hover:bg-slate-100 p-2 flex items-center gap-x-3"
              >
                <button
                  onClick={() => addPlatform(item)}
                  className="text-black"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </>
  );
};

export default PlatformSelector;
