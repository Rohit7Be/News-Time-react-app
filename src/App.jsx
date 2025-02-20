import { useState } from 'react';
import Navbar from './Components/Navbar'
import NewsBoard from './Components/NewsBoard'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css'


function App() {
  const [category, setCategory] = useState("general");

  return (
    <>
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />



    </>
  )
}

export default App
