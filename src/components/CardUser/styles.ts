import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 15.625rem;
  height: 19.375rem;

  padding: 2.25rem;

  border: solid 1px;
  border-color: ${({ theme }) => theme.textMain};
  border-radius: 8px;

  background: rgba(203, 213, 224, 0.35);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);

  transition: all 0.7s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    color: ${({ theme }) => theme.textSocial};
  }
`;

export const AvatarContainer = styled.div`
  img {
    background-size: cover;

    background-position: top center;
    border-radius: 50%;
    width: 6rem;

    margin-bottom: 4px;
  }
`;

export const BadgeContainer = styled.div`
  padding: 4px 8px;
  margin: 0.93rem 0 1.81rem 0;

  border-radius: 8px;

  color: white;
  background-color: ${({ theme }) => theme.backgroundBadge};
`;
export const NumberContainer = styled.div`
  padding: 4px 8px;
  border-radius: 8px;
  background-color: #c4c4c4;

  color: ${({ theme }) => theme.textNumber};
`;
