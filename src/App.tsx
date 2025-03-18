import { useState, useEffect } from "react";
import Container from "./components/Container"
import Button from "./components/Button/GetNewQuote"
import CopyButton from "./components/Button/CopyQuote";
import "./index.css"; 

interface Quote {
  quote: string;
  author: string;
  tags: string[];
}

interface Quote {
  quote: string;
  author: string;
}

export default function App() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/3-javascript/challenges/group_1/data/random-quotes.json"
    )
      .then((response) => response.json())
      .then((data: Quote[]) => {
        setQuotes(data);
        setCurrentQuote(data[Math.floor(Math.random() * data.length)]);
      })
      .catch((error) => console.error("Error fetching quotes:", error));
  }, []);

  const getNewQuote = () => {
    if (quotes.length > 0) {
      setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center vh-100 justify-content-center">
      {currentQuote ? (
        <Container quote={currentQuote.quote} author={currentQuote.author} tags={currentQuote.tags} />
      ) : (
        <p>Cargando cita...</p>
      )}
      <div className="quote-button">
        <Button onClick={getNewQuote} />
        {currentQuote && <CopyButton textToCopy={`"${currentQuote.quote}" - ${currentQuote.author}`} />}
      </div>
    </div>
  );
}