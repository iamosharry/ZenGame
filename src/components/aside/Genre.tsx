import useGenres from "../../hooks/useGenres";
import useSelectedGenre from "../../hooks/useSelectedGenre";

const Genre = () => {
  const { data, error } = useGenres();

  const add = useSelectedGenre((s) => s.add);
  if (error) {
    return <p>{error.message}</p>;
  }
  return (
    <>
      <ul>
        {data?.map((gen) => (
          <li className="flex items-center gap-x-4 mb-3" key={gen.id}>
            <div className="w-[60px] h-[50px]">
              <img
                className=" w-full h-full  object-cover rounded-lg"
                src={gen.image_background}
                alt=""
              />
            </div>
            <button onClick={() => add(gen)} className="font-medium">
              {gen.name}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Genre;
