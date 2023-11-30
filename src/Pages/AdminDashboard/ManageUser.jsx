import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Components/useAxiosPublic/useAxiosPublic";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageUser = () => {
    const axiosPublic = useAxiosPublic()
    const { data: users = [] } = useQuery({
      queryKey: ["users"],
      queryFn: async () => {
        const res = await axiosPublic.get("/users");
        return res.data;
      },
    });
    const { data: payment = [], refetch } = useQuery({
      queryKey: ["pay"],
      queryFn: async () => {
        const res = await axiosPublic.get("/payments");
        return res.data;
      },
    });
    
    const MadkeAdimn =(item) =>{
      axiosPublic.patch(`/users/${item._id}`)
        .then(res =>{
            // console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    icon: "success",
                    title: `${item.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
     return (
       <div>
         <div>
           <h1 className="text-3xl text-center font-semibold mt-5">
             All users
           </h1>
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
                   <td className="text-center">
                     {i.role === "admin" ? (
                       "Admin"
                     ) : (
                       <button onClick={() =>MadkeAdimn(i)} className="bg-[#02c39a] px-4 py-3 text-white">Make Admin</button>
                     )}
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