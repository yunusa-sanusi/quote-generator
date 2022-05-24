import React, { useState, useEffect, useContext } from "react";

const AppContext = React.createContext();

const randomQuoteApiEndpoint =
  "https://quote-garden.herokuapp.com/api/v3/quotes/random";

export const AppProvider = ({ children }) => {
  const [quote, setQuote] = useState({});
  const [authorQuotes, setAuthorQuotes] = useState([]);
  const [showAuthorQuotes, setShowAuthorQuotes] = useState(false);
  const [loading, setLoading] = useState(true);

  const getRandomQuote = async () => {
    setLoading(true);
    setShowAuthorQuotes(false);
    const response = await fetch(randomQuoteApiEndpoint);
    const { data } = await response.json();
    setQuote(data[0]);
    setLoading(false);
  };

  const getAuthorQuotes = async () => {
    setLoading(true);
    setShowAuthorQuotes(true);
    const { quoteAuthor } = quote;
    const response = await fetch(
      `https://quote-garden.herokuapp.com/api/v3/quotes?author=${quoteAuthor}&page=1&limit=10`,
    );
    const { data } = await response.json();
    setAuthorQuotes(data);
    setLoading(false);
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <AppContext.Provider
      value={{
        quote,
        authorQuotes,
        showAuthorQuotes,
        loading,
        getAuthorQuotes,
        getRandomQuote,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
