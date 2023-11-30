import { useQuery } from "@tanstack/react-query";
import Nav from "../../Components/Nav/Nav";
import useAxiosPublic from "../../Components/useAxiosPublic/useAxiosPublic";

const UpcomingMeals = () => {
    const axiosPublic = useAxiosPublic();
    const { data: upcoming = [], isLoading } = useQuery({
      queryKey: ["upcomng meals for user"],
      queryFn: async () => {
        const res = await axiosPublic.get("/upcoming");
        return res.data;
      },
    });
    console.log(upcoming)
    return (
      <div>
        <Nav></Nav>
        <div className="overflow-x-auto my-10">
          <table className="table">
            <thead>
              <tr className="bg-base-200">
                <th>#</th>
                <th>Title</th>
                <th>Price</th>
                <th>likes</th>
              </tr>
            </thead>
            <tbody>
              {upcoming.map((item, idx) => (
                <tr key={item._id}>
                  <th>{idx + 1}</th>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>{item.likes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default UpcomingMeals;