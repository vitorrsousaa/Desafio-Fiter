import styled from "styled-components";

export const ContainerDashboard = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-items: center;

  margin: 6.5rem 6.875rem;

  grid-gap: 5rem;

  @media (max-width: 1390px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1050px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 725px) {
    grid-template-columns: 1fr;

    margin: 6.5rem 0.2rem;
  }
`;
