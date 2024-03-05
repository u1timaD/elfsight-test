import { Sort } from "./Sort";
import { Filter } from "./Filter";
import axios from "axios";
import { PersonCard } from "./PersonCard";
import styled from "styled-components";

import Rick from "../assets/image2.jpg";
import { useEffect, useState } from "react";

const PersonList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const Main = () => {
  const [person, setPerson] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then((resp) => {
      const { data } = resp;
      setPerson(data.results);
    });
  }, []);

  console.log(person);
  return (
    <main>
      <Sort />
      <Filter />

      <section className="person">
        <PersonList>
          {person.map((item, i) => (
            <PersonCard key={i} {...item} />
          ))}
        </PersonList>
      </section>
    </main>
  );
};
