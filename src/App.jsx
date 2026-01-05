import './App.css'
import Homepage from './pages/Homepage';
import About from './pages/About';
import GameDetailsPage from './pages/GameDetailsPage';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';

function App() {


  

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' exact element={<Homepage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/game/:gameId' element={<GameDetailsPage/>}/>

      </Routes>
      
    </>
  )
}

export default App
