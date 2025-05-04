import React, { useState } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://vitamin-10-flask-django-deploying.onrender.com/api/quote'); // Replace with your real backend URL
      const data = await response.json();
      setQuote(data.quote);
    } catch (error) {
      setQuote('Failed to fetch quote');
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h1>Quote of the Day</h1>
      <button onClick={fetchQuote}>Get Quote</button>
      <p>{quote}</p>
    </div>
  );
}

export default App;
