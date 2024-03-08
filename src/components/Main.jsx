import { Sort } from "./Sort";
import { Filter } from "./Filter";
import axios from "axios";
import { PersonCard } from "./PersonCard";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPersons, findFilters } from "../redux/filterSlice";
import { fetchPersons } from "../redux/personSlice";

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
  const dispatch = useDispatch();
  const person = useSelector((state) => state.filter.persons);
  const perData = useSelector((state) => state.person.persons);
  const statusFetch = useSelector((state) => state.person.statusFetch);

  useEffect(() => {
    (async () => {
      dispatch(fetchPersons());
    })();
    
  }, []);

  useEffect(() => {
    if(statusFetch === 'success') {
      dispatch(setPersons(...perData));
      dispatch(findFilters());
    }
  },[statusFetch])
  

  return (
    <main>
      <ManipulateSection>
        <Sort />
        {/* <Filter /> */}
        <Filter />
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
