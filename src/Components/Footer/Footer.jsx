import { FaTwitter, FaYoutube } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="p-10 bg-neutral text-neutral-content">
        <div className="flex justify-center items-center">
          <div className="flex items-center mx-auto">
            <img
              className="w-16 "
              src="https://i.ibb.co/LrS88wv/home-icon-house-symbol-simple-vector-design-logo-231786-5048-removebg-preview-1.png"
              alt=""
            />
            <p className="font-font1 text-xl font-semibold">
              Hostel<span className="text-[#02c39a]">Heaven</span>
            </p>
          </div>
        </div>
        <p className="text-center">Connect Us with this social links</p>
        <div className="flex justify-center items-center gap-4">
          <FaSquareFacebook />
          <FaTwitter />
          <FaYoutube />
        </div>
        <div className="text-center">
          <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </div>
      </div>
      <div className="p-4 footer-center bg-base-300 text-base-content"></div>
    </footer>
  );
};

export default Footer;
