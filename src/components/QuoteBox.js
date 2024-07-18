import React, { useState, useEffect } from 'react';
import Quote from './Quote';
import Author from './Author';
import NewQuoteButton from './NewQuoteButton';
import TweetQuote from './TweetQuote';

const QuoteBox = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    const fetchQuote = async () => {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        setQuote(data.content);
        setAuthor(data.author);
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    return (
        <div id="quote-box">
            <Quote text={quote} />
            <Author author={author} />
            <NewQuoteButton fetchQuote={fetchQuote} />
            <TweetQuote quote={quote} author={author} />
        </div>
    );
};

export default QuoteBox;
