/* eslint-disable prefer-const */
import React, { useState } from 'react';

export default function AppDrawer() {
  const [iconClicked, setIconClicked] = useState(false);
  const [image, setImage] = useState('https://i.imgur.com/7UWSnsD_d.webp?maxwidth=760&fidelity=grand');
  const vaporeon = 'https://i.imgur.com/7UWSnsD_d.webp?maxwidth=760&fidelity=grand';
  const gardevoir = 'https://i.imgur.com/qeAZRuq.png';
  const lopunny = 'https://i.imgur.com/kerbwps.png';

  const handleClick = (e) => {
    setIconClicked(!iconClicked);
    switch (e.currentTarget.id) {
      case 'vaporeon':
        setImage(vaporeon);
        break;

      case 'gardevoir':
        setImage(gardevoir);
        break;

      case 'lopunny':
        setImage(lopunny);
        break;
    }
  };

  let displayMenu = iconClicked;

  return (
    <>
      <menu hidden={!displayMenu}>
        <div>
          <h3>Choose your Pokémon!</h3>
          <li>
            <button id='vaporeon' onClick={handleClick}>Vaporeon</button>
          </li>
          <li>
            <button id='gardevoir' onClick={handleClick}>Gardevoir</button>
          </li>
          <li>
            <button id='lopunny' onClick={handleClick}>Lopunny</button>
          </li>
        </div>
      </menu>
      <div id='overlay' hidden={!displayMenu}>
        <button id='exit-menu' onClick={handleClick}/>
      </div>
      <button onClick={handleClick} id='open-menu'>
        <i className="fa-solid fa-bars fa-2x" />
      </button>
      <div id='background'>
        <img src={image}></img>
      </div>
    </>
  );
}
