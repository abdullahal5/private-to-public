import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://newa12.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
