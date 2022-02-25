import styled from "styled-components";

export const ContainerHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 2.5rem 4.375rem;

  div + div {
    display: flex;
    align-items: center;

    cursor: pointer;

    svg {
      font-size: 1.8rem;
      margin-right: 0.7rem;
      color: ${({ theme }) => theme.textMain};
    }

    transition: all 1s;

    &:hover {
      transform: translateY(-10px);
    }
  }

  @media (max-width: 725px) {
    margin: 2.5rem 1.5rem;

    div + div {
      svg {
        font-size: 1.2rem;
        margin-right: 0;
      }
    }

    &:first-child {
      div {
        svg {
          width: 4rem;
        }
      }
    }
  }
`;
