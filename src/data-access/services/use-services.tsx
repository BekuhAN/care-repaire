import { useEffect, useState } from "react";
import { api } from "../api";
import { Services } from "../../interfaces/services";

export const useServices = () => {
  const [services, setServices] = useState<Array<Services>>([]);
  useEffect(() => {
    const get = async () => {
      const items = await api<Services>({ path: "services" });
      setServices(items);
    };
    get();
  }, []);
  return services;
};
