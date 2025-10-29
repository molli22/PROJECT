import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SideBAr from "./components/SideBar";

function App() {
  let items = ["New York", "San Francosco", "Tokyo", "London", "Paris"];

  const handleSelectedItem = (item: string) => {};

  return (
    <div className="container">
      <Header />
      {/* <Main /> */}
      <Footer />
      {/* <SideBAr /> */}

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Register" element={<Register />}></Route>
      </Routes>

      {/* <Routes>
        <Route path="/Grades" element={<Grades />}></Route>
      </Routes> */}

      {/* <StyleSheet></StyleSheet>

      <Greet name="Inessa" surName="Tkach" />

      <br></br>

      <UserPic></UserPic>
      <br></br>

      <Current classRoom="2.21" subject="Math" teacher="Marina"></Current>
      <br></br> */}

      {/* <FuncClick nameBtn="ציונים" color="primary"></FuncClick>
      <FuncClick nameBtn="מערכת" color="secondary"></FuncClick>
      <FuncClick nameBtn="כיתות" color="secondary"></FuncClick> */}
    </div>
  );
}

{
  /* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectedItem}
      /> */
}
export default App;
