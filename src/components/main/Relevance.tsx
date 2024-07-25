import { motion } from "framer-motion";
import { useState } from "react";
import { iconVariants, wrapperVariants } from "..";
import { FiChevronDown } from "react-icons/fi";
import useToggle from "../../hooks/useToggle";
import useRelevance from "../../hooks/useRelevance";

const Relevance = () => {
  const [open, setOpen] = useState(false);
  const { mode } = useToggle();
  const { sortOrder, relevanceStore } = useRelevance();

  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === relevanceStore
  );
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
            <span className="font-medium text-lg">
              Order by: {currentSortOrder?.label || "Relevance"}
            </span>
            <motion.span variants={iconVariants}>
              <FiChevronDown />
            </motion.span>
          </button>

          <motion.ul
            initial={wrapperVariants.closed}
            variants={wrapperVariants}
            style={{ originY: "top", translateX: "-50%" }}
            className="flex z-50 flex-col gap-2 p-2 rounded-lg bg-gray-100  shadow-xl absolute top-[120%] left-[70%]  w-48 overflow-hidden"
          >
            {/* <Option setOpen={setOpen} Icon={FiEdit} text="Edit" />
            <Option setOpen={setOpen} Icon={FiPlusSquare} text="Duplicate" />
            <Option setOpen={setOpen} Icon={FiShare} text="Share" />
            <Option setOpen={setOpen} Icon={FiTrash} text="Remove" /> */}
            {sortOrders.map((item) => (
              <li
                onClick={() => {
                  sortOrder(item.value);
                  setOpen(false);
                }}
                key={item.value}
                value={item.value}
                className="text-gray-800 mb-2 p-1 cursor-pointer"
              >
                {item.label}
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </>
  );
};

export default Relevance;
