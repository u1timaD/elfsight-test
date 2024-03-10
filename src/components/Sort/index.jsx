import styled from "styled-components";

const StyledSort = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 21px;
    gap: 10px;
    cursor: pointer;
  }

  & button {
    background-color: transparent;
    border: none;
    color: #ffffff;
    font-size: 24px;
    cursor: pointer;
  }
`;

export const Sort = () => {
  return (
    <StyledSort>
      <h2>Sort by name:</h2>
      <div>
        <div>
          <button className="asc">Az</button>
          <svg
            width="16"
            height="21"
            viewBox="0 0 16 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 21L9 1H7L7 21H9Z"
              fill="#42B4CA"
            />
          </svg>
        </div>
        <div>
          <button className="desc">Za</button>
          <svg
            width="16"
            height="21"
            viewBox="0 0 16 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.29289 20.7071C7.68342 21.0976 8.31658 21.0976 8.70711 20.7071L15.0711 14.3431C15.4616 13.9526 15.4616 13.3195 15.0711 12.9289C14.6805 12.5384 14.0474 12.5384 13.6569 12.9289L8 18.5858L2.34315 12.9289C1.95262 12.5384 1.31946 12.5384 0.928932 12.9289C0.538408 13.3195 0.538408 13.9526 0.928932 14.3431L7.29289 20.7071ZM7 0L7 20H9L9 0L7 0Z"
              fill="#42B4CA"
            />
          </svg>
        </div>
      </div>
    </StyledSort>
  );
};
