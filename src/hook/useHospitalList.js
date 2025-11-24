import { useEffect, useState } from "react";

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
      const response = await fetch("/public/data/hospitalData.json");
      if (!response.ok) {
        const errorMessage = `Fetching Hospital List... ${response.status}`;
        throw new Error(errorMessage);
      }
      const data = await response.json();
      setHospitals(data);
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
