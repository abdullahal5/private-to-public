import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Components/useAxiosPublic/useAxiosPublic";
import Swal from "sweetalert2";

const AllReview = () => {
  const axiosPublic = useAxiosPublic();
  const { data: review = [], refetch } = useQuery({
    queryKey: ["delete"],
    queryFn: async () => {
      const res = await axiosPublic.get("/review");
      return res.data;
    },
  });
  // console.log(review);
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/review/${_id}`).then((res) => {
          // console.log(res.data);
          if (res.data.deletedCount) {
            refetch()
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <h1 className="text-3xl text-center my-5">All Review </h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="bg-gray-200">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Likes</th>
              <th>Review</th>
              <th>Delete</th>
              <th>view</th>
            </tr>
          </thead>
          <tbody>
            {review.map((item, idx) => (
              <tr key={item._id}>
                <th>{idx + 1}</th>
                <td>{item?.dataFind?.title}</td>
                <td>{item?.dataFind?.likes}</td>
                <td>{item?.dataFind?.review}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-[#02c39a] text-white px-3 py-2"
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button className="bg-[#02c39a] text-white px-3 py-2">
                    view
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

export default AllReview;
