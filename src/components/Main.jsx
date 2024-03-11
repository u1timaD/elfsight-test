import { Filter } from "./Filter";
import axios from "axios";
import { PersonCard } from "./PersonCard";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilterPersons, findFilters } from "../redux/filterSlice";
import {
  fetchPersons,
  setCurrentPage,
  setIsLoading,
} from "../redux/personSlice";
import { NotFound } from "./NoFound";
import { ResetBtn } from "./ResetBtn";
import { Pagination } from "./Pagination/Pagination";
import { Popup } from "./Popup";

const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PersonSection = styled.section``;

const PersonList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`;

const ManipulateSection = styled.section`
  display: flex;
  flex-direction: column;
  font-size: 24px;

  & > div {
    padding-inline: 30px;
  }

  & h2 {
    color: #42b4ca;
    font-size: 24px;
  }
`;

const PopupStyled = styled.div`
  position: fixed;
  width: 793px;
  height: 575px;
  background-color: #021415;
  border-radius: 20px;
  padding-top: 30px;
  padding-inline: 30px;
  z-index: 5;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(66, 180, 202, 0.5);
`;

const Shadow = styled.div`
  position: absolute;
  background-color: rgb(0, 0, 0, 0.5);
  z-index: 100;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 3;
`;

const CardContainerStyled = styled.div`
  padding-inline: 40px;
`

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


  const filtersList = useSelector((state) => state.filter.filtersList);

  const currentPage = useSelector((state) => state.person.currentPage);

  const pagesData = useSelector((state) => state.person.pages);

  useEffect(() => {
    (async () => {
      dispatch(
        fetchPersons({
          filterGender,
          filterStatus,
          filterType,
          filterSpecies,
          filterName,
          currentPage,
        })
      );
    })();
  }, [
    filterGender,
    filterStatus,
    filterType,
    filterSpecies,
    filterName,
    currentPage,
  ]);

  // useEffect(() => {
  //   if (statusFetch === "success" && !isLoading) {
  //     dispatch(setFilterPersons(personData));
  //     dispatch(findFilters());
  //     dispatch(setIsLoading());
  //   }
  // }, [statusFetch]);

  // ? делаем ряд запросов, чтобы загрузить все карточки сразу
  useEffect(() => {
    const getAllCharacters = async () => {
      let allCharacters = [];
      let page = 1;
      let response;

      do {
        response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
        const characters = response.data.results;
        allCharacters = [...allCharacters, ...characters];
        page++;
      } while (response.data.info.next !== null);

      return allCharacters;
    };

    const fetchData = async () => {
      try {
        const allCharacters = await getAllCharacters();
        dispatch(setFilterPersons(allCharacters));
        dispatch(findFilters());
        // dispatch(setIsLoading())
        console.log(allCharacters)
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchData();
  }, []);

  console.log(filtersList)
  
  const [popup, setPopup] = useState(false);
  const [popupParams, setPopupParams] = useState({});

  const handleClickDetails = (cardParams) => {
    setPopup(true);
    setPopupParams(cardParams);
    document.body.style.overflow = "hidden";
  };

  const popupClose = () => {
    setPopup(false);
    document.body.style.overflow = "auto";
  };

  return (
    <MainStyled>
      {popup && <Shadow></Shadow>}
      <Pagination />
      <ManipulateSection>
        <div>
          <Filter />
          <ResetBtn />
        </div>
      </ManipulateSection>

      <PersonSection>
        <CardContainerStyled>
        {popup && (
          <PopupStyled>
            <Popup popupClose={popupClose} popupParams={popupParams} />
          </PopupStyled>
        )}
        {statusFetch === "error" ? (
          <NotFound />
        ) : (
          <PersonList>
            {statusFetch === "success" &&
              personData.map((item, i) => (
                <PersonCard
                  key={i}
                  {...item}
                  handleClickDetails={handleClickDetails}
                />
              ))}
          </PersonList>
        )}
        </CardContainerStyled>
      </PersonSection>
    </MainStyled>
  );
};
