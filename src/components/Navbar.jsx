import React from "react";
import jobs from "../../public/jobs.png";
import message from "../../public/message.png";
import payment from "../../public/payment.png";
import notification from "../../public/notification.png";
import attlisian from "../../public/attlasian.png";
import icon from "../../public/icons.png";

function Navbar() {
  return (
    <>
      <div className="h-20 w-full flex flex-col md:flex-row justify-between items-center">
        <div className="mt-4 ml-4 h-10 w-20 bg-customGray flex justify-center items-center font-bold text-customRed">
          Logo
        </div>
        <div className="mt-4 ml-4 md:ml-0 h-14 w-full md:w-[40%] rounded-full border-[1px] border-gray-400 flex justify-between items-center px-2">
          <div className="mt-1 ml-2 h-10 w-24 bg-customRed flex justify-center items-center rounded-3xl">
            <img src={jobs} alt="" className="h-4 w-8 mr-1" />
            <div className="text-white">Jobs</div>
          </div>
          <div className="flex mt-1 ml-2 mr-2 h-8 w-24 justify-center items-center">
            <img src={message} alt="" className="h-4 w-8 mr-1" />
            <div className="text-customblack">Messages</div>
          </div>
          <div className="flex mt-1 ml-2 mr-2 h-8 w-24 justify-center items-center">
            <img src={payment} alt="" className="h-4 w-8 mr-1" />
            <div className="text-customblack">Payments</div>
          </div>
        </div>
        <div className="mt-4 ml-4 md:ml-0 h-14 flex justify-between items-center">
          <img src={notification} alt="" className="h-6 w-10 mr-2" />
          <img src={attlisian} alt="" className="h-6 w-10 mr-2" />
          <img src={icon} alt="" className="h-3 w-4 mr-2" />
        </div>
      </div>
      <hr className="border-t border-gray-400 mt-2" />
    </>
  );
}

export default Navbar;
