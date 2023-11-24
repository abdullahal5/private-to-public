import { useQuery } from "@tanstack/react-query";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Card from "../Card/Card";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";

const HomeCategory = () => {
  const axiosPublic = useAxiosPublic()
  const {data: food=[]} = useQuery({
    queryKey: ['category'],
    queryFn: async() =>{
      const res = await axiosPublic.get('/category')
      return res.data
    }
  })
  // console.log(food)
  const breakfast = food?.filter((item) => (item.category)=== 'breakfast');
  const lunch = food?.filter(
    (item) => (item.category) === "lunch"
  );
  const dinner = food?.filter((item) => (item.category) === 'dinner');
  const all = food  
    return (
      <div>
        <div className="my-10">
          <h1 className="text-3xl font-font1 text-center text-[#61a5c2]">
            Meals by category
          </h1>
          <hr className="w-96 mx-auto my-5 border-[#02c39a]" />
        </div>
        <div>
          <Tabs>
            <TabList
              style={{
                display: "flex",
                justifyContent: "center",
                color: "#02c39a",
              }}
            >
              <Tab>Breakfast</Tab>
              <Tab>Lunch</Tab>
              <Tab>Dinner</Tab>
              <Tab>All</Tab>
            </TabList>

            <TabPanel>
              <Card item={breakfast} ></Card>
            </TabPanel>
            <TabPanel>
              <Card item={lunch} ></Card>
            </TabPanel>
            <TabPanel>
              <Card item={dinner} ></Card>
            </TabPanel>
            <TabPanel>
              <Card item={all}></Card>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
};

export default HomeCategory;