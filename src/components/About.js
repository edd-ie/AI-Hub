import './about.css';
import { Link } from 'react-router-dom';

function About() {
  return (
    
    <div>
      <h1>AI-HUB</h1>
      <div>
        <h2>why we founded our company</h2>
        <p>
          Our company was founded with the goal of creating and advancing AI in a way that benefits humanity as a whole and pushes us 
          one step closer to a better, brighter future.
        </p>
        <h3>why we developed AI-HUB</h3>
        <p>
          <img src="https://png.pngtree.com/background/20210709/original/pngtree-green-watercolor-stack-rhyme-picture-image_949171.jpg"></img>
          AI-HUB was developed to provide a conversational agent that can assist users in various tasks through natural language
           processing (NLP) and machine learning (ML) techniques. It is based on the GPT (Generative Pre-trained Transformer) 
           architecture, which is a state-of-the-art deep learning model for natural language processing. It is an AI system that
            could engage in human-like conversations and provide helpful responses to users. Its advanced NLP capabilities enable it 
            to understand natural language input from users and generate responses that are contextually relevant and coherent.
        </p>
        <h4>Our Company Goals</h4>
        <p>
          The vision of our company is to create and promote safe and beneficial artificial intelligence (AI) that benefits humanity
           as a whole. The organization believes that advanced AI has the potential to revolutionize many fields, from healthcare to 
           education, and that it can help solve some of the world's most pressing problems.
        </p>
        <Link to="/"> <button id='Homebutton'></button></Link>
      </div>
    </div>
  );
}

export default About;
