import React, { useState } from 'react';
import Item from './Item';
import './App.scss';

function App() {
  const [items, set] = useState([
    {
      id: Math.random()
        .toString(36)
        .substr(2, 9),
      name: 'React'
    },
    {
      id: Math.random()
        .toString(36)
        .substr(2, 9),
      name: 'Vue'
    },
    {
      id: Math.random()
        .toString(36)
        .substr(2, 9),
      name: 'Angular'
    },
    {
      id: Math.random()
        .toString(36)
        .substr(2, 9),
      name: 'Javascript'
    },
    {
      id: Math.random()
        .toString(36)
        .substr(2, 9),
      name: 'React'
    },
    {
      id: Math.random()
        .toString(36)
        .substr(2, 9),
      name: 'Vue'
    },
    {
      id: Math.random()
        .toString(36)
        .substr(2, 9),
      name: 'Angular'
    },
    {
      id: Math.random()
        .toString(36)
        .substr(2, 9),
      name: 'Javascript'
    },
    {
      id: Math.random()
        .toString(36)
        .substr(2, 9),
      name: 'React'
    },
    {
      id: Math.random()
        .toString(36)
        .substr(2, 9),
      name: 'Vue'
    },
    {
      id: Math.random()
        .toString(36)
        .substr(2, 9),
      name: 'Angular'
    },
    {
      id: 4,
      name: 'Javascript'
    },
    {
      id: Math.random()
        .toString(36)
        .substr(2, 9),
      name: 'React'
    },
    {
      id: Math.random()
        .toString(36)
        .substr(2, 9),
      name: 'Vue'
    },
    {
      id: Math.random()
        .toString(36)
        .substr(2, 9),
      name: 'Angular'
    },
    {
      id: Math.random()
        .toString(36)
        .substr(2, 9),
      name: 'Javascript'
    }
  ]);

  const removeItem = id => {
    set(items.filter(item => item.id !== id));
  };

  return (
    <div className="App">
      {items.map((item, index) => (
        <Item index={index} key={item.id} item={item} clicked={removeItem} />
      ))}
    </div>
  );
}

export default App;
