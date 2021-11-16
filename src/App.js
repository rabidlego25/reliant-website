// import styled from "styled-components";
import React from "react";
import GlobalStyle from "./GlobalStyle";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar.component";
import Homepage from "./routes/homepage/homepage.component";

// const Background = styled.div`
//   position: fixed;
//   background: rgb(98, 87, 193);
//   background: linear-gradient(
//     135deg,
//     rgba(98, 87, 193, 1) 0%,
//     rgba(77, 162, 228, 1) 50%
//   );
//   width: 100%;
//   height: 200vh;
//   z-index: -2;
// `;
// <GlobalStyle />;

// <Routes>
// <Route path="/" element={<Homepage />} />
// </Routes>

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
