import './book.css';
import React from 'react';

export default function Flipbook() {

  // fetch("https://api-inference.huggingface.co/models/facebook/bart-large-cnn",{
  //       method: "POST",
  //       headers: { Authorization: `Bearer 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` },
  //       body: JSON.stringify({inputs:`${query}`}),
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //       console.log("file: ai.js:82 -> form.addEventListener -> data:", data);
        
  //   })
  //   .catch(err => console.log(err))

  return (
    // <div>
    //   <input type="checkbox" id="checkbox-cover" />
    //   <div className="book">
    //     <div className="cover">cover</div>
    //         <label for="checkbox-cover"></label>
    //     <div className="page">page</div>
    //     <div className="back-cover">page</div>
    //   </div>
    // </div>

   <div id='host'> 
    <div className="book-container">
    <input id="checkbox-cover" type="checkbox"/>
    <div className="book">
     <label for="checkbox-cover" class="cover"></label>
     <div className="backcover"></div>
     <div className="page page1">
        <div id='bookForm'> 
            <form >
                <input id="doc" type="text" name="name" placeholder='Fulltext'/>
                <input type="submit" value="Summarize" id="summarySub"/>
            </form>
        </div>
        <div id='summary'>
          <p></p>
        </div>
     </div>
  </div>
</div>
   </div>

  );
}
