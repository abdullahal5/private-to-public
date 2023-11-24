import { IoSearch } from "react-icons/io5";

const Banner = () => {
    return (
      <div className="h-[90vh] bg-slate-50  px-10">
        <div className="flex items-center justify-between ">
          <div className=" space-y-5 w-[50%]">
            <h1 className="font-font1 text-4xl">
              Discover Comfort <br /> & Find Your Perfect Meal
              <br /> at Hostel
              <span className="text-[#02c39a]">Heaven</span>
            </h1>
            <p className="italic font-font1">
              Enhance Campus Life: Our Innovative Meal Management System caters
              to University Students, offering Nutritious Meals, Streamlined
              Service, and Convenience. Elevate your Dining Experience,
              Prioritize Well-being, and Embrace Community with Effortless,
              Modern Solutions for a More Fulfilling Student Journey.
            </p>
            <hr className="w-96  border-[#02c39a]" />
          </div>
          <div className="w-[40%] ">
            <img
              className="w-full"
              src="https://i.ibb.co/jgXpjyp/iftar.png"
              alt=""
            />
          </div>
        </div>
        <div className="relative flex items-center">
          <input
            placeholder="Search and Explore"
            className="border border-[#02c39a] pl-14 w-4/5 py-3"
            type="text"
          />
          <IoSearch
            fontSize={"1.5rem"}
            color="#02c39a"
            className="absolute top-3 ml-5"
          />
          <button className="bg-[#02c39a] px-5 py-3 rounded-[10px] text-white font-semibold ml-9 items-center ">
            Search
          </button>
        </div>
      </div>
    );
};

export default Banner;