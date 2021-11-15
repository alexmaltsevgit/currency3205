import "./App.css";
import { Route, Routes } from "react-router-dom";
import Library from "./pages/Library/Library.page";
import Converter from "./pages/Converter/Converter.page";
import Page404 from "./pages/404/Page404.page";

function App() {
  return (
    <Routes>
      <Route path={"/library"} element={<Library />} />

      <Route path={"/converter"} element={<Converter />} />

      <Route path={"*"} element={<Page404 />} />
    </Routes>
  );
}

export default App;
