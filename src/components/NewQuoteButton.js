import React from 'react';

const NewQuoteButton = ({ fetchQuote }) => {
    return (
        <button id="new-quote" onClick={fetchQuote}>
            New Quote
        </button>
    );
};

export default NewQuoteButton;
