import { useEffect, useState } from "react";
import { hospitalData } from "../../public/data/hospitalData";

export const useHospitalList = () => {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState({ state: false, message: "" });
  const [error, setError] = useState(null);

  const fetchHospitalsData = async () => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Finding Hospitals Data..",
      });
    
      setHospitals(hospitalData);
    } catch (err) {
      setError(err);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  };
  useEffect(()=>{
    fetchHospitalsData()
  }, [])
  return{
    hospitals, loading, error
  }
};
