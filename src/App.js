import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

//components
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';

console.log("M. Sakhelashvili");

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetch = async () => {
      const result = await axios(`
        https://www.breakingbadapi.com/api/characters?name=${query}
      `)  
      setItems(result.data);
      setIsLoading(false);
    }
    fetch();
  },[query]);


  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => {
        setQuery(q)
      }} />
      <CharacterGrid 
        isLoading={isLoading} 
        items={items} 
      />
    </div>
  );
}

export default App;
