import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CartList from './Components/cart';
import Spares from './Components/spares';
import Nav from './Components/Nav';
import Contact from './Components/contact';
import Service from './Components/service';
import Payment from './Components/payment';
import Addproduct from './Components/addproduct';
import Auther from './Components/Login';
import Logout from './Components/Logout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Auther/>}></Route>

        <Route path='/sucess' element={<Nav/>}></Route>
        <Route path='/spares' element={<Spares/>}></Route>
        <Route path='/cart' element={<CartList/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/service' element={<Service/>}></Route>
        <Route path='/payment' element={<Payment/>}></Route>
        <Route path='/addproduct' element={<Addproduct/>}></Route>
        <Route path='/logout' element={<Logout/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
