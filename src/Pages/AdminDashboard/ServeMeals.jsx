import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Components/useAxiosPublic/useAxiosPublic";
import { useState } from "react";

const ServeMeals = () => {
  const axiosPublic = useAxiosPublic();
  const [requestStatus, setRequestStatus] = useState({});

  const { data: request = [], refetch } = useQuery({
    queryKey: ["serveMeal"],
    queryFn: async () => {
      const res = await axiosPublic.get(`request`);
      return res.data;
    },
  });

  const handleServeClick = (_id) => {
    setRequestStatus((prevStatus) => ({
      ...prevStatus,
      [_id]: true, 
    }));
  };
// console.log(requestStatus)
  return (
    <div>
      <div>
        <h1 className="text-3xl text-center my-5">Serve Meals</h1>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="bg-base-200">
                <th>#</th>
                <th>Title</th>
                <th>Email</th>
                <th>Name</th>
                <th>Status</th>
                <th>Serve</th>
              </tr>
            </thead>
            <tbody>
              {request.map((item, idx) => (
                <tr key={item._id}>
                  <th>{idx + 1}</th>
                  <td>{item?.dataFind?.title}</td>
                  <td>{item.email}</td>
                  <td>{item?.dataFind?.name}</td>
                  <td>{requestStatus[item._id] ? "Served" : item.status}</td>
                  <td>
                    <button
                      onClick={() => handleServeClick(item._id)}
                      disabled={requestStatus[item._id]} 
                      className="bg-[#02c39a] text-white px-3 py-2"
                    >
                      Serve
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ServeMeals;
