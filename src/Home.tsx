import { useSearchParams } from "react-router-dom";

function Home() {
  const [search, setSearch] = useSearchParams({ q: "" });
  const isTrue = search.get("q") === "true";

  return (
    <>
      <h1> {isTrue ? "Show" : "Hidden"}</h1>
      <button
        onClick={() =>
          setSearch(
            (prev) => {
              prev.set("q", isTrue ? "false" : "true");
              return prev;
            },
            { replace: true }
          )
        }
      >
        Switch
      </button>
    </>
  );
}

export default Home;
