import styled from "styled-components";

export const HomepageContainer = styled.div`
  display: flex;
  width: 100%;

  main {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    padding: 1rem;
  }

  aside {
    min-width: 15%;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 40%;
    margin: auto;

    margin: 20px 0px 0px 20px;
    
    button {
      margin-top: 5px;
      padding: 5px;
    }
  }
`;
