import React from "react";
import { useLocation } from "react-router-dom";

const ProfileInfo = () => {
  const { state } = useLocation();

  const { name, image, address, phone, open, map } = state;

  return (
    <div className="relative flex justify-center items-center pt-20">
      <div className="bg-white rounded-xl shadow-2xl max-w-5xl w-full p-8 transition-all duration-300 animate-fade-in">
        <div className="flex flex-col md:flex-row">
          {/* LEFT: Image + Basic Info */}
          <div className="md:w-1/3 text-center mb-8 md:mb-0">
            <img
              src={image}
              alt={name}
              className="rounded-full w-48 h-48 object-cover mx-auto mb-4 border-2 border-teal-800  hover:scale-105 duration-300"
            />
            <h1 className="text-2xl font-bold  mb-2">
              {name}
            </h1>

            <p className=" mb-2">🏠 {address}</p>
            <p className=" mb-2">📞 {phone}</p>
            
            <p className=" mb-2 -ml-12">🕒 {open}</p>
            <p className=" mb-2">🌐 {phone}</p>

            <button className="mt-4 bg-indigo-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300">
              যোগাযোগ করুন
            </button>
          </div>

          {/* RIGHT: Hospital Details */}
          <div className="md:w-2/3 md:pl-8">
          {/* Doctors List */}
            <h2 className="text-xl font-semibold  mb-4">
              👨‍⚕️ ডাক্তার তালিকা
            </h2>

            <div className="container grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
              {doctors.map((doc) => (
                <div
                  key={doc.id}
                  className="p-3  mt-16 rounded-lg shadow"
                >
                  <img
                    alt={name}
                    className="w-20 h-20 rounded-full -mt-16 mb-8 mx-auto shadow"
                    src={image}
                  />
                  <h3 className="text-md font-bold ">
                    {doc.name}
                  </h3>
                  <p className="text-sm">
                    {doc.degree}
                  </p>
                  <p className="">
                    Specialist: {doc.specialty}
                  </p>
                  <p className="">
                    Visiting Hour: {doc.visitingHour}
                  </p>
                </div>
              ))}
            </div>
            {/* Google Map */}
            <h2 className="text-xl font-semibold  mb-4">
              📍 লোকেশন ম্যাপ
            </h2>

            <iframe
              src={map}
              className="w-full h-64 rounded-xl mb-8 shadow"
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
