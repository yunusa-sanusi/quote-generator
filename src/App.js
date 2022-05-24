import React from "react";
import { MdAutorenew } from "react-icons/md";
import Quote from "./components/Quote";
import { useGlobalContext } from "./context";

function App() {
  const { authorQuotes, quote, showAuthorQuotes, getRandomQuote, loading } =
    useGlobalContext();

  return (
    <div>
      <header className="header">
        <button onClick={getRandomQuote}>
          <h6>random</h6> <MdAutorenew size={18} color="#333" />
        </button>
      </header>
      {!loading && (
        <section className="quote-section">
          <div>
            {showAuthorQuotes && (
              <h1 className="author-name">{quote.quoteAuthor}</h1>
            )}
          </div>
          {showAuthorQuotes ? (
            authorQuotes.map((quote) => {
              const { _id } = quote;
              return <Quote key={_id} {...quote} />;
            })
          ) : (
            <Quote {...quote} />
          )}
        </section>
      )}
      <footer className="footer">
        <p>
          created by{" "}
          <a href="https://github.com/yunusa-sanusi">Sanusi Yunusa</a> -{" "}
          <a href="https://devchallenges.io/">devChallenges.io</a>{" "}
        </p>
      </footer>
    </div>
  );
}

export default App;
