//1 -의존하는 패키지등을 정의한곳이다 react-router-dom과 최상위 컴포넌트 등을 정의했다
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import ListBoardComponent from "./components/ListBoardComponent";
import CreateBoardComponent from "./components/CreateBoardComponent";
import ReadBoardComponent from "./components/ReadBoardComponent";
import EditBoardComponent from "./components/EditBoardComponent";

//2 app()함수에 최상위 컴포넌트들을 정의한다
function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/" element={<ListBoardComponent />} />
            <Route path="/board" element={<ListBoardComponent />} />
            <Route path="/create-board" element={<CreateBoardComponent />} />
            <Route path="/read-board/:no" element={<ReadBoardComponent />} />
            <Route path="/edit/:no" element={<EditBoardComponent />} />
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
