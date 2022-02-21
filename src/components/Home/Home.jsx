import React from 'react';
import { useHistory } from 'react-router-dom';

function Home() {
  const history = useHistory();
  
  const handleClick = () => {
    alert('Ya clicked me!');
    // change location
    console.log('history is', history.pop);
    history.push('/animals');
  }
  
  return (
    <div>
      <h1>HOME</h1>
      <button onClick={handleClick}>Let's goooo</button>
      <img src="https://pixy.org/download/4718707/" width={500}/>
    </div>
  );
}

export default Home;
