import styled from "styled-components";
import { CardImgWrapper } from "../CardImgWrapper";

const PopupWrapper = styled.div`
  position: relative;
 

  & h3 {
    margin-bottom: 30px;

    @media (max-width: 870px) {
      font-size: 20px;
      margin-bottom: 10px;

    }
  }
`;

const PopupCrossBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  cursor: pointer;
   border-radius: 10px;

  @media (max-width: 870px) {
    width: 30px;
    height: 30px;
    top: -28px;
    right: -17px;
  }
`;

const PopupBlockWrapper = styled.div`
  display: flex;

  @media (max-width: 870px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const PopupList = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-inline: auto;
  gap: 30px;

  @media (max-width: 870px) {
    gap: 5px;
    margin-inline: 0;
  }
`;

const PopupItem = styled.li`
  & span {
    opacity: 0.5;
  }
  @media (max-width: 870px) {
    display: flex;
    flex-direction: column;
    & > h4 {
      font-size: 18px;
    }
    & > span {
      font-size: 16px;
    }
  }
`;

export const Popup = ({ popupClose, popupParams }) => {
  const { name, gender, status, image, type, species } = popupParams;
  console.log(type === "asd");
  return (
    <PopupWrapper>
      <h3>{name}</h3>
      <PopupBlockWrapper>
        <CardImgWrapper status={status} image={image} />
        <PopupList>
          <PopupItem>
            <h4>Gender</h4>
            <span>{gender}</span>
          </PopupItem>
          <PopupItem>
            <h4>Species</h4>
            <span>{species}</span>
          </PopupItem>
          <PopupItem>
            <h4>Type</h4>
            <span>{type || "Ordinary"}</span>
          </PopupItem>
        </PopupList>
      </PopupBlockWrapper>
      <PopupCrossBtn onClick={() => popupClose()}>X</PopupCrossBtn>
    </PopupWrapper>
  );
};
