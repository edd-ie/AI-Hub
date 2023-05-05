import './about.css'
import { Link } from "react-router-dom";

export default function About() {
    return(
    <div id="about">
        <Link to="/">
            <div id='about-img'>
                <span className="material-symbols-sharp">
                    home
                </span>
            </div>
        </Link>
        <h1 id='aheader'>AI-HUB</h1>
        <div id='about-content'>
            <h2>why we founded our company</h2>
            <p>
            Our company  was founded with the goal of creating and advancing AI in a way that benefits humanity as a whole and push us 
            one step closer to a better brighter future.
            </p>
            <h3>why we developed AI-HUB</h3>
            <p>
            AI-HUB was developed to provide a conversational agent that can assist users in various tasks through natural language processing (NLP) and machine learning (ML) techniques. 
            It is based on the GPT (Generative Pre-trained Transformer) architecture, which is a state-of-the-art deep learning model for
            natural language processing.
            It is an AI system that could engage in human-like conversations and provide helpfulresponses to users. Its advanced NLP
            capabilities enable it to understand natural language input from users and generate responses that are 
            contextually relevant and  coherent.
            </p>
            <h4>Our Company Goals</h4>
            <p>
            The vission of our company is to create and promote safe and beneficial artificial intelligence (AI) that benefits humanity
            as a whole. The organization believes that advanced AI has the potential to revolutionize many fields, from healthcare to 
            education, and that it can help solve some of the world's most pressing problems.
            </p>

        
            
        </div>
        
            



    </div>
)
}

