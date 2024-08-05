import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/shared/header/Header";
import Register from "./pages/register/Register";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Register />}></Route>
      </Routes>
    </>
  );
}

export default App;
