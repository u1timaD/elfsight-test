import styled from "styled-components";

const CardImgWrapperStyled = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin-bottom: 25px;

  @media (max-width: 870px) {
    width: 139px;
    height: 134px;
    grid-row: 1/3;
    grid-column: 1/2;
    margin-bottom: 0px;
  }

  & img {
    border-radius: 10px;
    width: 100%;
    height: 100%;
  }
`;

const StatusStyled = styled.span`
  position: absolute;
  display: grid;
  width: 100px;
  height: 30px;
  place-items: center;
  bottom: calc(30px - 13%);
  right: calc(100px - 38%);
  background-color: ${(props) => props.status};
  border-radius: 30px;
  font-size: 18px;
  line-height: 21px;

  @media (max-width: 870px) {
    width: 64px;
    height: 15px;
    bottom: calc(30px - 27%);
    right: calc(100px - 48%);
    font-size: 11px;
    line-height: 10px;
  }
`;

export const CardImgWrapper = ({ image, status }) => {
  const statusColor = {
    Alive: "#0E5603",
    Dead: "#D80101",
    unknown: "#525252",
  };

  return (
    <>
      <CardImgWrapperStyled>
        <img src={image} width={300} height={300} />
        <StatusStyled status={statusColor[status]}>{status}</StatusStyled>
      </CardImgWrapperStyled>
    </>
  );
};
