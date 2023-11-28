import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Components/Provider/AuthProvider";
import useAxiosPublic from "../../Components/useAxiosPublic/useAxiosPublic";

const RequestedMeals = () => {
    const axiosPublic = useAxiosPublic()
    const {user} = useContext(AuthContext)
    const { data: requset = [], refetch } = useQuery({
      queryKey: ["request", user?.email],
      queryFn: async () => {
        const res = await axiosPublic.get(`request/${user?.email}`);
        return res.data;
      },
    });

    const handleDelete = (id) =>{
     axiosPublic.delete(`/request/${id}`)
     .then(res =>{
        refetch()
        console.log(res.data)
        
     })
    }
    
    return (
      <div>
        <div className="overflow-x-auto my-10">
          <table className="table">
            <thead className="bg-gray-100">
              <tr>
                <th>#</th>
                <th>Meal Title</th>
                <th>Likes</th>
                <th>Reviews count</th>
                <th>Status</th>
                <th>Cancel Button</th>
              </tr>
            </thead>
            <tbody>
              {requset.map((item, idx) => (
                <tr key={item._id}>
                  {console.log(item._id)}
                  <th>{idx + 1}</th>
                  <td>{item?.dataFind?.name}</td>
                  <td>0</td>
                  <td>0</td>
                  <td>{item.status}</td>
                  <button onClick={() =>handleDelete(item._id)} className="bg-[#02c39a] text-white font-semibold">
                    <td>Cancel</td>
                  </button>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default RequestedMeals;