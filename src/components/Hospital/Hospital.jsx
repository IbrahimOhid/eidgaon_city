import HospitalIcon from "/icons/hospital.png";
import HoverButton from "../Button/HoverButton";
import { useHospitalList } from "../../hook/useHospitalList";
import { Link } from "react-router-dom";
import LineSvg from "../../utils/LineSvg";
import LocationImg from "../../../public/utils_img/location.png";
import CallImg from "../../../public/utils_img/call.png";
import OpenImg from "../../../public/utils_img/time.png";

const Hospital = () => {
  const { hospitals } = useHospitalList();

  return (
    <div className="relative pt-24 font-tiro">
      <div className="flex mx-auto mb-12 justify-center items-center">
        <span>
          <img className="w-12 mr-2" src={HospitalIcon} alt="hospital icon" />
        </span>{" "}
        <span className="relative whitespace-nowrap ">
          <LineSvg value={"হাসপাতাল"} />
        </span>
      </div>
      <div className="flex items-center justify-center">
        <div className="container px-5 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          {hospitals.map((hospital) => {
            const { hospitalId, image, name, phone, address, open } = hospital;

            return (
              <div
                key={hospitalId}
                className="bg-white py-6 px-6 rounded-3xl my-4 shadow-xl hover:shadow-2xl transition duration-300"
              >
                <img
                  alt={name}
                  className="w-20 h-20 -mt-16 mb-8 mx-auto shadow rounded-full object-cover"
                  src={image}
                />
                <div>
                  <p className="text-lg font-bold my-2">{name}</p>

                  <div className="flex space-x-2 text-sm items-center">
                    <span>
                      <img className="w-6 h-6 mr-2 " src={LocationImg} alt="" />{" "}
                    </span>
                    <p>{address}</p>
                  </div>

                  <div className="flex space-x-2 text-sm my-3 items-center">
                    <img className="w-6 h-6 mr-2 " src={CallImg} alt="" />{" "}
                    <p>{phone}</p>
                  </div>

                  <div className="flex space-x-2 text-sm my-3 items-center">
                    <img className="w-6 h-6 mr-2 " src={OpenImg} alt="" />{" "}
                    <p>{open}</p>
                  </div>

                  <Link to={`/হাসপাতাল/${hospitalId}`} state={hospital}>
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
