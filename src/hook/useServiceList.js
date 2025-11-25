import { useEffect, useState } from "react";
import { serviceData } from "../../public/data/serviceData";

export const useServiceList = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState({ state: false, message: "" });
  const [error, setError] = useState(null);

  const fetchServicesData = async () => {
    try {
      setLoading({
        state: true,
        message: "Loading Service List...",
      });

      setServices(serviceData);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading({
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