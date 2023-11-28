import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Components/useAxiosPublic/useAxiosPublic";
import { useEffect, useState } from "react";

const ManageUser = () => {
    const axiosPublic = useAxiosPublic()
    const { data: users = [] } = useQuery({
      queryKey: ["users"],
      queryFn: async () => {
        const res = await axiosPublic.get("/users");
        return res.data;
      },
    });
    const { data: payment = [] } = useQuery({
      queryKey: ["pay"],
      queryFn: async () => {
        const res = await axiosPublic.get("/payments");
        return res.data;
      },
    });
    
    // console.log(payment)
    return (
      <div>
        <div>
            <h1 className="text-3xl text-center font-semibold mt-5">All users</h1>
        </div>
        <div className="overflow-x-auto">
          <table className="table my-10">
            <thead>
              <tr className="bg-base-200">
                <th>#</th>
                <th>User Name</th>
                <th>User Email</th>
                <th>Make Admin</th>
                <th>Subscription Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((i, idx) => (
                <tr key={i._id}>
                  <th>{idx + 1}</th>
                  <td>{i.name}</td>
                  <td>{i.email}</td>
                  <td>
                    <button className="bg-[#02c39a] text-white px-4 py-3">
                      Admin
                    </button>
                  </td>
                  <td>
                    <div className="flex justify-center gap-5 ">
                      {payment
                        .filter((item) => item.email === i.email)
                        .map((itemm) => itemm.badge)}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default ManageUser;