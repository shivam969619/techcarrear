import React from "react";
import open from "../../public/open.png";
import location from "../../public/location.png";
import money from "../../public/money.png";
import figma from "../../public/figma.png";
import adobeil from "../../public/adobeillus.png";
import adobexd from "../../public/adobexd.png";
import attlasian from "../../public/attlasian.png";
function Small() {
  return (
    <>
      <div>
        <div className="mt-6 ml-20 flex">
          <h1 className="font-bold text-4xl text-customblack1">
            Senior Product Designer
          </h1>
          <h6 className="mt-2 ml-3 text-customblack">Posted 2 days ago</h6>
          <img src={open} alt="" className="h-6 w-12 mt-2 ml-3" />
        </div>
        <div className="mt-6 ml-20 flex">
          <div className="flex">
            <img src={location} alt="" className="h-6 w-8  ml-3 mr-2" />
            <div>Delware,USA</div>
          </div>
          <div className="flex ml-6 ">
            <img src={money} alt="" className="h-6 w-8  ml-3 mr-2" />
            <div>$300K-$400K</div>
          </div>
        </div>
      </div>
      <hr className="border-[1px] border-gray-400 mt-8" />
      <div className="mt-6 ml-20 w-[80%] flex justify-between">
        <div className="text-customGray1">
          Skills Required
          <div className="ml-2 mt-2 h-8 w-24 rounded-md border-[1px] border-gray-400 flex justify-center items-center">
            <img src={figma} alt="" className="h-6 w-6 " />
            <div className="ml-2">Figma</div>
          </div>
          <div className="ml-2 mt-2 h-10 w-40 rounded-md border-[1px] border-gray-400 flex justify-center items-center">
            <img src={adobeil} alt="" className="h-6 w-6  " />
            <div className="ml-2">Adobe Illustrator</div>
          </div>
          <div className="ml-2 mt-2 h-10 w-30 rounded-md border-[1px] border-gray-400 flex justify-center items-center">
            <img src={adobexd} alt="" className="h-6 w-6 " />
            <div className="ml-2">Adobe XD</div>
          </div>
        </div>
        <div className="text-customGray1">
          Prefered Language
          <div className="mt-2 ml-2 text-customblack1 font-bold">English</div>
        </div>
        <div className="text-customGray1">
          Type
          <div className="mt-2 ml-2 text-customblack1 font-bold">Full Time</div>
        </div>
        <div className="text-customGray1">
          Years of Experience
          <div className="mt-2 ml-2 text-customblack1 font-bold">
            3+ Years of Experience
          </div>
        </div>
      </div>
      <hr className="border-t border-gray-400 mt-8" />
      <div className="mt-6 ml-20 text-customGray1">
        About the Job
        <div className="mt-3 text-customblack1 font-semibold">
          <nav>
            <ol>
              <li>1.Handle the UI/UX reasearch design</li>
              <li>
                2.Work on researching on latest web application designs & trends
              </li>
              <li>3.Work on Conceptualizing and Visualizing</li>
              <li>
                4.Work on creating graphics content and other graphic related
                works
              </li>
            </ol>
          </nav>
          <nav>
            Benefits:
            <ul className="ml-2 list-disc">
              <li> Health Insurance</li>
              <li>Provident Fund</li>
            </ul>
          </nav>
          <nav>
            Schedule:
            <ul className="ml-2 list-disc">
              <li> Day Shift</li>
            </ul>
          </nav>
          <nav>
            Supplement Pay Types:
            <ul className="ml-2">
              <li> Performance bonus </li>
              <li>Yearly bonus</li>
            </ul>
          </nav>
          <div>Work Location :In Person</div>
        </div>
      </div>
      <hr className="border-t border-gray-400 mt-8" />
      <div className="mt-6 ml-20">
        <div className="flex">
          <img src={attlasian} alt="" className="h-6 w-8 mr-2" />
          <div>Atlassian</div>
        </div>
        <div className="flex ">
          <div className="mt-5">
            <div className="text-customGray1">Company size</div>
            <div className="mt-2">1K-2K Employes</div>
          </div>
          <div className="ml-60">
            <div className="mt-5 text-customGray1">Type</div>
            <div className="mt-2">Private</div>
          </div>
        </div>
        <div className="flex">
          <div className="mt-5">
            <div className="text-customGray1"> Secotor</div>
            <div className="mt-2 font-semibold">
              Information Technology,Infrastructure
            </div>
          </div>
          <div className="ml-20">
            <div className="mt-5 text-customGray1">Funding</div>
            <div className="mt-2 font-semibold">Bootstrapped</div>
          </div>
        </div>
        <div className="flex">
          <div className="mt-5">
            <div className="text-customGray1">Founded In</div>
            <div className="mt-2 font-semibold">2019</div>
          </div>
          <div className="ml-[275px]">
            <div className="mt-5 text-customGray1">Founded By</div>
            <div className="mt-2 font-semibold">
              Scott Farquhar,Mike Canon-Brookes
            </div>
          </div>
        </div>
      </div>
      <hr className="border-t border-gray-400 mt-8" />
    </>
  );
}

export default Small;
