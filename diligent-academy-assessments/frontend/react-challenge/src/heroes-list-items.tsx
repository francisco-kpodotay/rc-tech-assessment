import { callApi } from "./call-api";
import { HeroObj } from "./interface";
import Loading from "./Loading";
import Hero from "./hero";
import "./heroe-list-items.css";
import { useFetchData } from "./useFetchData";

function HeroesListItems() {
  const {
    data: heroes,
    error,
    loading,
  } = useFetchData<HeroObj[]>("heroes", callApi);

  if (error) return <p>Error: {error}</p>;
  if (loading) return <Loading />;

  return (
    <div id="heroe-list-items">
      {heroes && heroes.map((hero) => <Hero key={hero.id} {...hero} />)}
    </div>
  );
}

export default HeroesListItems;
