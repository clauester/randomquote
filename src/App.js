import "./App.css";
import useCustom from "./hook";
import { BsArrowRight } from "react-icons/bs";
import { FiRefreshCw } from "react-icons/fi";

function App() {
  const { frase, author, aleatorio, authorFilter, frasesAuthor } = useCustom();

  return (
    <div className="App">
      <div className="barra">
        <button className="button" onClick={aleatorio}>
          random
        </button>
        <FiRefreshCw style={{ margin: "0px", alignSelf: "center" }} />
      </div>
      {frasesAuthor?.length > 0 && (
        <div style={{ marginTop: "10vh", fontWeight: "bold", fontSize: "5vh" }}>
          {author}
        </div>
      )}
      {frasesAuthor?.length > 0 ? (
        frasesAuthor.map((value, index) => (
          <div className="texto11" key={index}>
            <div className="texto22">
              <div className="divFrase">"{value.content}"</div>
            </div>
          </div>
        ))
      ) : frase ? (
        <div className="texto">
          <div className="texto2">
            <div className="divFrase">"{frase}"</div>

            <div className="divAuthor" onClick={authorFilter}>
              <div>
                <p> {author}</p>
              </div>
              <div>
                <BsArrowRight style={{ color: "#ffefd5", fontSize: "6vh" }} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading... </p>
      )}
      {}
    </div>
  );
}

export default App;
