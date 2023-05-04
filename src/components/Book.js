import './book.css';
import React from 'react';

export default function Flipbook() {
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
    <input id="checkbox-cover" type="checkbox" />
    <div className="book">
     <label for="checkbox-cover" class="cover"></label>
     <div className="backcover"></div>
     <div className="page page1">
        <div id='bookForm'> 
            <form >
                <input type="text" name="name" placeholder='Fulltext'/>
                <input type="submit"/>
            </form>
        </div>
     </div>
     <div className="page page2"></div>
     <div className="page page3"></div>
  </div>
</div>
   </div>

  );
}
