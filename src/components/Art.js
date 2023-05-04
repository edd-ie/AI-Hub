import './Art.css'

import React, { useState } from 'react';

export default function Art(){
    const [art, setArt] = useState([]);
    const [prompt, setPrompt] = useState('')


    function searchArt(e){
        e.preventDefault();
        // let form = e.target
        // let input = form[0].value
        // console.log(input)

        fetch(`https://lexica.art/api/v1/search?q=${prompt}`)
        .then((res)=>res.json()) 
        .then((data)=>{setArt(data.images)})

        // form.reset()
    }

    console.log(art);

  
    return(
        <div className="art">
            <form onSubmit={searchArt}>
                <input  type="text" placeholder="Search Art" value={prompt} onChange={e=>setPrompt(e.target.value)}/>
                <button >SEARCH</button>
            </form>

            <h5>Showing results for: {prompt}</h5>
            <ul className='art-display'>
                {art.map((item) => (
                <li key={item.id}>
                    <img src={item.src} alt={item.title} className='img-layout'/>
                    </li>
            ))}
            </ul>
            


    
            
        </div>
    )
}