import { GlobalStyle } from "./GlobalStyle";
import Card from "./components/Card/Card";
import { Header } from "./components/Header/Header";
import { DetailsPage } from "./pages/Detailspage/Detailspage";
import { Homepage } from "./pages/Homepage/Homepage";
import { results } from "./data/data";
import { useEffect, useState } from "react";

function App() {
  // console.log(results);

  const [characters, setCharacters] = useState([]);
  // CRIAR ESTADOS PARA ARMAZENAR VALORES DIGITADOS NO INPUT:
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [query, setQuery] = useState("");
  const [orderParam, setOrderParam] = useState("");
  const [page, setPage] = useState("homepage");
  const [id, setId] = useState(0);

  useEffect(() => {
    setCharacters(results);
  }, []);

  // FUNÇÕES PARA ATUALIZAR A MUDANÇA DOS ESTADOS:
  const handleInputImage = (event) => setImage(event.target.value);
  const handleInputName = (event) => setName(event.target.value);
  const handleInputSpecies = (event) => setSpecies(event.target.value);
  const handleInputQuery = (event) => setQuery(event.target.value);
  const handleInputOrderParam = (event) => setOrderParam(event.target.value);

  const changePage = (page, id) => {
    setPage(page);
    setId(id);
  };

  // FUNÇÃO DE ADICIONAR PERSONAGEM À LISTA
  const addCharacter = (event) => {
    event.preventDefault();

    const newCharacter = {
      id: Date.now(),
      name: name,
      species: species,
      origin: { name: "Earth" },
      image: image,
    };

    // O REACT NÃO PERMITE USAR O push PARA ADICIONAR UM OBJETO NO ARRAY
    // results.push(newCharacter);
    // console.log(results);

    // PARA DICIONAR UM NOVO OBJETO, DEVE-SE CRIAR UMA NOVA VARIÁVEL QUE COPIA A LISTA PELO spread operator E O NOVO ESTADO DEVE SER ATUALIDADO:
    const newCharacterList = [...characters, newCharacter];
    setCharacters(newCharacterList);

    // O NOVO NOME DA LISTA É characters E NÃO MAIS results. ISSO DEVE SER ATUALIADO NO COMPONENTE Homepage DENTRO DO JSX

    // LIMPA OS INPUTS APÓS CLICAR NO BOTÃO PARA ADICIONAR NOVO PERSONAGEM:
    setImage("");
    setName("");
    setSpecies("");
  };

  const removeCharacter = (id) => {
    const filteresList = characters.filter((char) => {
      return char.id !== id;
    });
    setCharacters(filteresList);
  };

  const renderPage = () => {
    switch (page) {
      case "homepage":
        return (
          <Homepage
            characters={characters}
            states={{ image, name, species, query, orderParam }}
            handlers={{
              handleInputImage,
              handleInputName,
              handleInputSpecies,
              handleInputQuery,
              handleInputOrderParam,
            }}
            addCharacter={addCharacter}
            removeCharacter={removeCharacter}
            changePage={changePage}
          />
        );

      case "detailspage":
        return (
          <DetailsPage
            characters={characters}
            id={id}
            changePage={changePage}
          />
        );
    }
  };

  return (
    <div className="App">
      <GlobalStyle />
      {renderPage()}

      {/* O BOTÃO PODE SER APAGADO, POIS AS INFORMAÇÕES VIRÃO DE UM input controlado  */}
      {/* <button onClick={addCharacter}>Adicionar</button> */}

      {/* O COMPONENTE CHAMAVA O ANTIGO NOME DA LISTA */}
      {/* <Homepage results={results} />  */}
    </div>
  );
}

export default App;
