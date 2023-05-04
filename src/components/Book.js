import './book.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Flipbook() {
  const [summary, setSummary] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const query = form.elements.doc.value;
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
      <div className="book-container">
        <Link to="/"> <button id='Homebutton'></button></Link>

        <input id="checkbox-cover" type="checkbox" />
        <div className="book">
 
          <label htmlFor="checkbox-cover" className="cover"></label>
          <div className="backcover"></div>
          <div className="page page1">
          <img id="backgroundImage" alt=''  src={require("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fillustrations%2Fnursery-rhyme-background&psig=AOvVaw25ENr6h0pFMIgfrIfW9lTN&ust=1683285149146000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKjam__D24CFQAAAAAdAAAAABAD")}></img>
            <div id='bookForm'>
              <form onSubmit={handleSubmit}>
                <input id="doc" type="text" name="doc" placeholder='Fulltext' />
                <input type="submit" value="Summarize" id="summarySub" />
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
