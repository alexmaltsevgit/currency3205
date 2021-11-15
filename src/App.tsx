import "./App.css";
import { Route, Routes } from "react-router-dom";
import Library from "./pages/Library/Library.page";
import Converter from "./pages/Converter/Converter.page";
import Page404 from "./pages/404/Page404.page";
import Header from "./components/Header/Header.component";
import Home from "./pages/Home/Home.page";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path={"/"} element={<Home />} />

        <Route path={"/library"} element={<Library />} />

        <Route path={"/converter"} element={<Converter />} />

        <Route path={"*"} element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
