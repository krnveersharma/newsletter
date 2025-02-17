import Link from "next/link";
import React from "react";
import FooterLogo from "../../../modules/home/elements/footer.logo";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white pt-10">
      <div className="w-[95%] md:flex m-auto py-5">
        <div className="w-full md:w-[40%]">
          <Link href={"/"}>
            <FooterLogo />
          </Link>
          <p className="text-2xl">Get updates directly to your inbox.</p>
          <div className="flex items-center w-full pt-1 py-2">
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter your email"
              className="bg-trasparent w-full md:w-[50%] border h-[42px] px-2 rounded rounded-r-0 outline-0"
            />
            <button className="w-[90px] cursor-pointer rounded-r h-[43px] bg-blue-500 text-xl outline-none">
              Submit
            </button>
          </div>
          <br/>
          <p className="text-xs">
            By Subscribing you agree with our Privacy Policy and Provide consent to recieve updates.
          </p>
        </div>
        <div className="w-full md:w-[60%] flex md:justify-end justify-center py-5 md:py-0">
          <div className="md:w-[50%] flex justify-around">
            <div>
              <ul>
                <li className="text-xl pb-4 cursor-pointer">Create</li>
                <li className="text-xl pb-4 cursor-pointer">Write</li>
                <li className="text-xl pb-4 cursor-pointer">Grow</li>
                <li className="text-xl pb-4 cursor-pointer">Monitize</li>
                <li className="text-xl pb-4 cursor-pointer">Analayze</li>
              </ul>
            </div>

            <div>
              <ul>
                <li className="text-xl pb-4 cursor-pointer">Carrers</li>
                <li className="text-xl pb-4 cursor-pointer">Pricing</li>
                <li className="text-xl pb-4 cursor-pointer">Shop</li>
                <li className="text-xl pb-4 cursor-pointer">Compare</li>
                <li className="text-xl pb-4 cursor-pointer">Love</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
