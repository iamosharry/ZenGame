import { useQuery } from "@tanstack/react-query";
import api_client from "../services/api_client";

export interface Platformtype {
  id: number;
  name: string;
}

interface FetchedPlatform {
  results: Platformtype[];
}

const usePlatform = () => {
  const handlePlatform = () =>
    api_client
      .get<FetchedPlatform>("/platforms/lists/parents")
      .then((res) => res.data.results);
  const { data, error } = useQuery<Platformtype[], Error>({
    queryKey: ["plaform"],
    queryFn: handlePlatform,
    staleTime: 24 * 60 * 1000, //24h
  });
  return { data, error };
};
export default usePlatform;
