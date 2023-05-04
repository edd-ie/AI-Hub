import './Art.css'

import React, { useState, useEffect } from 'react';

export default function Art(){
    const [art, setArt] = useState([]);
//     useEffect(() => {
//         fetch(`https://lexica.art/api/v1/search?q=${}`)
//         .then((res)=>res.json()) 
//         .then((data)=>{setArt(data)
//     });
// }, []);

    function searchArt(e){
        e.preventDefault();
        let form = e.target
        let input = form[0].value
        console.log(input)

        fetch(`https://lexica.art/api/v1/search?q=${input}`)
        .then((res)=>res.json()) 
        .then((data)=>{})

        form.reset()
    }

    

  
    return(
        <div className="art">
            <form onSubmit={searchArt}>
                <input  type="text" placeholder="Search Art"/>
                <button onClick={e => setArt(e.target.value)}>SEARCH</button>
            </form>

            


    
            
        </div>
    )
}