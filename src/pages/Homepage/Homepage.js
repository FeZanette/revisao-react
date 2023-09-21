import { useState } from "react";
import Card from "../../components/Card/Card";
import { Header } from "../../components/Header/Header";
import { HomepageContainer } from "./styles";

export function Homepage(props) {
  const { characters } = props;
  // console.log("Chegou na tela home", results);
  const { image, name, species, query, orderParam } = props.states;
  const {
    handleInputImage,
    handleInputName,
    handleInputSpecies,
    handleInputQuery,
    handleInputOrderParam,
  } = props.handlers;
  const { addCharacter } = props;
  const { removeCharacter } = props;
  const { changePage } = props;

  const renderList = characters
    .filter((char) => query === "" || char.name.toLowerCase().includes(query))
    .sort((a, b) =>
      orderParam === "" || (orderParam === "asc" && a.name > b.name) ? 1 : -1
    )
    .sort((a, b) =>
      orderParam === "" || (orderParam === "desc" && a.name > b.name) ? -1 : 1
    )
    .map((char) => {
      return (
        <Card
          key={char.id}
          id={char.id}
          img={char.image}
          name={char.name}
          species={char.species}
          removeCharacter={removeCharacter}
          changePage={changePage}
        />
      );
    });

  return (
    <>
      <Header />
      <HomepageContainer>
        <aside>
          <form>
            <h2>Criar Personagem</h2>
            <label htmlFor="image">Imagem:</label>
            <input
              type="text"
              id="image"
              onChange={handleInputImage}
              value={image}
            />

            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              onChange={handleInputName}
              value={name}
            />

            <label htmlFor="species">Espécie:</label>
            <input
              type="text"
              id="species"
              onChange={handleInputSpecies}
              value={species}
            />

            <button onClick={addCharacter}>Criar</button>

            <h2>Busca</h2>
            <input type="text" value={query} onChange={handleInputQuery} />

            <h2>Ordenar</h2>
            <select
              name=""
              id=""
              value={orderParam}
              onChange={handleInputOrderParam}
            >
              <option value="asc">Crescente</option>
              <option value="desc">Decrescente</option>
            </select>
          </form>
        </aside>
        <main>{renderList}</main>
      </HomepageContainer>
    </>
  );
}
