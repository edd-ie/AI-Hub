import './book.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Flipbook() {
  const [summary, setSummary] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const query = form[0].value;

    fetch("https://api-inference.huggingface.co/models/facebook/bart-large-cnn", {
      method: "POST",
      headers: { Authorization: `Bearer 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` },
      body: JSON.stringify({ inputs: query }),
    })
      .then(response => response.json())
      .then(data => {
        console.log("Summary:", data[0].summary_text);
        setSummary(data[0].summary_text);
      })
      .catch(err => console.log(err));
  }

  return (
    <div id='host'>
      <Link to="/"><div id="homebutton"><span className="material-symbols-sharp">home</span></div></Link>
      <h1 id="bookH1">Flip book</h1>
      
      <div className="book-container">
        <input id="checkbox-cover" type="checkbox"/>
        <div className="book">
 
          <label htmlFor="checkbox-cover" className="cover"></label>
          <div className="backcover"></div>
          <div className="page page1">
            <div id='bookForm'>
              <form onSubmit={handleSubmit}>
                <textarea id="doc" type="text" name="doc" placeholder='Paste your text here'/>
                <input id="submit" type="submit" value="Submit"/>
              </form>
            </div>
            <div id='summary'>
              <p>{summary}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
