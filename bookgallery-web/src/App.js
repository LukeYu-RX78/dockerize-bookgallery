import React from 'react';
import './App.css';
import logo from './assets/logo.png'
import Navigation from "./components/Navigation/Navigation";
import {Route, Routes} from "react-router-dom";
import {BestSellingPage} from "./pages/BestSellingPage/BestSellingPage";
import {BookListsPage} from "./pages/BookListsPage/BookListsPage";
import {BookUpdatePage} from "./pages/BookUpdatePage/BookUpdatePage";

function App() {
  return (
      <div className="container">
          <div className="content">
              <div className="header">
                  <img className="logo" src={logo} alt="Logo" />
              </div>
              <div className="navigation">
                  <Navigation />
              </div>
              <Routes>
                  <Route path="/" element={<BestSellingPage/>} />
                  <Route path="/book-lists" element={<BookListsPage/>}/>
                  <Route path="/book-update" element={<BookUpdatePage/>}/>
              </Routes>
              <div className="footer">
                  Book Gallery demo by Luke.
              </div>
          </div>
      </div>
  );
}

export default App;
