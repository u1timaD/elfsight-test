import styled from "styled-components";
import { CardImgWrapper } from "../CardImgWrapper";

const PopupWrapper = styled.div`
  position: relative;

  & h3 {
    margin-bottom: 30px;
  }
`;

const PopupCrossBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

const PopupBlockWrapper = styled.div`
  display: flex;
`;

const PopupList = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-inline: auto;
  gap: 30px;

  & li span {
    opacity: 0.5;
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
          <li>
            <h4>Gender</h4>
            <span>{gender}</span>
          </li>
          <li>
            <h4>Species</h4>
            <span>{species}</span>
          </li>
          <li>
            <h4>Type</h4>
            <span>{type || "Ordinary"}</span>
          </li>
        </PopupList>
      </PopupBlockWrapper>
      <PopupCrossBtn onClick={() => popupClose()}>X</PopupCrossBtn>
    </PopupWrapper>
  );
};
