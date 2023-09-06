import './App.css';
import Bill from './Bill';

import { sculptureList } from './Result';
import Yourcart from './Yourcart';
import { useState } from 'react';

function App() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    if (index < sculptureList.length - 1) {
      setIndex(index + 1);
    }
  }

  function handleClickprev() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }b

  let sculpture = sculptureList[index];
  return (
    <div>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
        <main id="main" role="main">
          <section id="checkout-container">
            <div className="container">
              <div className="row py-5">
                <Yourcart/>
                <Bill/>
              </div>
            </div>
          </section>
        </main>
        <button onClick={handleClickprev}>
        prev
      </button>
        <button onClick={handleClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
      </div>
  );
}
export default App;
