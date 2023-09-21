import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    width: 50%;
    height: 80vh;
    text-align: center;
    margin: auto;
    /* background-color: white; */

    img {
        max-width: 300px;
        margin: auto;
    }

    button {
        /* margin-top: 400px; */
        justify-self: flex-end;
    }
`