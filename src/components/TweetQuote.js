import React from 'react';

const TweetQuote = ({ quote, author }) => {
    return (
        <a
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                `"${quote}" - ${author}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
        >
            Tweet
        </a>
    );
};

export default TweetQuote;
