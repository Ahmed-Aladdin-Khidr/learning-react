import { useState, useRef } from 'react';

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState('unknown entity');
  const playerName = useRef();

  const handleClick = () => {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = '';
  };

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName}</h2>
      <p>
        <input type="text" ref={playerName}/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
