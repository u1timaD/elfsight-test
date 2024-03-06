import styled from "styled-components";

const PersonItem = styled.li`
  display: flex;
  width: 385px;
  height: 575px;
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
  justify-content: center;
`;

const CardImgWrapper = styled.div`
  position: relative;

  & img {
    border-radius: 10px;
    width: 100%;
    height: 100%;
  }
`;

const Status = styled.span`
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


`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 13px;
`;

const CardBtn = styled.button`
  padding: 20px 20px;
  border-radius: 5px;
  width: 180px;
  height: 68px;
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const PersonCard = ({ id, name, gender, status, species, image }) => {

  const statusColor = {
    Alive: '#0E5603',
    Dead: '#D80101',
    unknown: '#525252'
  }

  return (
    <PersonItem>
      <CardWrapper>
        <CardImgWrapper>
          <img src={image} width={300} height={300} />
          <Status status={statusColor[status]}>{status}</Status>
        </CardImgWrapper>
        <InfoWrapper>
          <span>{name}</span>
          <span>{gender}</span>
          <CardBtn>Details</CardBtn>
        </InfoWrapper>
      </CardWrapper>
    </PersonItem>
  );
};
