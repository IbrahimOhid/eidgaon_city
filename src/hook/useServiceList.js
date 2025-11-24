import { useEffect, useState } from "react";

export const useServiceList = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState({ state: false, message: "" });
  const [error, setError] = useState(null);

  const fetchServicesData = async () => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Finding Service List...",
      });
      const response = await fetch("/public/data/serviceData.json");
      if (!response.ok) {
        const errorMessage = `Fetching Service List : ${response.status}`;
        throw new Error(errorMessage);
      }
      const data = await response.json();
      setServices(data);
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
  useEffect(() => {
    fetchServicesData();
  }, []);
  return {
    services,
    loading,
    error,
  };
};
