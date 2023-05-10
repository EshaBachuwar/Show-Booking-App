
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Navbar } from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Details from './components/Details/Details';
import {useState} from 'react'
import Shows from './components/Shows/Shows';
import Footer from './components/Footer/Footer';
function App() {
  const [booking,setBooking]=useState([])
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/details/:name' element={<Details booking={booking} setBooking={setBooking}/>}/>
          <Route path='/shows' element={<Shows booking={booking}/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
