
import React, { useEffect, useState } from 'react';
import Sayac from "./components/Sayac";


function App() {
  const [sayaclar, setSayaclar] = useState([]);

  useEffect(() => {
    const fetchSomething = async () => {
      const res = await fetch('http://localhost:5000/sayaclar')
      const data = await res.json()
      setSayaclar(data)
    }

    fetchSomething()
  }, []);

  return (
    <div className='container'>
      {
        sayaclar.map((sayac) => (
          <Sayac baslangic={sayac.startVal} key={sayac.id}  />
        ))
      }      
    </div>
  );
}

export default App;