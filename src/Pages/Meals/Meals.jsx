import Nav from "../../Components/Nav/Nav";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Components/useAxiosPublic/useAxiosPublic";
import MealsCard from "../../Components/MealsCard/MealsCard";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import Select from "react-select";

const Meals = () => {
  const [inputText, setInputText] = useState("");
  const axiosPublic = useAxiosPublic();
  const [selectedOption, setSelectedOption] = useState(null);
  const { data: meal = [] } = useQuery({
    queryKey: ["meal"],
    queryFn: async () => {
      const res = await axiosPublic.get("category");
      return res.data;
    },
  });

  const handleInput = (e) => {
    setInputText(e.target.value);
  };
  const filtered = meal.filter((item) => {
    const textMatch = item.name.toLowerCase().includes(inputText.toLowerCase());
    const categoryMatch =
      !selectedOption || item.category === selectedOption?.value;
    return textMatch && categoryMatch;
  });
  const options = [
    { value: "breakfast", label: "Breakfast" },
    { value: "lunch", label: "Lunch" },
    { value: "dinner", label: "Dinner" },
  ];
  console.log(filtered);

  return (
    <div>
      <Nav></Nav>
      <h1 className="text-3xl text-center my-5">All Meals</h1>
      <div className="relative flex items-center my-10 mx-auto">
        <input
          onChange={handleInput}
          placeholder="Search by meal title"
          className="border  border-[#02c39a] mr-20 pl-16 w-2/4 py-3"
          type="text"
        />
        <IoSearch
          fontSize={"1.5rem"}
          color="#02c39a"
          className="absolute top-3 ml-5"
        />
        <div className="App w-1/4">
          <Select
            className=""
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            placeholder={"Select a category"}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-5">
          {filtered?.map((i) => (
            <MealsCard item={i} key={i._id}></MealsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Meals;
