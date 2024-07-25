import logo from "../../assets/logo.webp";
import BeamInput from "./BeamInput";
import SliderToggle from "./SliderToggle";
const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between  py-3">
        <div className="">
          <img className="w-[70px]" src={logo} alt="" />
        </div>
        <div className="hidden md:block flex-1 ml-10 ">
          <BeamInput />
        </div>
        <div className="">
          <SliderToggle />
        </div>
      </div>
    </>
  );
};

export default Navbar;
