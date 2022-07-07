import Login from "./components/login";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Navbar } from "./components/navbar";
import Lifecycle from "./components/Lifecycle";
import ComponentWillMount from "./components/compwillmount";
import ComponentDidMount from "./components/compdidmount";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />
      <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/lifecycle' element={<Lifecycle fname={"ani"}/>} />
      <Route path='/compwillmount' element={<ComponentWillMount />} />
      <Route path='/compdidmount' element={<ComponentDidMount />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
