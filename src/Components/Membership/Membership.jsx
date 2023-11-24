import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaCheck } from "react-icons/fa6";

const Membership = () => {
    const { data: membership =[] } = useQuery({
      queryKey: ["premium"],
      queryFn: async () => {
        const res = await axios.get("/membership.json");
        return res.data;
      },
    });
    console.log(membership)
    return (
      <div className="py-5 bg-slate-50 my-10">
        <div className="my-5">
          <h1 className="text-3xl font-font1 text-center my-5 text-[#61a5c2]">
            Become Our Member
          </h1>
          <hr className="w-96 border-[#61a5c2] mx-auto mb-5" />
          <p className="text-center italic font-font1 mx-28">
            Unlock a world of exclusive benefits with our premium membership
            package! Elevate your experience with VIP access to curated content,
            personalized support, member-only events, and irresistible
            discounts. Join now to indulge in a realm tailored just for you,
            where premium means priority
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-3 gap-10">
            {membership.map((item) => (
              <div
                key={item.id}
                className="text-center border hover:text-white font-font1 hover:bg-[#61a5c2] cursor-pointer border-[#61a5c2] space-y-4 card card-body"
              >
                <h1 className="text-2xl">{item.package_name}</h1>
                <p>Special Price</p>
                <p className="text-4xl font-font1">${item.price}</p>
                <p>Get the Premium and take advantages</p>
                <div>
                  <p>
                    <FaCheck
                      fontSize={"1.5rem"}
                      color="green"
                      className="inline"
                    />
                    {item?.advantages[0]}
                  </p>
                  <p>
                    <FaCheck
                      fontSize={"1.5rem"}
                      color="green"
                      className="inline"
                    />
                    {item?.advantages[1]}
                  </p>
                  <p>
                    <FaCheck
                      fontSize={"1.5rem"}
                      color="green"
                      className="inline"
                    />
                    {item?.advantages[2]}
                  </p>
                  <p>
                    <FaCheck
                      fontSize={"1.5rem"}
                      color="green"
                      className="inline"
                    />
                    {item?.advantages[3]}
                  </p>
                </div>
                <div className="text-center">
                  <button className="border bg-[#02c39a] text-white rounded-lg border-[#02c39a] w-[175px] px-2 py-2">
                    Become Our Member
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Membership;