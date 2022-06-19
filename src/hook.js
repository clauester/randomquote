import { useState, useEffect } from "react";

const useCustom = () => {
  const [frases, setFrases] = useState([]);
  const [frase, setFrase] = useState("");
  const [author, setAuthor] = useState("");
  const [frasesAuthor, setFrasesAuthor] = useState([]);

  const aleatorio = () => {
    const number = Math.floor(Math.random() * 20);
    setFrase(frases[number]?.content);
    setAuthor(frases[number]?.author);
    setFrasesAuthor([]);
  };
  const authorFilter = async () => {
    const filtrado = frases?.filter((data) => data.author === author);
    const datoAuthor = filtrado[0].authorSlug;
    await fetch(`https://quotable.io/quotes?author=${datoAuthor}`)
      .then((response) => response.json())
      .then((respuesta) => setFrasesAuthor(respuesta.results));
  };

  const api = () => {
    fetch("https://quotable.io/quotes")
      .then((response) => response.json())
      .then((respuesta) => {
        setFrases(respuesta.results);
      });
  };

  useEffect(() => {
    api();
  }, []);

  useEffect(() => {
    aleatorio();
  }, [frases]);

  return {
    frase,
    author,
    aleatorio,
    authorFilter,
    frasesAuthor
  };
};

export default useCustom;