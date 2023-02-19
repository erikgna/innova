import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { Loading } from "../../components/Loading/Loading";
import { Error } from "../../components/Error/Error";
import { Search } from "../../components/Search/Search";
import { IPeople } from "../../interfaces/People";
import { getAllPeoples } from "../../services/api";
import { Person } from "./components/Person";

export const Home = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["peoples"],
    queryFn: () => getAllPeoples(),
  });

  const [search, setSearch] = useState<string>("");

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error text="Não foi possível recuperar os personagens." />;
  }

  const peoples = data?.data.results as IPeople[];
  return (
    <section className="max-w-7xl w-full min-h-screen flex flex-col justify-center self-center pt-8 pb-4">
      <Search value={search} handleChange={setSearch} />

      <div className="flex flex-col">
        {peoples.map((character) => {
          if (
            character.name.toLowerCase().includes(search.toLowerCase()) ||
            search === ""
          ) {
            return <Person character={character} />;
          }
        })}
      </div>
    </section>
  );
};
