import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Components/useAxiosPublic/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../Components/Provider/AuthProvider";
import Swal from "sweetalert2";

const MyReview = () => {
  const {user} = useContext(AuthContext)
  const userEmail = user?.email
    const axiosPublic = useAxiosPublic()
     const { data: review = [], refetch } = useQuery({
       queryKey: ["okk"],
       queryFn: async () => {
         const res = await axiosPublic.get('/review');
         return res.data;
       }, 
     });
     const findReview = review.filter((item) => item?.email === userEmail);
     console.log(findReview)

     const handleDeleteReview = async(id) =>{
          const res = await axiosPublic.delete(`/review/${id}`)
          console.log(res.data)
          if(res.data.deletedCount > 0){
            refetch();
            Swal.fire({
              title: "Good Job!",
              text: "your review Deleted",
              icon: "success",
            });
          }
     }
     const handleSee = () =>{

     }
    return (
      <div>
        <div className="overflow-x-auto">
          <table className="table mt-10">
            <thead>
              <tr className="bg-gray-200">
                <th>#</th>
                <th>Meal Title</th>
                <th>Likes Count</th>
                <th>Review Count</th>
                <th>Edit Button</th>
                <th>Delete Button</th>
                <th>View Meal Button</th>
              </tr>
            </thead>
            <tbody>
              {findReview.map((item, idx) => (
                <tr key={item._id}>
                  <th>{idx + 1}</th>
                  <td>{item?.dataFind?.name}</td>
                  <td>0</td>
                  <td>0</td>
                  <td>
                    <button className="text-white bg-[#02c39a] px-4 py-2 font-semibold rounded-lg">Edit</button>
                  </td>
                  <td onClick={() =>handleDeleteReview(item._id)}>
                    <button className="text-white bg-[#02c39a] px-4 py-2 font-semibold rounded-lg">Delete</button>
                  </td>
                  <td>
                    <button onClick={handleSee} className="text-white bg-[#02c39a] px-4 py-2 font-semibold rounded-lg">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyReview;