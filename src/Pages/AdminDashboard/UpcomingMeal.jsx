import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Components/useAxiosPublic/useAxiosPublic";

const UpcomingMeal = () => {
    const axiosPublic = useAxiosPublic()
     const { data: upcoming = [], isLoading } = useQuery({
       queryKey: ["upcome"],
       queryFn: async () => {
         const res = await axiosPublic.get("/upcoming");
         return res.data;
       },
     });
     console.log(upcoming)
    return (
      <div>
        <h1 className="my-5 text-center text-3xl">Upcomin meals</h1>
        <div className="overflow-x-auto">
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

export default UpcomingMeal;