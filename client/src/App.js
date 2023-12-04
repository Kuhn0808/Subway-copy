import "./App.css";
import { Route, Routes } from "react-router-dom";
import History from "./components/subway/history";
import Promise from "./components/subway/promise";
import Apply from "./components/subway/apply";
import StoreSearch from "./components/subway/search";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Main from "./components/mainPage";
import Event from './components/NewsPage/Event';
import Login from './components/login/login';
import Franchise from './components/franchise/franchise'
import Menuintro from "./components/menuintro/menuintro";
import Detail from './components/productdetail/detail';
import Order from "./components/order/order"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/History" element={<History></History>}></Route>
        <Route path="/Promise" element={<Promise></Promise>}></Route>
        <Route path="/Apply" element={<Apply></Apply>}></Route>
        <Route path="/StoreSearch" element={<StoreSearch></StoreSearch>}></Route>
        <Route path="/Event" element={<Event />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/franchise' element={<Franchise />}></Route>
        <Route path="/menuIntro/:product" element={<Menuintro></Menuintro>}></Route>
        <Route path="/menuIntro/:product/:id" element={<Detail></Detail>}></Route>
        <Route path="/order/:type/:step" element={<Order></Order>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
