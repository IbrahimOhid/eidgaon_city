import HospitalIcon from "/icons/hospital.png";
import GoogleMaps from "/icons/googleMaps.svg";
import { FcCellPhone } from "react-icons/fc";
import { FcOvertime } from "react-icons/fc";
import HoverButton from "../Button/HoverButton";
import { useHospitalList } from "../../hook/useHospitalList";
import { Link, Outlet } from "react-router-dom";

const Hospital = () => {
  const { hospitals } = useHospitalList();
  return (
    <div className="relative pt-24 font-tiro">
      <div className="flex mx-auto mb-12 justify-center items-center">
        <span>
          <img className="w-12 mr-2" src={HospitalIcon} alt={HospitalIcon} />
        </span>{" "}
        <span className="relative whitespace-nowrap ">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute top-2/3 left-0 h-[0.58em] w-full fill-orange-500"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
          </svg>
          <span className="relative text-xl  mt-2 font-semibold">হাসপাতাল</span>
        </span>
      </div>
      <div className="flex items-center  justify-center">
        <div className="container grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          {hospitals?.length > 0 &&
            hospitals.map((hospital) => {
              const { id, name, image, address, phone, open } = hospital;
              return (
                <div
                  key={id}
                  className="bg-white py-6 px-6 rounded-3xl my-4 shadow-xl hover:shadow-2xl transition duration-300"
                >
                  <img
                    alt={name}
                    className="w-20 h-20 -mt-16 mb-8 mx-auto shadow"
                    src={image}
                  />
                  <div>
                    <p className="text-lg font-medium my-2">{name}</p>

                    <div className="flex space-x-2 text-sm items-center">
                      <img
                        src={GoogleMaps}
                        className="w-4 h-4 mr-2"
                        alt="location"
                      />
                      <p>{address}</p>
                    </div>

                    <div className="flex space-x-2 text-sm my-3 items-center">
                      <span className="mr-2 w-4 h-4">
                        <FcCellPhone />
                      </span>
                      <p>{phone}</p>
                    </div>

                    <div className="flex space-x-2 text-sm my-3 items-center">
                      <span className="mr-2 w-4 h-4">
                        <FcOvertime />
                      </span>
                      <p>{open}</p>
                    </div>

                    <Link to={`/হাসপাতাল/${id}`} state={hospital}>
                      <HoverButton value="প্রোফাইল দেখুন" />
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Hospital;
