import React, { useContext } from "react";
import ServiceIcon from "../../../public/icons/service.png";
import { Link } from "react-router-dom";
import { useServiceList } from "../../hook/useServiceList";
import LineSvg from "../../utils/LineSvg";
const ServiceList = () => {
  const { services } = useServiceList();

  return (
    <div>
      <section className="relative  mt-16">
        <div className="pt-5 ">
          <div className=" flex justify-center gap-x-2 items-center text-xl md:text-xl font-bold  mb-2">
            {" "}
            <span>
              <img className="w-12" src={ServiceIcon} alt={ServiceIcon} />
            </span>{" "}
            <span className="relative whitespace-nowrap ">
              <LineSvg value={'প্রয়োজনীয় পরিষেবা'}/>
              
            </span>
          </div>
        </div>
        {/* card section */}
        <div className="lg:w-fit md:w-fit w-fit mx-auto grid grid-cols-4 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-4 justify-items-center justify-center sm:gap-x-5 sm:gap-y-5 lg:gap-y-10 lg:gap-x-10 md:gap-y-10 md:gap-x-10 gap-x-10 gap-y-4 mt-8 mb-5 px-10">
          {services &&
            services.length > 0 &&
            services.map((service) => {
              const { id, icon, name } = service;
              return (
                <div
                  key={id}
                  className="lg:w-44 md:w-44 sm:w-32 xs:w-28 w-20 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl p-3"
                >
                  <Link to={`/${name}`} className="text-center">
                    <img
                      src={icon}
                      alt={name}
                      className="lg:h-20 md:h-24 sm:h-28 xs:h-32 h-12 text-center mx-auto"
                    />
                    <div className="px-2 pt-2">
                      <p className="text-[8px] lg:text-sm  md:text-sm sm:text-xl xs:text-2xl font-bold">
                        {name}
                      </p>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      </section>
    </div>
  );
};

export default ServiceList;
