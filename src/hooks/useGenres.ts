import { useQuery } from "@tanstack/react-query";
import api_client from "../services/api_client";

export interface Genres {
  id: number;
  name: string;
  image_background: string;
}
interface FetchedGenres {
  results: Genres[] | undefined;
}

const useGenres = () => {
  const handleGenre = () =>
    api_client.get<FetchedGenres>("/genres").then((res) => res.data.results);
  const { data, error, isLoading } = useQuery<Genres[] | undefined, Error>({
    queryKey: ["genre"],
    queryFn: handleGenre,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });

  return { data, error, isLoading };
};

export default useGenres;
