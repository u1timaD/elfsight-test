import { Sort } from "./Sort";
import { Filter } from "./Filter";
import axios from "axios";
import { PersonCard } from "./PersonCard";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const PersonList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const ManipulateSection = styled.section`
  display: flex;
  flex-direction: column;
  font-size: 24px;

  & h2 {
    color: #42b4ca;
    font-size: 24px;
  }
`;

export const Main = () => {
  const [person, setPerson] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character?page=20")
      .then((resp) => {
        const { data } = resp;
        setPerson(data.results);
      });
  }, []);

  const findFilters = (data, item) => [...new Set(data.map(i => i[item]))]

  const status = findFilters(person, "status");

  const typePerson = findFilters(person, "type");

  return (
    <main>
      <ManipulateSection>
        <Sort />
        <Filter status={status} typePerson={typePerson}/>
      </ManipulateSection>

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
