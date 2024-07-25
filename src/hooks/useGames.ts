import { useQuery } from "@tanstack/react-query";
import api_client from "../services/api_client";
import { Genres } from "./useGenres";
import { Platformtype } from "./usePlatform";

interface InnerPlatform {
  id: number;
  name: string;
  slug: string;
}

export interface Platform {
  platform: InnerPlatform;
}

export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: Platform[];
  metacritic: number;
}
interface FetchedGames {
  results: Games[];
}

const useGames = (
  genraStore: Genres | undefined,
  platformStore: Platformtype | undefined,
  relevanceStore: string | undefined
) => {
  const handleGames = () =>
    api_client
      .get<FetchedGames>("/games", {
        params: {
          genres: genraStore?.id,
          platforms: platformStore?.id,
          ordering: relevanceStore,
        },
      })
      .then((res) => res.data.results);
  const { data, error, isLoading } = useQuery<Games[], Error>({
    queryKey: ["games", genraStore, platformStore, relevanceStore, "posts"],
    queryFn: handleGames,
  });

  return { data, error, isLoading };
};

export default useGames;
