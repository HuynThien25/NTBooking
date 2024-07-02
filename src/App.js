import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Home from "./pages/home/Home";
// import GoBackButton from "../src/components/goBackBtn/GoBackBtn"


function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
      </Routes>
      {/* <GoBackButton/> */}

    </BrowserRouter>
   
  );
}

export default App;