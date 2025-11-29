import React from 'react'
import EidgaonMap from "../../../public/utils_img/eidgaon_map.png";

const History = () => {
  return (
    <div className="relative flex  justify-center items-center pt-20 md:px-12">
          <div className="  p-8 transition-all duration-300 animate-fade-in">
            <div className="flex flex-col md:flex-row ">
              <div className="md:w-1/3 mt-2 mb-8 md:mb-0 mx-auto">
                <div className="px-3">
                  <img
                    src={EidgaonMap}
                    alt={name}
                    className="rounded-full w-48 h-48 object-cover mx-auto md:mx-0  mb-8 border-2 border-indigo-800  hover:scale-105 duration-300"
                  />
                  <h1 className="text-xl font-bold  mb-2">{name}</h1>
    
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
                  <p className="flex gap-2 items-center">
                    <span>
                      <img className="w-8 h-8" src={WebsiteIcon} alt="" />
                    </span>
                    <a
                      href={website}
                      target="_blank"
                      className="underline text-sm font-semibold"
                    >
                      {website}
                    </a>
                  </p>
                </div>
    
                <div>
                  <div className="py-24 mx-auto">
                    <div className="flex  mb-5 items-center">
                      <span>
                        <BiSolidRightArrowSquare className="text-teal-600 mr-2 text-2xl" />
                      </span>{" "}
                      <span className="text-xl font-bold">আমাদের সেবা সমূহ</span>
                    </div>
                    <div className="">
                      {sheba.length > 0
                        ? sheba.map((s, i) => (
                            <div className="flex mb-4 items-center">
                              <FaAngleDoubleRight className="text-orange-500" />
                              <span key={i} className="title-font ml-2 font-medium">
                                {s}
                              </span>
                            </div>
                          ))
                        : ""}
                    </div>
                  </div>
                </div>
              </div>
    
              <div className="md:w-3/4 ">
                {/* Doctors List */}
    
                <div className="flex mx-auto mb-5 justify-center items-center">
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
    
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mb-10 ">
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
  )
}

export default History
