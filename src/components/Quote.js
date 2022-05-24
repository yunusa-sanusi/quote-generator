import React from "react";
import { useGlobalContext } from "../context";
import { MdTrendingFlat } from "react-icons/md";

const Quote = ({ quoteAuthor, quoteText, quoteGenre }) => {
  const { getAuthorQuotes, showAuthorQuotes } = useGlobalContext();

  return (
    <article className="quote-block">
      <div className="quote-container">
        <blockquote className="quote">"{quoteText}"</blockquote>
      </div>
      {!showAuthorQuotes && (
        <div className="author-info" onClick={getAuthorQuotes}>
          <div>
            <h4 className="author">{quoteAuthor}</h4>
            <small className="quote-genre">{quoteGenre}</small>
          </div>
          <MdTrendingFlat size={24} color="#f2f2f2" />
        </div>
      )}
    </article>
  );
};

export default Quote;
