import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/noticias")
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        console.log(data.data);
      });
  }, []);

  return (
    <div>
      {data.map((d, i) => {
        return (
          <div>
            <p>{d.titulo}</p>
            <p>{d.cuerpo}</p>
            <p>{d.autor}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
