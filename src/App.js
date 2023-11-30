import React, {useEffect, useState} from 'react';
import "./components/Layout/App.css";

const API = 'https://dummyjson.com/products';

function App() {
  const [loading, setloading] = useState(false)

  useEffect(() => {
    loading(true)
    fetch(API)
  }, [])
}

export default App;