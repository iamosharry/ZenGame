import Genre from "./components/aside/Genre";
import GameGrid from "./components/main/GameGrid";
import PlatformSelector from "./components/main/PlatformSelector";
import Relevance from "./components/main/Relevance";
import BeamInput from "./components/navbar/BeamInput";
import Navbar from "./components/navbar/Navbar";
import useSelectedGenre from "./hooks/useSelectedGenre";
import useSelectedPlatform from "./hooks/useSelectedPlatform";

import useToggle from "./hooks/useToggle";

const App = () => {
  const mode = useToggle((s) => s.mode);
  const { platformStore } = useSelectedPlatform();
  const { genraStore } = useSelectedGenre();

  return (
    <>
      <div
        className={`px-5 md:px-10 transition-all duration-[0.4s] overflow-hidden  ${
          mode === false ? "bg-gray-200 text-black" : "bg-gray-950 text-white"
        }`}
      >
        <div className="mb-5">
          <Navbar />
        </div>
        <div className="md:hidden mb-10">
          <BeamInput />
        </div>
        <div
          className={`md:flex transition-all duration-[0.4s]  ${
            mode === true ? "text-white" : "text-gray-800"
          }`}
        >
          <div className="hidden  md:block md:w-[20%]">
            <div className="text-4xl font-bold mb-6 mt-2">Genres</div>
            <Genre />
          </div>
          <div className=" md:w-[80%] md:px-3 ">
            <div className="text-6xl mb-5 font-semibold md:px-3 flex md:gap-x-4 font-mono">
              <div>{platformStore?.name}</div>
              <div>{genraStore?.name || "Games"}</div>
            </div>
            <div className="lg:px-5 mb-3 flex gap-3 flex-wrap">
              <PlatformSelector />
              <Relevance />
            </div>
            <GameGrid />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
