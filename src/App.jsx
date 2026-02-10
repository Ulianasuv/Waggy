import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Slider from './components/Slider/Slider'
import Products from './components/Products/Products'
import Form from './components/Form/Form'
import Gallery from './components/Gallery/Gallery'
import Footer from './components/Footer/Footer'
import useLocalStorage from './hooks/useLocalStorage.js'

function App() {
  const [count, setCount] = useLocalStorage('count', 0);

  const [filterText, setFilterText] = useState('');

  return (
    <>
      <Header filter={filterText} setfilter={setFilterText} count={count}/>
      {filterText ? '' : <Slider />}
      
      <Products filter={filterText} setfilter={setFilterText} count={count} setCount={setCount}/>
      {filterText ? '' : <Form />}
      {filterText ? '' : <Gallery />}
      {filterText ? '' : <Footer />}
    </>
    
  )
}

export default App
