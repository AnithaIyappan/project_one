import Login from "./components/login";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Navbar } from "./components/navbar";
import Lifecycle from "./components/Lifecycle";
import ComponentWillMount from "./components/compwillmount";
import ComponentDidMount from "./components/compdidmount";
import Home from "./components/home";
import { createBrowserHistory } from 'history';
import Person from "./components/Person";


export const history = createBrowserHistory();
function App() {

  const Name = {
    name: "babooji",
    age: 31,
    email: "babooji@gmail.com",
    children: ["angel", "doll"],
    isMarried: true
  }

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
      <Route path='/person' element={<Person person={Name} /> } />
      </Routes>
    </BrowserRouter>
    </div>
    // <div>
    //   <Person 
    //   name={"babooji"}
    //   age={31}
    //   email={"babooji@gmail.com"}
    //   children={["varadhu", "umayal"]}
    //   isMarried={true}
    //   />
    // </div>
  );
}

export default App;


//---------------------------------


// import Login from "./components/login";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import { Navbar } from "./components/navbar";
// import Lifecycle from "./components/Lifecycle";
// import ComponentWillMount from "./components/compwillmount";
// import ComponentDidMount from "./components/compdidmount";
// import Home from "./components/home";
// import { createBrowserHistory } from 'history';
// import Person from "./components/Person";


// export const history = createBrowserHistory();
// function App() {

//   const baboo = {
//     name: "babooji",
//     age: 31,
//     email: "babooji@gmail.com",
//     children: ["kanmani", "kathija"],
//     isMarried: true
//   }

//   return (
//     <div>
//       <Person person={baboo} />
//     </div>
//   );
// }

// export default App;
