import React from "react";
import { useLocation } from "react-router-dom";

const ProfileInfo = () => {
  const { state } = useLocation();

  const { name, image, address, phone, open, map } = state;

  // 🔥 Doctors List (Later আপনি JSON থেকে dynamic করতে পারবেন)
  const doctors = [
    {
      id: 1,
      name: "ডাঃ নুরুল ইসলাম",
      degree: "MBBS, FCPS (Medicine)",
      specialty: "Medicine Specialist",
      visitingHour: "5 PM - 9 PM",
    },
    {
      id: 2,
      name: "ডাঃ শারমিন আক্তার",
      degree: "MBBS, DGO",
      specialty: "Gynecology Specialist",
      visitingHour: "10 AM - 2 PM",
    },
    {
      id: 3,
      name: "ডাঃ ফারহান হোসেন",
      degree: "BDS, MDS",
      specialty: "Dental Surgeon",
      visitingHour: "4 PM - 8 PM",
    },
  ];

  return (
    <div className="relative flex justify-center items-center pt-20">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-5xl w-full p-8 transition-all duration-300 animate-fade-in">
        <div className="flex flex-col md:flex-row">
          {/* LEFT: Image + Basic Info */}
          <div className="md:w-1/3 text-center mb-8 md:mb-0">
            <img
              src={image}
              alt={name}
              className="rounded-full w-48 h-48 object-cover mx-auto mb-4 border-4 border-indigo-800 dark:border-blue-900 hover:scale-105 duration-300"
            />
            <h1 className="text-2xl font-bold text-indigo-800 dark:text-white mb-2">
              {name}
            </h1>

            <p className="text-gray-600 dark:text-gray-300 mb-2">{address}</p>
            <p className="text-gray-600 dark:text-gray-300 mb-2">📞 {phone}</p>
            <p className="text-gray-600 dark:text-gray-300 mb-2">🕒 {open}</p>

            <button className="mt-4 bg-indigo-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300">
              যোগাযোগ করুন
            </button>
          </div>

          {/* RIGHT: Hospital Details */}
          <div className="md:w-2/3 md:pl-8">
            {/* Google Map */}
            <h2 className="text-xl font-semibold text-indigo-800 dark:text-white mb-4">
              📍 লোকেশন ম্যাপ
            </h2>

            <iframe
              src={map}
              className="w-full h-64 rounded-xl mb-8 shadow"
              loading="lazy"
              allowFullScreen
            ></iframe>

            {/* Doctors List */}
            <h2 className="text-xl font-semibold text-indigo-800 dark:text-white mb-4">
              👨‍⚕️ ডাক্তার তালিকা
            </h2>

            <div className="space-y-4">
              {doctors.map((doc) => (
                <div
                  key={doc.id}
                  className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow"
                >
                  <h3 className="text-lg font-bold text-indigo-800 dark:text-white">
                    {doc.name}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {doc.degree}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Specialist: {doc.specialty}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Visiting Hour: {doc.visitingHour}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
