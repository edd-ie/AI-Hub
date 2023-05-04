// import './book.css';
// import React from 'react';

// export default function Flipbook() {

  


//     function handleSubmit(e){
//         e.preventDefault();
//         let form = e.target;
//         fetch("https://api-inference.huggingface.co/models/facebook/bart-large-cnn",{
//         method: "POST",
//         headers: { Authorization: `Bearer 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` },
//         body: JSON.stringify({inputs:`${query}`}),
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log("file: ai.js:82 -> form.addEventListener -> data:", data);
        
//     })
//     .catch(err => console.log(err))

//     }   
//     return(
//    <div id='host'> 
//     <div className="book-container">
//     <input id="checkbox-cover" type="checkbox"/>
//     <div className="book">
//      <label for="checkbox-cover" class="cover"></label>
//      <div className="backcover"></div>
//      <div className="page page1">
//         <div id='bookForm'> 
//             <form onSubmit={handleSubmit}>
//                 <input id="doc" type="text" name="name" placeholder='Fulltext'/>
//                 <input type="submit" value="Summarize" id="summarySub"/>
                
//             </form>
//         </div>
//         <div id='summary'>
//           <p></p>
//         </div>
//      </div>
//   </div>
// </div>
//    </div>

//   );
// }
import './book.css';
import React, { useState } from 'react';

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

        <input id="checkbox-cover" type="checkbox" />
        <div className="book">
          <img id="bookImg" src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fartificial-intelligence-theme-abstract-network-patterns-ai-lines-179669698.jpg&tbnid=VXoxJhx22JChuM&vet=12ahUKEwjd15nWpNv-AhUqsScCHb6ADx4QMygGegUIARDMAQ..i&imgrefurl=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fai-theme.html&docid=UMnHGkUltK5nWM&w=800&h=
          409&q=images%20on%20ai%20themes%20and%20backgrounds&ved=2ahUKEwjd15nWpNv-AhUqsScCHb6ADx4QMygGegUIARDMAQ"></img>
          <label htmlFor="checkbox-cover" className="cover"></label>
          <div className="backcover"></div>
          <div className="page page1">
          
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
