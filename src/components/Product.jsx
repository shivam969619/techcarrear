import React from "react";
import delete1 from "../../public/deleteimg.png";
import edit from "../../public/edit.png";
import applicants from "../../public/applicants.png";
import matches from "../../public/matches.png";
import message from "../../public/message.png";
import views from "../../public/views.png";
import Small from "./Small";
function Product() {
  return (
    <>
      <div className="flex">
        <div className="w-[70%] ml-28 border-2 border-gray-400 h-auto ">
          <Small />
        </div>
        <div className="">
          <div className="">
            <div className="mt-6 flex">
              <div className="h-12 w-40 flex border-2 justify-center items-center rounded-md border-customRed1 bg-customRed2 ml-3 ">
                <img src={delete1} alt="" className="h-6 w-10 mr-1" />
                <div>Delete Jobs</div>
              </div>
              <div className="h-12 w-40 flex border-2 justify-center items-center rounded-md border-customRed1 bg-customRed ml-2">
                <img src={edit} alt="" className="h-4 w-8 mr-3" />
                <div className="text-white">Edit Jobs</div>
              </div>
            </div>
          </div>
          <div className="flex mt-8  justify-evenly">
            <div className="flex mt-2  justify-between items-center">
              <div>
                <img src={applicants} alt="" className="h-4 w-6 mr-2" />
              </div>
              <div>Applicants</div>
            </div>
            <div className="mt-2 ml-2">400</div>
          </div>
          <hr className="border-t border-gray-400 mt-8" />
          <div className="flex mt-8  justify-evenly">
            <div className="flex mt-2  justify-between items-center">
              <div>
                <img src={matches} alt="" className="h-4 w-6 mr-2" />
              </div>
              <div>Matches</div>
            </div>
            <div className="mt-2 ml-2">100</div>
          </div>
          <hr className="border-t border-gray-400 mt-8" />
          <div className="flex mt-8  justify-evenly">
            <div className="flex mt-2  justify-between items-center">
              <div>
                <img src={message} alt="" className="h-4 w-6 mr-2" />
              </div>
              <div>Messages</div>
            </div>
            <div className="mt-2 ml-2">147</div>
          </div>
          <hr className="border-t border-gray-400 mt-8" />
          <div className="flex mt-8  justify-evenly">
            <div className="flex mt-2  justify-between items-center">
              <div>
                <img src={views} alt="" className="h-4 w-6 mr-2" />
              </div>
              <div>Views</div>
            </div>
            <div className="mt-2 ml-2">800</div>
          </div>
          <hr className="border-t border-gray-400 mt-8" />
        </div>
      </div>
    </>
  );
}

export default Product;
