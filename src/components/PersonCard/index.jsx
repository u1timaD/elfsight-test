import styled from "styled-components";
import { CardImgWrapper } from "../CardImgWrapper";

const PersonItem = styled.li`
  display: flex;
  width: 385px;
  /* height: 575px; */
  border: 1px solid rgba(66, 180, 202, 0.5);
  border-radius: 20px;
  padding-top: 48px;
  padding-inline: 42px;
  padding-bottom: 30px;
  background-color: #0c0c0c;

  @media (max-width: 870px) {
    width: 342px;
    min-height: 174px;
    justify-content: center;
    padding: 0;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 870px) {
    flex-direction: row;
    gap: 15px;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 199px;

  @media (max-width: 870px) {
  justify-content: start;
  max-height: 130px;
  width: 150px;
  }
`;

const CardBtn = styled.button`
  padding: 20px;
  border-radius: 5px;
  width: 180px;
  height: 68px;
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;

  @media (max-width: 870px) {
    font-size: 15px;
    padding: 13px;
    width: 111px;
    height: 42px;
    margin-top: auto;
  }
`;

const Name = styled.span`
  font-size: 29px;

  @media (max-width: 870px) {
    font-size: 18px;
  }
`;

const Gender = styled.span`
  font-size: 28px;
  margin-bottom: auto;
  opacity: 0.5;

  @media (max-width: 870px) {
    font-size: 16px;
    margin-bottom: 0;
  }
`;

export const PersonCard = ({
  id,
  name,
  gender,
  status,
  species,
  image,
  type,
  handleClickDetails,
}) => {
  const cardParams = {
    id,
    name,
    gender,
    status,
    species,
    image,
    type,
  };

  return (
    <PersonItem>
      <CardWrapper>
        <CardImgWrapper status={status} image={image} />
        <InfoWrapper>
          <Name>{name}</Name>
          <Gender>{gender}</Gender>
          <CardBtn onClick={() => handleClickDetails(cardParams)}>
            Details
          </CardBtn>
        </InfoWrapper>
      </CardWrapper>
    </PersonItem>
  );
};
