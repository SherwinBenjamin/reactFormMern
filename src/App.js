import React from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./routes/Home"
import Register from "./routes/Register";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
