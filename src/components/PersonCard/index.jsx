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
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 138px;
`;

const CardBtn = styled.button`
  padding: 20px 20px;
  border-radius: 5px;
  width: 180px;
  height: 68px;
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
`;

const Name = styled.span`
  /* overflow: hidden; */
  font-size: 29px;
`;

const Gender = styled.span`
  font-size: 28px;
  margin-bottom: auto;
  opacity: 0.5;
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
        </InfoWrapper>
        <CardBtn onClick={() => handleClickDetails(cardParams)}>
          Details
        </CardBtn>
      </CardWrapper>
    </PersonItem>
  );
};
