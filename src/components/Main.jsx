import { Sort } from "./Sort";
import { Filter } from "./Filter";
import axios from "axios";
import { PersonCard } from "./PersonCard";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilterPersons, findFilters } from "../redux/filterSlice";
import { fetchPersons, setIsLoading } from "../redux/personSlice";
import { NotFound } from "./NoFound";
import { ResetBtn } from "./ResetBtn";

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

  const personData = useSelector((state) => state.person.persons);
  const statusFetch = useSelector((state) => state.person.statusFetch);
  const isLoading = useSelector((state) => state.person.isLoading);

  const filterGender = useSelector((state) => state.filter.filterGender);
  const filterStatus = useSelector((state) => state.filter.filterStatus);
  const filterType = useSelector((state) => state.filter.filterType);
  const filterSpecies = useSelector((state) => state.filter.filterSpecies);
  const filterName = useSelector((state) => state.filter.filterName);

  const pagesData = useSelector((state) => state.person.pages);

  
  useEffect(() => {
    (async () => {
      dispatch(
        fetchPersons({ filterGender, filterStatus, filterType, filterSpecies, filterName})
      );
    })();
  }, [filterGender, filterStatus, filterType, filterSpecies, filterName]);

  useEffect(() => {
    if (statusFetch === "success" && !isLoading) {
      dispatch(setFilterPersons(personData));
      dispatch(findFilters());
      dispatch(setIsLoading());
      
    }
  }, [statusFetch]);



  // ? делаем ряд запросов, чтобы загрузить все карточки сразу
  // useEffect(() => {
  //   const getAllCharacters = async () => {
  //     let allCharacters = [];
  //     let page = 1;
  //     let response;

  //     do {
  //       response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
  //       const characters = response.data.results;
  //       allCharacters = [...allCharacters, ...characters];
  //       page++;
  //     } while (response.data.info.next !== null);

  //     return allCharacters;
  //   };

  //   const fetchData = async () => {
  //     try {
  //       const allCharacters = await getAllCharacters();
  //       dispatch(setPersons(allCharacters))
  //       dispatch(findFilters())
  //     } catch (error) {
  //       console.error("Ошибка при получении данных:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <main>
      <ManipulateSection>
        <Sort />
        <Filter />
        <ResetBtn />
      </ManipulateSection>

      <section className="person">
        {statusFetch === "error" ? (
          <NotFound />
        ) : (
          <PersonList>
            {statusFetch === "success" &&
              personData.map((item, i) => <PersonCard key={i} {...item} />)}
          </PersonList>
        )}
      </section>
    </main>
  );
};
