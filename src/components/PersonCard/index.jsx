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
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
`

export const PersonCard = ({...data}) => {
	const {id, name, gender, status, species, image} = {...data}
  return (
    <PersonItem>
      <CardWrapper>
        <div className="card__img-wrapper">
          <img className="card__img" src={image} width={300} height={300} />
          {/* <span>Alive</span> */}
        </div>
        <InfoWrapper>
          <span>{name}</span>
          <span>{gender}</span>
          <CardBtn>Details</CardBtn>
        </InfoWrapper>
      </CardWrapper>
    </PersonItem>
  );
};
