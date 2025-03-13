import { useEffect, useState } from "react";
import { api } from "../api";
import { Team } from "../../interfaces/team";

export const useTeam = () => {
  const [team, setTeam] = useState<Array<Team>>([]);
  useEffect(() => {
    const get = async () => {
      const items = await api<Team>({ path: "team" });
      setTeam(items);
    };
    get();
  }, []);
  return team;
};
