import Login from "./components/login";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Navbar } from "./components/navbar";
import Lifecycle from "./components/Lifecycle";
import ComponentWillMount from "./components/compwillmount";
import ComponentDidMount from "./components/compdidmount";
import Home from "./components/home";
import { createBrowserHistory } from 'history';


export const history = createBrowserHistory();
function App() {
  return (
    <div className="App">
    <BrowserRouter history={history}>
    <Navbar />
      <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/lifecycle' element={<Lifecycle fname={"ani"}/>} />
      <Route path='/compwillmount' element={<ComponentWillMount />} />
      <Route path='/compdidmount' element={<ComponentDidMount />} />
      <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
