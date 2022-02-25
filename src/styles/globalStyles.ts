import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle` 

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background: ${({ theme }) => theme.background};
  font-family: 'Montserrat', sans-serif;
}

h1{
  font-size: 1.2rem;

  color: ${({ theme }) => theme.secondary};
}

h2{
  font-size: 1rem;
}

h3{
  font-size: 0.875rem;
}

h4{
  font-size: 0.75rem;
}

input {
  border: none;
  outline: none;

  font-size: 1rem;
  font-weight: 600;
}

input::placeholder {
  color: #706E7A;

  font-size: 1rem;
  font-weight: 600;
}

button{
  cursor: pointer;
}

.menuModal {
  height: 100vh;
  width:28.3rem;
  padding: 3.5rem 2.5rem;

  background: ${({ theme }) => theme.background};

  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.35);
  border-radius: 8px 0px 0px 8px;

  border: solid 1px;
  border-color: ${({ theme }) => theme.secondary};

  svg{
    width: 20px;
    height: 20px;

    color: ${({ theme }) => theme.secondary};
  }

  h1{
    font-weight: 400;
    margin-left: 1rem;
  }

  section {
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  div{
    display: flex;
    align-items: center;
    cursor: pointer;

    transition: all 1s;

    &:hover{
      transform: scale(1.05);
    }
  }

  div + div {
    margin-top: 6rem ;
  }
}

.closeModal {
  display: flex;
  justify-content: end;

  svg{
    width: 20px;
    height: 20px;

    cursor: pointer;

    color: ${({ theme }) => theme.secondary};

    transition: all 1s;

    &:hover{
      transform: translateX(-20px);
    }
  }
}

.overlayMenu{
  background: rgba(0, 0, 0, 0.6 );

  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  justify-content: flex-end;
}

.overlaySearch{
  background: rgba(0, 0, 0, 0.6 );

  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
}

.searchModal {
  height: 18.75rem;
  width:28.3rem;
  padding: 3.5rem 2.5rem;

  background: ${({ theme }) => theme.background};

  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.35);
  border-radius: 8px;

  border: solid 1px;
  border-color: ${({ theme }) => theme.secondary};

  div + div {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    margin-top: 6rem ;

    border: solid 1px;
    border-color: ${({ theme }) => theme.neutral};

    border-radius: 5px;

    height: 3.75rem;

    button{
      color: ${({ theme }) => theme.primary};
      background-color: ${({ theme }) => theme.neutral};

      border: none;

      border-radius: 0px 5px 5px 0px;

      padding: 1rem 0.875rem;

      font-weight: 600;
      font-size: 1.125rem;

      height: 100%;
    }

    input{
      padding: 1.175rem 0.875rem;
      border-radius: 5px 0px 0px 5px;


      width: 100%;
      height: 100%;
    }


  }
}



`;
