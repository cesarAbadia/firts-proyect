import Home from "../paginas/home/Home";
import { Routes, Route } from "react-router-dom";

export function Rutas() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        </Routes>
    </>
  );
}