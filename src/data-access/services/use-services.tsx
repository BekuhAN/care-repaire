import { useEffect, useState } from "react";
import { api } from "../api";
import { Services } from "../../interfaces/services";

interface Props {
  categoryId: number;
}

export const useServices = ({ categoryId }: Props) => {
  const [services, setServices] = useState<Array<Services>>([]);
  useEffect(() => {
    const get = async () => {
      const items = await api<Services>({
        path: "services",
        params: { categoryId },
      });
      setServices(items);
    };
    get();
  }, [categoryId]);
  return services;
};
