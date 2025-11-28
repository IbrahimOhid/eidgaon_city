import React from "react";
import { Link, useLocation } from "react-router-dom";
import LineSvg from "../../utils/LineSvg";
import LocationImg from "../../../public/utils_img/location.png";
import CallImg from "../../../public/utils_img/call.png";
import OpenImg from "../../../public/utils_img/time.png";
import DoctorIcon from "../../../public/utils_img/doctor.png";
import WebsiteIcon from "../../../public/utils_img/website.png";

const ProfileInfo = () => {
  const { state } = useLocation();

  const { name, image, address, phone, website, open, map, doctors } = state;

  return (
    <div className="relative flex  justify-center items-center pt-20 px-12">
      <div className=" rounded-xl  p-8 transition-all duration-300 animate-fade-in">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 mt-2 mb-8 md:mb-0">
            <img
              src={image}
              alt={name}
              className="rounded-full w-48 h-48 object-cover  mb-8 border-2 border-indigo-800  hover:scale-105 duration-300"
            />
            <h1 className="text-2xl font-bold  mb-2">{name}</h1>

            <p className=" mb-2 flex gap-2  items-center">
              {" "}
              <span>
                <img className="w-8 h-8" src={LocationImg} alt="" />{" "}
              </span>
              <span className="text-md mt-2">{address}</span>
            </p>
            <p className=" mb-2 flex gap-2  items-center">
              {" "}
              <span>
                <img className="w-8 h-8 " src={CallImg} alt="" />{" "}
              </span>
              <span className="text-md ">{phone}</span>
            </p>

            <p className="mb-2 flex gap-2  items-center">
              {" "}
              <span>
                <img className="w-8 h-8 " src={OpenImg} alt="" />{" "}
              </span>
              <span className="text-md ">{open}</span>
            </p>
            <p className=" flex gap-2   items-center">
              {" "}
              <span>
                <img className="w-8 h-8 " src={WebsiteIcon} alt="" />{" "}
              </span>
              <a
                href={website}
                target="_blank"
                className=" underline text-sm font-semibold"
              >
                {website}
              </a>
            </p>
          </div>

          <div className="md:w-3/4 md:pl-8 ">
            {/* Doctors List */}

            <div className="flex mx-auto mb-12 justify-center items-center">
              <span>
                <img
                  className="w-12 mr-2"
                  src={DoctorIcon}
                  alt="hospital icon"
                />
              </span>{" "}
              <span className="relative whitespace-nowrap ">
                <LineSvg value={"ডাক্তারদের তালিকা"} />
              </span>
            </div>

            <div className="container  grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mb-10 ">
              {doctors.map((doctor) => {
                const {
                  id,
                  d_image,
                  d_name,
                  d_degree,
                  d_work,
                  d_visitingHour,
                } = doctor;
                return (
                  <div
                    key={id}
                    className="p-3 text-center  mt-16 rounded-lg shadow-md hover:shadow-xl bg-white"
                  >
                    <img
                      alt={d_name}
                      className="w-20 h-20 rounded-full -mt-16 mb-8 mx-auto shadow-md"
                      src={d_image}
                    />
                    <h3 className="text-md font-bold ">{d_name}</h3>
                    <p className="text-sm">{d_degree}</p>
                    <p className="">{d_work}</p>
                    <p className="text-blue-800">সময়ঃ {d_visitingHour}</p>
                  </div>
                );
              })}
            </div>
            {/* Google Map */}
            <div className=" flex items-center text-xl font-semibold  mb-4">
              <span>
                <img className="w-12 mr-2" src={LocationImg} alt="" />
              </span>{" "}
              <span className="mt-2">লোকেশন ম্যাপ</span>
            </div>

            <iframe
              src={map}
              className="w-full h-68 rounded-xl mb-8 shadow"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
