import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Components/useAxiosPublic/useAxiosPublic";
import axios from "axios";
import Swal from "sweetalert2";

const AllMeal = () => {
  const axiosPublic = useAxiosPublic();
  const { data: allMeals = [], refetch } = useQuery({
    queryKey: ["allData"],
    queryFn: async () => {
      const res = await axiosPublic.get("/category");
      return res.data;
    },
  });
  // console.log(allMeals);
  const handleDelete =(id) =>{
     axiosPublic.delete(`/category/${id}`)
    .then(res =>{
        // console.log(res.data)
        if(res.data.deletedCount){
            refetch()
             Swal.fire({
               title: "Good job!",
               text: "you successfully deleted",
               icon: "success",
             });
        }
    })
  }
  return (
    <div>
      <h1 className="text-3xl text-center my-5">All Meals</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="bg-base-200">
              <th>#</th>
              <th>Title</th>
              <th>Likes</th>
              <th>Reviews</th>
              <th>Distributor Name</th>
              <th>Distributor Email</th>
              <th>Update</th>
              <th>Delete</th>
              <th>View Meal Button</th>
            </tr>
          </thead>
          <tbody>
            {allMeals.map((item, idx) => (
              <tr key={item._id}>
                <th>{idx + 1}</th>
                <td>{item.title}</td>
                <td>{item.likes}</td>
                <td>{item.review}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <button className="bg-[#02c39a] px-4 py-3 text-white">
                    Update
                  </button>
                </td>
                <td>
                  <button onClick={()=>handleDelete(item._id)} className="bg-[#02c39a] px-4 py-3 text-white">
                    Delete
                  </button>
                </td>
                <td>
                  <button className="bg-[#02c39a] px-4 py-3 text-white">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllMeal;
