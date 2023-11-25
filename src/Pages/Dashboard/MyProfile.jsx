import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Components/Provider/AuthProvider";
import useAxiosPublic from "../../Components/useAxiosPublic/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const MyProfile = () => {
    const {user} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const { data: badgeAll = [] , refetch } = useQuery({
      queryKey: ["badge", user?.email],
      queryFn: async () => {
        const res = await axiosPublic.get(`payments/${user?.email}`);
        return res.data;
      },
    });
    const data = badgeAll.map(item => item.badge)
    console.log(data)
    return (
      <div className="flex justify-center items-center font-font1 h-[100vh] ">
        <div>
          <div className=" mx-auto rounded-3xl bg-gray-300 p-20 space-y-5">
            <h1 className="text-3xl text-center">Badges</h1>
            <div>
              <div className="flex gap-4 items-center justify-center">
                <div className="flex flex-col justify-center">
                  <img
                    className="w-16 mx-auto"
                    src="https://i.ibb.co/6R5QCd7/badge.png"
                    alt=""
                  />
                  <span className="text-center">Bronze</span>
                </div>
                <div>
                  {data?.map((item) => item.badge === "Platinum") ? (
                    <div className="flex flex-col">
                      <img
                        className="w-16 mx-auto"
                        src="https://i.ibb.co/BVxbGyZ/platinum.png"
                        alt=""
                      />
                      <span className="text-center mx-auto w-full">
                        Platinum
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  {data?.map((item) => item.badge === "Gold") ? (
                    <div className="flex flex-col">
                      <img
                        className="w-16 mx-auto"
                        src="https://i.ibb.co/S6rvrj8/medal.png"
                        alt=""
                      />
                      <span className="text-center mx-auto w-full">Gold</span>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  {data?.map((item) => item.badge === "Silver") ? (
                    <div className="flex flex-col">
                      <img
                        className="w-16 mx-auto"
                        src="https://i.ibb.co/k464n01/medal-1.png"
                        alt=""
                      />
                      <span className="text-center mx-auto w-full">Silver</span>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <img className="rounded-full mx-auto" src={user?.photoURL} alt="" />
            <h1 className="text-2xl">User id: {user?.uid}</h1>
            <div className="flex justify-evenly">
              <h1>
                Name: <br />
                <span className="font-semibold"> {user?.displayName}</span>
              </h1>
              <h1>
                Email: <br />
                <span className="font-semibold"> {user?.email}</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MyProfile;