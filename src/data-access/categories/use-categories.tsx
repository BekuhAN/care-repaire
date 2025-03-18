import { useEffect, useState } from "react";
import { api } from "../api";
import { Categories } from "../../interfaces/categories";

export const useCategories = () => {
  const [categories, setCategories] = useState<Array<Categories>>([]);
  useEffect(() => {
    const get = async () => {
      const items = await api<Categories>({
        path: "categories",
        params: { _embed: "services" },
      });
      setCategories(items);
    };
    get();
  }, []);
  return categories;
};
