import ShimmerBorderCard from "./ShimmerBorderCard";
import LoadingSkeleton from "./LoadingSkeleton";
import useGames from "../../hooks/useGames";
import useSelectedGenre from "../../hooks/useSelectedGenre";
import useSelectedPlatform from "../../hooks/useSelectedPlatform";
import useRelevance from "../../hooks/useRelevance";

const GameGrid = () => {
  const genraStore = useSelectedGenre((s) => s.genraStore);
  const platformStore = useSelectedPlatform((s) => s.platformStore);
  const relevanceStore = useRelevance((s) => s.relevanceStore);
  const { data, error, isLoading } = useGames(
    genraStore,
    platformStore,
    relevanceStore
  );

  // Determine the number of skeleton cards to display while loading
  if (error) {
    return <p>{error.message}</p>;
  }
  const skeletonCards = new Array(12).fill(0);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4 lg:px-5">
      {isLoading
        ? skeletonCards.map((_, index) => <LoadingSkeleton key={index} />)
        : data?.map((items) => (
            <ShimmerBorderCard
              key={items.id}
              name={items.name}
              images={items.background_image}
              items={items.parent_platforms}
              metacritic={items.metacritic}
            />
          ))}
    </div>
  );
};

export default GameGrid;
